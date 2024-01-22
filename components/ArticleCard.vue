<script setup lang="ts">
import type { ArticleDocument } from '~/prismicio-types'

const { article } = defineProps<{
  article: ArticleDocument
}>()

const { title, description } = article.data.slices[0]?.primary ?? {}

function getReadableDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

<template>
  <NuxtLink :to="`articles/${article.uid}`" class="group">
    <article class="space-y-2">
      <time
        class="text-sm text-gray-400 dark:text-gray-500 pl-3.5 border-l-2 border-gray-200 dark:border-gray-500"
      >
        {{ getReadableDate(article.last_publication_date) }}
      </time>
      <h2
        class="text-base font-bold tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-400 transition-colors duration-500"
      >
        {{ title }}
      </h2>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        {{ description }}
      </p>
    </article>
  </NuxtLink>
</template>
