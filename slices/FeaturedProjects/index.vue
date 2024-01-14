<script setup lang="ts">
import type { Content } from '@prismicio/client'
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

const projectSlices = computed(() => {
  return props.slice.items.map((item) => {
    const project = item.project as unknown as { data: { slices: Content.ProjectCardSlice[] } }
    return project.data.slices
  })
})
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="w-full flex flex-col"
  >
    <PrismicRichText
      :field="slice.primary.heading"
      class="uppercase text-sm tracking-widest font-semibold text-primary-400 mb-4"
    />

    <div class="space-y-8">
      <SliceZone
        v-for="(item, index) in projectSlices"
        :key="index"
        :slices="item"
        :components="components"
      />
    </div>

    <div class="flex items-center justify-center mt-12 text-sm hover:underline hover:text-primary-500 transition-all duration-500">
      <PrismicLink
        :field="slice.primary.button_link"
        class="flex items-center gap-x-2 text-sm font-semibold"
      >
        <span>
          {{ slice.primary.button_label }}
        </span>
        <Icon :name="slice.primary.button_icon as string" class="w-6 h-6" />
      </PrismicLink>
    </div>
  </section>
</template>
