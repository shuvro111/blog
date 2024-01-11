<script setup lang="ts">
import type { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.IntroSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="space-y-6"
  >
    <PrismicImage
      :field="slice.primary.avatar"
      :widths="[48, 64]"
      :imgix-params="{
        fm: 'webp',
      }"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
    />
    <PrismicRichText :field="slice.primary.heading" class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100" />
    <PrismicRichText :field="slice.primary.description" class="prose dark:prose-invert dark:prose-a:text-primary-400 prose-a:text-primary-500" />
  </section>
</template>
