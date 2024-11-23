<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const searchQuery = computed(() => store.state.searchQuery)

const updateSearchQuery = (event: Event) => {
  const target = event.target as HTMLInputElement
  store.dispatch('setSearchQuery', target.value)
}
</script>

<template>
  <div
    class="bg-surface border border-black rounded-md py-6 px-4 w-full h-fit hover:shadow-base lg:w-72"
  >
    <h2 class="text-lg font-bold">Collection Items</h2>
    <p class="text-sm text-gray-500 mb-2">200 Items</p>
    <input
      class="w-full border-black border p-2.5 focus:outline-none focus:shadow-base focus:bg-secondary active:shadow-base rounded-md"
      placeholder="Find Collection"
      :value="searchQuery"
      @input="updateSearchQuery"
    />
    <hr class="border-black my-4" />
    <h2 class="text-lg font-bold mb-2">About Collection</h2>
    <p class="text-sm text-gray-800 text-justify">
      Introducing the Kaidro Mech Suit, affectionately dubbed the Spark Suit Edition 01. It is
      derived from the ethereal energies harnessed from the Astral Realm within the Kaidro lore.
      This NFT Collection comprises mech skins from three distinct clans: Bubblegum Violence Clan,
      Grimbone Clan, and Emerald Hand Clan. Each clan boasts its own intricate narrative, lore, and
      world-building within the expansive Kaidro universe.
    </p>
  </div>
</template>
