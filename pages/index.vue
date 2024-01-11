<script setup lang="ts">
import { components } from '~/slices'

const { asImageSrc } = usePrismic()
const { value: settings } = useSettings()
const { meta_description, og_image } = settings?.data || {}

useSeoMeta({
  description: meta_description,
  ogImage: asImageSrc(og_image),
})

const prismic = usePrismic()
const { data: page } = useAsyncData('[home]', () =>
  prismic.client.getSingle('home'))
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
