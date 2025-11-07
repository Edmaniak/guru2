<script setup lang="ts">
interface Props {
  modelValue?: string | number
  value: string | number
  name: string
  label?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const handleChange = () => {
  emit('update:modelValue', props.value)
}

const radioId = computed(() => `radio-${props.name}-${props.value}`)
const isChecked = computed(() => props.modelValue === props.value)
</script>

<template>
  <div class="flex items-center">
    <input
      :id="radioId"
      type="radio"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      class="w-5 h-5 border-primary-300 text-primary-600 focus:ring-2 focus:ring-primary-400 focus:ring-offset-1 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      @change="handleChange"
    />
    <label
      v-if="label"
      :for="radioId"
      class="ml-2.5 text-sm text-gray-700 cursor-pointer select-none"
      :class="{ 'opacity-50 cursor-not-allowed': disabled }"
    >
      {{ label }}
    </label>
  </div>
</template>
