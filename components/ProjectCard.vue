<script setup lang="ts">
import type { ProjectDocument } from '~/prismicio-types'

const { project } = defineProps<{ project: ProjectDocument }>()
</script>

<template>
  <div
    class="w-full flex flex-col gap-8"
  >
    <div class="flex gap-4 items-center">
      <PrismicImage
        :field="project.data.featured_image"
        :alt="project.data.featured_image?.alt ?? ''"
        class="w-14 h-14 dark:bg-gray-800 bg-white shadow shadow-gray-300 dark:shadow-gray-800 rounded p-3"
      />
      <div class="flex flex-col">
        <h3 class="text-sm font-semibold">
          {{ project.data.name }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 pr-4">
          {{ project.data.description }}
        </p>
      </div>
      <div class="flex gap-2">
        <UTooltip
          text="View On Github"
          :ui="{ popper: { strategy: 'absolute', placement: 'top' } }"
          class="text-sm font-semibold"
        >
          <PrismicLink
            :field="project.data.github_url"
            class="text-sm font-semibold"
          >
            <Icon name="ri:github-fill" class="w-6 h-6" />
          </PrismicLink>
        </UTooltip>
        <UTooltip
          text="Live Demo"
          :ui="{ popper: { strategy: 'absolute', placement: 'top', class: 'font-bold' } }"
          class="text-sm font-semibold"
        >
          <PrismicLink
            :field="project.data.live_url"
            class="text-sm font-semibold"
          >
            <Icon name="heroicons:arrow-up-right" class="w-6 h-6" />
          </PrismicLink>
        </UTooltip>
      </div>
    </div>
  </div>
</template>
