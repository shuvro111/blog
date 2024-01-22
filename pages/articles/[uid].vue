<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData(`[article-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID('article', route.params.uid as string))

useSeoMeta({
  title: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
  twitterCard: 'summary_large_image',
  twitterImage: page.value?.data.meta_image?.url,
  ogImage: page.value?.data.meta_image?.url,
  articleAuthor: ['Shuvro Sarkar'],
})
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
    class="space-y-24"
  />
</template>
