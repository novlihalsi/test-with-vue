<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <input
    class="w-full border-black border p-2.5 focus:outline-none focus:shadow-base focus:bg-secondary active:shadow-base rounded-md"
    v-bind="$attrs"
    v-model="model"
  />
</template>
