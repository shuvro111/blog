<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('[stuffs_i_use]', () =>
  prismic.client.getSingle('stuffs_i_use'))

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
