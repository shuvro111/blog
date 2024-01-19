<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { ProjectDocument, ProjectsDocument } from '~/prismicio-types'
import { components } from '~/slices'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.FeaturedProjectsSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
const { client } = usePrismic()
const projects = ref<Content.ProjectDocument[]>([])

if (props.slice.variation === 'default') {
  const projectIds = props.slice.items.map((item) => {
    const projectRef = item.project as unknown as ProjectDocument
    return projectRef.uid
  })

  const { data: featuredProjectsData } = await useAsyncData('featured-projects', () => client.getByUIDs('project', projectIds, {
    fetch: [
      'project.featured_image',
      'project.name',
      'project.description',
      'project.github_url',
      'project.live_url',
    ],
  }))
  projects.value = featuredProjectsData.value?.results ?? []
}
else {
  const order = props.slice.primary.order
  const { data: projectsData } = await useAsyncData('projects', () =>
    client.getByType('project', {
      orderings: {
        field: 'project.last_publication_date',
        direction: order ?? 'desc',
      },
      fetch: [
        'project.featured_image',
        'project.name',
        'project.description',
        'project.github_url',
        'project.live_url',
      ],
    }))

  projects.value = projectsData.value?.results ?? []
}
</script>

<template>
  <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="w-full flex flex-col">
    <PrismicRichText
      v-if="slice.variation === 'default'"
      :field="slice.primary.heading"
      class="uppercase text-sm tracking-widest font-semibold text-primary-400 mb-4"
    />

    <div v-if="projects.length" class="space-y-8">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>

    <div
      v-if="slice.variation === 'default'"
      class="flex items-center justify-center mt-12 text-sm hover:underline hover:text-primary-500 transition-all duration-500"
    >
      <PrismicLink :field="slice.primary.button_link" class="flex items-center gap-x-2 text-sm font-semibold">
        <span>
          {{ slice.primary.button_label }}
        </span>
        <Icon :name="slice.primary.button_icon as string" class="w-6 h-6" />
      </PrismicLink>
    </div>
  </section>
</template>
