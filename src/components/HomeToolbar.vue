<script setup lang="ts">
import imgBv from '@/assets/images/clan/BV.png'
import imgGb from '@/assets/images/clan/GB.png'
import imgEh from '@/assets/images/clan/EH.png'
import BaseButton from './BaseButton.vue'

const images = [imgBv, imgGb, imgEh]
</script>

<template>
  <div class="bg-surface border-b border-gray-600 py-6 mb-10">
    <div class="container mx-auto">
      <div class="flex items-center justify-between flex-wrap gap-8">
        <div class="flex items-center gap-8 flex-wrap">
          <div class="flex gap-4">
            <div
              v-for="(image, i) in images"
              :key="i"
              class="grayscale border border-gray-500 rounded-full p-1 hover:grayscale-0 hover:shadow-base hover:bg-secondary"
            >
              <img class="h-10" :src="image" alt="Clan Logo" />
            </div>
          </div>
          <h1 class="text-3xl font-medium tracking-widest">Spark Suits Edition 01 Collections</h1>
        </div>
        <BaseButton title="Add Collection" @click="$emit('addCollection')" />
      </div>
    </div>
  </div>
</template>
