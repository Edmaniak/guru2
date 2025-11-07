<script setup lang="ts">
interface Props {
  modelValue?: boolean
  label?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}

const checkboxId = computed(() => `checkbox-${Math.random().toString(36).substring(7)}`)
</script>

<template>
  <div class="flex items-center">
    <input
      :id="checkboxId"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="w-5 h-5 rounded border-primary-300 text-primary-600 focus:ring-2 focus:ring-primary-400 focus:ring-offset-1 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      @change="handleChange"
    />
    <label
      v-if="label"
      :for="checkboxId"
      class="ml-2.5 text-sm text-gray-700 cursor-pointer select-none"
      :class="{ 'opacity-50 cursor-not-allowed': disabled }"
    >
      {{ label }}
    </label>
  </div>
</template>
