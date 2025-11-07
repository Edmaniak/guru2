<script setup lang="ts">
const title = 'Welcome to Guru2'
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>This is a Nuxt 4.2 + TypeScript project</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #00DC82;
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  color: #475569;
}
</style>
