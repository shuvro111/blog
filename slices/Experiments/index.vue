<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(
  getSliceComponentProps<Content.ExperimentsSlice>([
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
    class="space-y-24"
  >
    <ContentList v-slot="{ list }" path="/lab">
      <ContentQuery
        v-for="item in list"
        :key="item._path"
        v-slot="{ data }"
        :path="item._path"
        find="one"
      >
        <ContentRenderer>
          <ContentRendererMarkdown :value="data" />
        </ContentRenderer>
      </ContentQuery>
    </ContentList>
  </section>
</template>
