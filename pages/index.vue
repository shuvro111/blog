<script lang="ts" setup>
const { asImageSrc } = usePrismic()
const { value: settings } = useSettings()
const { meta_description, og_image } = settings?.data || {}

useSeoMeta({
  description: meta_description,
  ogImage: asImageSrc(og_image),
})
</script>

<template>
  <div>
    Homepage
  </div>
</template>

<style>

</style>
