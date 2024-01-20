<script setup lang="ts">
import type { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.BookmarksSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)

function getHost(url: string) {
  const parsedUrl = new URL(url)
  let host = parsedUrl.host
  if (host.startsWith('www.'))
    host = host.substring(4)

  return host
}

function getThumbnail(url: string) {
  const host = getHost(url)
  return `https://logo.clearbit.com/${host}?size=32`
}
</script>

<template>
  <ul
    class="space-y-4"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <li v-for="(bookmark, index) in slice.items" :key="index">
      <PrismicLink
        :field="bookmark.url"
        class="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 px-4 py-2 rounded-lg -m-2 text-sm"
      >
        <UAvatar
          :src="getThumbnail($prismic.asLink(bookmark.url) ?? '')"
          :alt="bookmark.label ?? ''"
          :ui="{ rounded: 'rounded-md object-cover object-center' }"
        />
        <p class="truncate text-gray-700 dark:text-gray-200">
          {{ bookmark.label }}
        </p>
        <span class="flex-1" />
        <span class="text-xs font-medium text-gray-500">
          {{ getHost($prismic.asLink(bookmark.url) ?? '') }}
        </span>
      </PrismicLink>
    </li>
  </ul>
</template>
