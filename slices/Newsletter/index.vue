<script setup lang="ts">
import type { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.NewsletterSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)

const copied = ref(false)
const email = ref('')

function copyToClipBoard(textToCopy: string) {
  navigator.clipboard.writeText(textToCopy)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
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
    <div class="mb-6 flex items-center gap-3">
      <div class="relative">
        <PrismicImage
          :field="slice.primary.avatar"
          :widths="[48]"
          :imgix-params="{
            fm: 'webp',
          }"
          class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 rounded-full h-12 w-12"
        />
        <span class="absolute inset-0 top-[65%] left-[80%] w-[12px] h-[12px] rounded-full bg-primary-500 border-2 border-gray-200 dark:border-gray-800" />
      </div>
      <div class="flex flex-col">
        <span class="block text-xs font-bold">Email</span>
        <UTooltip
          :ui="{
            popper: {
              strategy: 'absolute',
              placement: 'right',
            },
          }"
          class="text-gray-600 dark:text-gray-400 text-sm cursor-pointer p-0 bg-none"
          @click="() => copyToClipBoard(slice.primary.email as string)"
        >
          <template #text>
            <Icon v-if="copied" :name="slice.primary.email_copied_icon as string" class="mr-1" />
            <Icon v-else :name="slice.primary.email_copy_icon as string" />
          </template>
          <p>{{ slice.primary.email }}</p>
        </UTooltip>
      </div>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Get notified when I publish something new, and unsubscribe at any time.
    </p>
    <div class="flex items-center gap-3 mt-6">
      <UInput
        v-model="email"
        placeholder="Email Address"
        icon="i-heroicons-envelope"
        input-class="dark:focus:ring-gray-700 focus:ring-gray-200 text-sm"
        class="flex-1"
        size="xl"
      />
      <UButton size="lg" color="black" class="gap-x-1">
        <span>{{ slice.primary.button_label }}</span>
        <span>
          <Icon :name="slice.primary.button_icon as string" />
        </span>
      </UButton>
    </div>
  </section>
</template>
