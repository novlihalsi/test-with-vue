<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import HomeSidebar from '@/components/HomeSidebar.vue'
import HomeToolbar from '@/components/HomeToolbar.vue'
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <BaseHeader />
  <main class="min-h-screen mb-8">
    <HomeToolbar />
    <section class="container mx-auto flex gap-8 flex-col lg:flex-row">
      <HomeSidebar />
      <div class="items-start flex-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard description="tesfjdkajfaojfiejaflkjdsafljaijfff" />
        <ProductCard description="tesfjdkajfaojfiejaflkjdsafljaijfff" />
        <ProductCard
          description="tesfjdkajfaojfiejaflkjdsafljaijffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        />
      </div>
    </section>
  </main>
  <BaseFooter />
</template>

<style scoped></style>
