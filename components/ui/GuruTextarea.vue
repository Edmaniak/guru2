<script setup lang="ts">
interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  error?: string
  disabled?: boolean
  required?: boolean
  rows?: number
  helperText?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  required: false,
  rows: 4
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

const textareaId = computed(() => `textarea-${Math.random().toString(36).substring(7)}`)

const textareaClasses = computed(() => [
  'w-full px-4 py-2.5 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 resize-y',
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
      :for="textareaId"
      class="block text-sm font-medium text-gray-700 mb-1.5"
    >
      {{ label }}
      <span v-if="required" class="text-accent-500">*</span>
    </label>
    <textarea
      :id="textareaId"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :rows="rows"
      :class="textareaClasses"
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
