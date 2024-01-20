<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('[articles]', () =>
  prismic.client.getSingle('articles'))

useSeoMeta({
  title: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
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
