<script setup lang="ts">
import HelloWorld from "@/shared/components/HelloWorld.vue";
import Button from 'primevue/button';
import exampleImage from '@/shared/assets/example.png'
import Card from 'primevue/card';
import ManualMeasurements from "@/modules/measurements/components/ManualMeasurements.vue";
</script>

<template>
  <main>
    <Card>
      <template #title>This is the Measurements module</template>
      <template #content>
        <p>Shared component | Hello World component:</p>
        <HelloWorld/>
        <p>Measurements Module --> ManualMeasurements component:</p>
        <ManualMeasurements />
        <p>Some fdfd icons:</p>
        <i class="pi pi-check"></i>
        <i class="pi pi-times"></i>
        <span class="pi pi-search"></span>
        <span class="pi pi-user"></span>
        <p>PrimeVue button:</p>
        <Button icon="pi pi-search" label="Søk"/>
        <p>Image example:</p>
        <img :src="exampleImage"  alt="Example"/>
      </template>
    </Card>
  </main>
</template>

<style scoped>
main {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  padding: 2rem;
  line-height: 1.5;
}
</style>
