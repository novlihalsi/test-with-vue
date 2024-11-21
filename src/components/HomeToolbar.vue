<script setup lang="ts">
import imgBv from '@/assets/images/clan/BV.png'
import imgGb from '@/assets/images/clan/GB.png'
import imgEh from '@/assets/images/clan/EH.png'
import BaseButton from './BaseButton.vue'
</script>

<template>
  <div class="bg-surface border-b border-gray-600 py-6 mb-10">
    <div class="container mx-auto">
      <div class="flex items-center justify-between flex-wrap gap-8">
        <div class="flex items-center gap-8 flex-wrap">
          <div class="flex gap-4">
            <img
              class="h-12 grayscale border border-gray-500 rounded-full p-1 hover:grayscale-0"
              :src="imgBv"
              alt="BV Clan"
            />
            <img
              class="h-12 grayscale border border-gray-500 rounded-full p-1 hover:grayscale-0"
              :src="imgGb"
              alt="BV Clan"
            />
            <img
              class="h-12 grayscale border border-gray-500 rounded-full p-1 hover:grayscale-0"
              :src="imgEh"
              alt="BV Clan"
            />
          </div>
          <h1 class="text-3xl font-medium tracking-widest">Spark Suits Edition 01 Collections</h1>
        </div>
        <BaseButton title="Add Collection" />
      </div>
    </div>
  </div>
</template>
