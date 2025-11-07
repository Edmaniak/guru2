<script setup lang="ts">
interface Props {
  modelValue?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  label?: string
  placeholder?: string
  error?: string
  disabled?: boolean
  required?: boolean
  helperText?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const inputId = useId()

const inputClasses = computed(() => [
  'w-full px-4 py-2.5 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1',
  props.error
    ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
    : 'border-primary-200 focus:border-primary-400 focus:ring-primary-100',
  'bg-white/80 backdrop-blur-sm',
  'placeholder:text-gray-400',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50'
])
</script>

<template>
  <div class="w-full">
    <label
      v-if="label"
      :for="inputId"
      class="block text-sm font-medium text-gray-700 mb-1.5"
    >
      {{ label }}
      <span v-if="required" class="text-accent-500">*</span>
    </label>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="inputClasses"
      @input="handleInput"
    />
    <p v-if="error" class="mt-1.5 text-sm text-red-600 animate-slide-down">
      {{ error }}
    </p>
    <p v-else-if="helperText" class="mt-1.5 text-sm text-gray-500">
      {{ helperText }}
    </p>
  </div>
</template>
