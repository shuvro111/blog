<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('[home]', () =>
  prismic.client.getSingle('home'))
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
    class="space-y-24"
  />
</template>
