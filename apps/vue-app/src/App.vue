<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import Button from 'primevue/button';
import exampleImage from './assets/example.png'
</script>

<template>
  <main>
    <h1>Vue PoC</h1>
    <p>It works! 🟢</p>
    <HelloWorld/>
    <i class="pi pi-check"></i>
    <i class="pi pi-times"></i>
    <span class="pi pi-search"></span>
    <span class="pi pi-user"></span>
    <p>
      <Button icon="pi pi-search" label="Search"/>
    </p>
    <img :src="exampleImage"  alt="Example"/>
  </main>
</template>

<style scoped>
main {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  padding: 2rem;
  line-height: 1.5;
}
</style>
