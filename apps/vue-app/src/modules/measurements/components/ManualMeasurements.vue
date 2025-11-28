<script setup lang="ts">
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import {ref} from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
</script>

<template>
  <Card>
    <template #title>Manual Measurements</template>
    <template #subtitle>This could be the new manual measurements!</template>
    <template #content>
      <div class="card flex flex-col items-center gap-4">
        <InputText v-model="value1" type="text" size="small" placeholder="Small"/>
        <InputText v-model="value2" type="text" placeholder="Normal"/>
        <InputText v-model="value3" type="text" size="large" placeholder="Large"/>
      </div>
    </template>
  </Card>
</template>
