<script setup lang="ts">
import type { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.StuffsSlice>([
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
  >
    <ul class="space-y-8">
      <li>
        <div
          class="relative after:-z-10 after:block after:h-[2px] after:absolute after:top-1/2 after:transform after:bg-gray-100 dark:after:bg-white/10 after:w-full after:left-0 after:right-0"
        >
          <span
            class="font-medium text-sm text-gray-600 dark:text-gray-500 bg-gray-50 dark:bg-gray-900 pr-4"
          >{{ slice.primary.heading }}</span>
        </div>
      </li>
      <li v-for="item in slice.items" :key="item.title">
        <PrismicLink :field="item.link">
          <p
            class="text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-600"
          >
            {{ item.title }}
          </p>
          <p class="text-sm text-gray-500">
            {{ item.description }}
          </p>
        </PrismicLink>
      </li>
    </ul>
  </section>
</template>
