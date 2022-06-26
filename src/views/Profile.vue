<template>
  <main>
    <div class="main-menu">
        <span><img src="@/assets/images/sheriff.png" alt="skull"> Wins: {{ wins }}.</span>
        <span><img src="@/assets/images/skull.png" alt="skull"> Deaths: {{ deaths }}.</span>
        <WButton class="main-button" :block="true" @onClick="$router.push('/')">MAIN MENU</WButton>
    </div>

  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import WButton from '@/components/WButton.vue';

  const wins = ref(0)
  const deaths = ref(0)

    onMounted(() => {
     wins.value =  +localStorage.getItem('wins')! || 0
     deaths.value =  +localStorage.getItem('deaths')! || 0
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
  width:450px;
  display: flex;
  flex-direction: column;
  gap:15px;
  background-color: bisque;
  padding: 25px;
  margin: 0px 10px;
  border-radius: 10px;
  
  span {
    font-size: 18px;
    font-weight: 500;
  }
  .main-button{
    margin-top:40px;
  }
}
</style>