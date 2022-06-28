
<template>
  <main>
    <nav class="main-menu">
      <div class="label">Create a room and share</div>
      <input type="text" v-model="room" style="height: 60px; font-size:22px;"/>
      <WButton :block="true" @onClick="$router.push({ name: 'vsMode', params: { id: room } })" :disabled="!room">START</WButton>
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
  background-color: bisque;
  padding: 25px;
  margin: 0px 10px;
  border-radius: 10px;
  input {
    margin-bottom:40px;
  }
}
.label{
  font-size:22px;
  color: orange;
  font-weight: 500;
  // background-color: bisque;
}
</style>