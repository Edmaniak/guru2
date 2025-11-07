<script setup lang="ts">
interface Props {
  variant?: 'default' | 'gradient' | 'glass' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hoverable: false
})

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
}

const variantClasses = {
  default: 'bg-white border border-primary-100 shadow-soft',
  gradient: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50 border border-primary-100 shadow-soft',
  glass: 'bg-white/60 backdrop-blur-md border border-white/50 shadow-soft-lg',
  elevated: 'bg-white shadow-soft-lg border border-primary-50'
}

const cardClasses = computed(() => [
  'rounded-xl transition-all duration-300 ease-out',
  variantClasses[props.variant],
  paddingClasses[props.padding],
  props.hoverable ? 'hover:shadow-soft-lg hover:scale-[1.02] cursor-pointer' : ''
])
</script>

<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>
