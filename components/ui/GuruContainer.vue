<script setup lang="ts">
interface Props {
  gradient?: 'primary' | 'secondary' | 'spiritual' | 'lotus' | 'none'
  blur?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  gradient: 'none',
  blur: false,
  maxWidth: 'lg',
  padding: 'md'
})

const gradientClasses = {
  primary: 'bg-gradient-to-br from-primary-50 via-white to-primary-100',
  secondary: 'bg-gradient-to-br from-secondary-50 via-white to-secondary-100',
  spiritual: 'bg-gradient-to-br from-spiritual-50 via-white to-lotus-50',
  lotus: 'bg-gradient-to-br from-lotus-50 via-white to-primary-50',
  none: 'bg-white'
}

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-[1536px]',
  full: 'max-w-full'
}

const paddingClasses = {
  none: '',
  sm: 'px-4 py-6',
  md: 'px-6 py-12',
  lg: 'px-8 py-16'
}

const containerClasses = computed(() => [
  'mx-auto',
  gradientClasses[props.gradient],
  maxWidthClasses[props.maxWidth],
  paddingClasses[props.padding],
  props.blur ? 'backdrop-blur-sm' : ''
])
</script>

<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>
