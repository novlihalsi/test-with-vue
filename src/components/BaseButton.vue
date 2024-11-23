<script setup lang="ts">
import { cn } from '@/utils/tw-merge'
import { type ClassValue } from 'clsx'

const {
  btnType = 'primary',
  title,
  ...props
} = defineProps<{
  class?: ClassValue
  title: string
  btnType?: 'primary' | 'secondary' | 'danger'
}>()

const getClass = () => {
  if (btnType === 'secondary') return 'bg-secondary hover:bg-secondary/80 active:bg-secondary'

  if (btnType === 'danger') return 'bg-danger hover:bg-danger/80 active:bg-danger'

  return 'bg-primary hover:bg-primary/80 active:bg-primary'
}
</script>

<template>
  <button
    :class="
      cn(
        'h-12 border-black border py-2.5 px-6 bg-primary hover:bg-primary/80 hover:shadow-base active:bg-primary rounded-md',
        getClass(),
        props.class,
      )
    "
    v-bind="$attrs"
  >
    {{ title }}
  </button>
</template>
