<script setup lang="ts">
import BaseButton from './BaseButton.vue'

const { description } = defineProps<{
  description: string
}>()
</script>

<template>
  <div class="border border-black rounded-md hover:shadow-base transition-all h-full flex flex-col">
    <div class="p-4">
      <img
        class="w-full h-64 object-cover rounded-md"
        src="https://cdn.skymavis.com/mm-cache/4/2/486d1ac3913b14586cfb993135b7c4.jpg"
        alt="Product Img"
      />
    </div>
    <hr class="border-black" />
    <div class="flex-1 p-4 break-words flex flex-col justify-between">
      <div>
        <h2 class="text-lg font-bold mb-1">Bubblegum Violence #01601</h2>
        <p class="mb-2">Rp100.000</p>
        <p class="text-sm text-gray-700 mb-4">
          {{ description }}
        </p>
      </div>
      <div class="flex gap-4">
        <BaseButton title="Edit" class="w-full" type="secondary" />
        <BaseButton title="Delete" class="w-full" type="danger" />
      </div>
    </div>
  </div>
</template>
