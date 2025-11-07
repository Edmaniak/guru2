<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <div class="greeting">
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.greeting {
  padding: 1rem;
  background-color: #f1f5f9;
  border-radius: 0.5rem;
}
</style>
