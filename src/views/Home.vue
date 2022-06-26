
<template>
  <main>
    <nav class="main-menu">
      <!-- <img src="@/assets/images/rodeo.webp" alt="wanted"> -->
      <WButton :block="true" @onClick="$router.push('/wildwest')">SINGLE PLAYER</WButton>
      <WButton :block="true" :disabled="true">VS MODE</WButton>
      <WButton :block="true" @onClick="$router.push('/profile')">PROFILE</WButton>
    </nav>

  </main>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

import WButton from '@/components/WButton.vue';

    onMounted(() => {
      localStorage.getItem('wins') ? null : localStorage.setItem('wins', '0');
      localStorage.getItem('deaths') ? null : localStorage.setItem('deaths', '0');
    })


</script>

<style lang="scss" scoped>
main{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.main-menu{
  width:400px;
  display: flex;
  flex-direction: column;
  gap:15px;
}
</style>