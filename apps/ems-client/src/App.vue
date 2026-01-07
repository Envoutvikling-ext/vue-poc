<script setup lang="ts">
import type {DropdownMenuItem, NavigationMenuItem} from '@nuxt/ui'
import envoLogo from '@/assets/images/envo_logo_trans.png'
import {computed, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

const showBookmarks = ref(true)
const showHistory = ref(false)
const showDownloads = ref(false)

const dropdownItems = computed(() => [{
  label: 'Your Apps',
  type: 'label' as const
}, {
  type: 'separator' as const
}, {
  label: 'EMS',
  type: 'checkbox' as const,
  checked: true,
}, {
  label: 'EPM',
  type: 'checkbox' as const,
  checked: false,
},] satisfies DropdownMenuItem[])

const items = computed<NavigationMenuItem[]>(() => [])
</script>

<template>
  <UApp>
    <UHeader toggle-side="left" title="Envo EMS" :ui="{
      root: 'bg-[#672666]',
    }">
      <template #left>
        <UDropdownMenu :items="dropdownItems" :content="{ align: 'start' }" :ui="{ content: 'w-48' }">
          <UButton color="primary" class="text-inverted" variant="ghost" icon="i-gg:menu-grid-r" />
        </UDropdownMenu>
        <a href="/">
          <img :src="envoLogo" alt="Envo EMS" class="w-auto h-5" />
        </a>
        <UBadge class="ml-4" color="neutral" variant="outline">Wirgenes vei 1</UBadge>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UButton class="text-inverted" variant="ghost" icon="material-symbols:arrow-left-alt">Back to EMS</UButton>
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain>
      <RouterView />
    </UMain>
  </UApp>
</template>


<style scoped></style>
