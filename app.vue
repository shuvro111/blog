<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Shuvro Sarkar` : 'Shuvro Sarkar'
  },
})
</script>

<template>
  <NuxtLoadingIndicator color="#22c55e" />
  <AppHeader />
  <UContainer class="py-32">
    <NuxtPage />
  </UContainer>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
