<script setup lang="ts">
const { show } = defineProps<{
  show: boolean
  title: string
}>()
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="fixed z-50 top-0 left-0 w-full h-full bg-black/50 flex transition-all overflow-auto"
    >
      <div
        class="w-[90%] max-w-96 m-auto py-5 px-8 bg-white rounded-md transition-all shadow-base border-2 border-black"
      >
        <div>
          <h3 class="text-primary text-xl font-bold">{{ title }}</h3>
        </div>

        <div class="my-7">
          <slot name="body">default body</slot>
        </div>

        <div class="flex gap-4">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
