<script setup lang="ts">
import { useFixedHeader } from 'vue-use-fixed-header'

const prismic = usePrismic()
const headerRef = ref(null)
const { styles } = useFixedHeader(headerRef)

const { data } = useAsyncData('navigation', () =>
  prismic.client.getSingle('navigation'))

const logo = computed(() => data.value?.data.logo)
const navigation = computed(() => data.value?.data.navigation)
</script>

<template>
  <header ref="headerRef" :style="styles" class="fixed top-0 w-full z-50 px-4 sm:px-0">
    <UContainer as="nav" class="flex items-center justify-beteween my-4 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/50 dark:text-gray-200 dark:ring-gray-700 ring-gray-900/5">
      <ULink
        to="/"
        class="flex items-center justify-center px-3 py-4 transition hover:text-primary-500 dark:hover:text-primary-400"
        active-class="text-primary-600 dark:text-primary-400"
      >
        <PrismicImage
          v-if="logo"
          :field="logo"
          class="w-8 h-8"
        />
      </ULink>
      <ul
        class="w-full"
      >
        <!-- <USkeleton v-if="!settings" class="h-6 w-full rounded-full max-w-80 mx-auto" /> -->

        <div v-if="navigation" class="flex justify-center">
          <li v-for="item in navigation" :key="item.label as string">
            <UTooltip
              :text="item.label as string"
              :ui="{ popper: { strategy: 'absolute' } }"
            >
              <ULink
                :to="item.link"
                class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
                active-class="text-primary-600 dark:text-primary-400"
              >
                <Icon aria-hidden="true" :name="item.icon || ''" class="w-5 h-5 z-10" />
                <span
                  v-if="$route.path === item.link"
                  class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
                />
                <span
                  v-if="$route.path === item.link"
                  class="absolute h-8 w-8 z-0 rounded-full bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <span class="sr-only font-bold font-sans">{{ item.label }}</span>
              </ULink>
            </UTooltip>
          </li>
        </div>
      </ul>
      <ThemeToggle />
    </UContainer>
  </header>
</template>
