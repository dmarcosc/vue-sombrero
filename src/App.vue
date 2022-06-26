<template>
  <div class="app">
    <HomeButton @click="$router.push('/')" v-if="$route.name!=='home' && $route.name !== 'profile'"/>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import HomeButton from '@/components/HomeButton.vue'
</script>

