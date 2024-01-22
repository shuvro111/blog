<script setup lang="ts">
import type { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ArticleSlice>([
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
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <article>
        <h1>{{ slice.primary.title }}</h1>
        <PrismicRichText :field="slice.primary.content" />
      </article>
    </div>
  </section>
</template>

<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}

.prose pre {
  @apply overflow-auto max-h-96 bg-gray-800/30;
}
</style>
