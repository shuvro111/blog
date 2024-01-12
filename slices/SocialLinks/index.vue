<script setup lang="ts">
import type { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SocialLinksSlice>([
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
    class="w-full"
  >
    <PrismicRichText
      :field="slice.primary.heading"
      class="uppercase text-sm tracking-widest font-semibold text-primary-400 mb-4"
    />
    <div class="space-y-5">
      <PrismicLink
        v-for="(item, index) in slice.items"
        :key="index"
        :field="item.link"
        class="w-full flex items-center justify-between gap-4 dark:hover:text-gray-300 group transition-all duration-500"
      >
        <PrismicRichText :field="item.label" class="text-sm" />
        <div
          class="flex-1 border-b border-gray-300 dark:border-gray-800 group-hover:border-gray-700 transition-all duration-500"
        />
        <Icon :name="item.icon as string" class="w-6 h-6" />
      </PrismicLink>
    </div>
  </section>
</template>
