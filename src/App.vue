<template>
  <div class="app">
    <HomeButton @click="$router.push('/')"/>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import HomeButton from '@/components/HomeButton.vue'
</script>

