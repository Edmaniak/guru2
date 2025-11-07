<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
  dot?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  dot: false
})

const variantClasses = {
  primary: 'bg-primary-100 text-primary-800 border-primary-200',
  secondary: 'bg-secondary-100 text-secondary-800 border-secondary-200',
  accent: 'bg-accent-100 text-accent-800 border-accent-200',
  success: 'bg-green-100 text-green-800 border-green-200',
  warning: 'bg-amber-100 text-amber-800 border-amber-200',
  info: 'bg-spiritual-100 text-spiritual-800 border-spiritual-200'
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base'
}

const dotClasses = {
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500',
  accent: 'bg-accent-500',
  success: 'bg-green-500',
  warning: 'bg-amber-500',
  info: 'bg-spiritual-500'
}

const badgeClasses = computed(() => [
  'inline-flex items-center gap-1.5 font-medium rounded-full border transition-all duration-200',
  variantClasses[props.variant],
  sizeClasses[props.size]
])
</script>

<template>
  <span :class="badgeClasses">
    <span
      v-if="dot"
      :class="['w-2 h-2 rounded-full', dotClasses[variant]]"
    />
    <slot />
  </span>
</template>
