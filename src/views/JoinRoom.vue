
<template>
  <main>
    <nav class="main-menu">
      <input type="text" v-model="room" style="height: 60px; font-size:22px;"/>
      <WButton :block="true" @onClick="$router.push({ name: 'vsMode', params: { id: room } })" :disabled="!room">VS MODE</WButton>
    </nav>

  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import WButton from '@/components/WButton.vue';

const room = ref('')


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
  padding: 0px 10px;
}
</style>