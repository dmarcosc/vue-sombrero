<template>
  <nav class="home-nav">
    <img src="@/assets/images/sombrero.png" alt="sombrero">
  </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.home-nav{
  cursor: pointer !important;
  top:5px;
  left: 5px;
  position: absolute;
  height:57px;
  width: 60px;
  background-color: bisque;
  border-radius: 80px;
  img{
    height:50px;
    margin-left: 5px;
  }
}
</style>