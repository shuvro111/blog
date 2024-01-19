<script setup lang="ts">
import type { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.BlogPostsSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)

const { client } = usePrismic()

const numberofPosts = props.slice.primary.number_of_posts
const order = props.slice.primary.order

const { data: articlesData } = await useAsyncData('articles', () =>
  client.getByType('article', {
    pageSize: Number(numberofPosts),
    orderings: {
      field: 'article.last_publication_date',
      direction: order ?? 'desc',
    },
    fetch: ['article.title', 'article.description'],
  }))

const articles = articlesData.value?.results
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <PrismicRichText
      :field="slice.primary.heading"
      class="uppercase text-sm tracking-widest font-semibold text-primary-400 mb-4"
    />
    <ul class="space-y-8">
      <li v-for="article in articles" :key="article.id">
        <ArticleCard :article="article" />
      </li>
    </ul>
  </section>
</template>
