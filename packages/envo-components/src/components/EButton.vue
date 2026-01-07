<script setup lang="ts">
// No need to import UButton; the Nuxt UI Vite plugin
// makes it available globally or handles auto-import.
defineProps<{
  label?: string
  color?: 'primary' | 'secondary' | 'error'
}>()
</script>

<template>
  <UButton v-bind="$attrs" :color="color" :label="label">
    <slot />
  </UButton>
</template>
