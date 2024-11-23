<script setup lang="ts">
import type { Product } from '@/store'
import BaseButton from './BaseButton.vue'
import { formatPrice } from '@/utils/helpers'

const { name, price, description, image } = defineProps<Product>()
</script>

<template>
  <div class="border border-black rounded-md hover:shadow-base transition-all h-full flex flex-col">
    <div class="p-4">
      <img
        class="w-full h-64 object-cover rounded-md"
        :src="image || 'https://placehold.co/400/5ba3e9/ffffff.png?text=Image'"
        alt="Product Image"
      />
    </div>
    <hr class="border-black" />
    <div class="flex-1 p-4 break-words flex flex-col justify-between">
      <div>
        <h2 class="text-lg font-bold mb-1">{{ name }}</h2>
        <p class="mb-2">{{ formatPrice(price) }}</p>
        <p class="text-sm text-gray-700 mb-4">
          {{ description }}
        </p>
      </div>
      <div class="flex gap-4">
        <BaseButton
          title="Edit"
          class="w-full"
          btn-type="secondary"
          type="button"
          @click="$emit('edit')"
        />
        <BaseButton
          title="Delete"
          class="w-full"
          btn-type="danger"
          type="button"
          @click="$emit('delete')"
        />
      </div>
    </div>
  </div>
</template>
