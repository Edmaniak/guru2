<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <div class="p-4 bg-slate-100 rounded-lg">
    <p>{{ message }}</p>
  </div>
</template>

