
<template>
<main>
    <div class="wrapper">
      <div class="battleground">
        <div class="bullets">
          <div class="ammo">
            <img v-for="items in userBullets" src="@/assets/images/bullet.svg" alt="Bullet">
          </div>
          <div>
            <img v-for="items in enemyBullets" src="@/assets/images/bullet.svg" alt="Bullet">
          </div>
        </div>
        <div class="characters">
          <img src="@/assets/images/cowboy.png" alt="bandit" class="avatar">
          <img src="@/assets/images/bandit.png" alt="bandit" class="avatar enemy">
        </div>
      </div>
      <h2>Actions:</h2>
      <div class="buttons">
        <button @click="startRound('shoot')" :disabled="!!result">SHOOT</button>
        <button @click="startRound('reload')" :disabled="!!result">RELOAD</button>
        <button @click="startRound('dodge')" :disabled="!!result">DODGE</button>
        <button @click="startRound('lucky')" :disabled="!!result || userBullets < 5" >LUCKY SHOT</button>
        <button v-if="result !== ''" @click="$router.go(0)" >RESTART</button>
      </div>
      <hr>
      <div>
        result: {{ result }}
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { randomIntFromInterval } from '@/utils/utils';
import { computed, ref } from 'vue';

  const round = ref(0)

  const result = computed(() => {
    if (!isUserAlive.value && !isEnemyAlive.value ) return 'draw'
    else if (!isUserAlive.value && isEnemyAlive.value ) return 'lose'
    else if (isUserAlive.value && !isEnemyAlive.value ) return 'win'
    else return ''
  })

  
const startRound = async (userAction: string) => {
  round.value++
  const hasBullets = userBullets.value
  const enemyAction : string = performEnemyAction()
  performUserAction(userAction)
  if (userAction === 'lucky') {
    isEnemyAlive.value = false
  } else if ((userAction === 'reload' || (userAction === 'shoot' && !hasBullets)) && enemyAction === 'shoot') {
    isUserAlive.value = false
  } else if (userAction === 'shoot' && hasBullets) {
    if (enemyAction === 'shoot') {
      isEnemyAlive.value = false
      isUserAlive.value = false
    } else if ( enemyAction === 'reload') {
      isEnemyAlive.value = false
    }
  }

}
//// user stuff ////
  const userBullets = ref(0)
  const isUserAlive = ref(true)

  const addUserBullet = () => {
    userBullets.value < 5 && userBullets.value++
  }
  const removeUserBullet = () => {
    userBullets.value > 0 && userBullets.value --
  }

const performUserAction = async (action: string) => {
  switch(action) {
    case 'shoot':
      removeUserBullet()
      break
    case 'reload':
      addUserBullet()
      break
    case 'dodge':
      break
    case 'lucky':
      break
    default:
      break
  }
}

//// enemy stuff ////
  const enemyBullets = ref(0)
  const isEnemyAlive = ref(true)

  const addEnemyBullet = () => {
    enemyBullets.value < 5 && enemyBullets.value++
  }
  const removeEnemyBullet = () => {
    enemyBullets.value > 0 && enemyBullets.value --
  }

const performEnemyAction = () : string => {
  let action: number
  if (enemyBullets.value === 0) action = 0
  else {
    action = randomIntFromInterval(1,2)
  }
  switch(action) {
    case 0:
      addEnemyBullet()
      window.alert('Enemy reloads!')
      return 'reload'
      break
    case 1:
      removeEnemyBullet()
       window.alert('Enemy shoots!')
      return 'shoot'
      break
    case 2:
      window.alert('Enemy dodge!')
      return 'dodge'
      break
    default:
      return ''
      break
  }
}
</script>

<style lang="scss" scoped>
main{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.wrapper{
  border: 1px solid rgba(165, 42, 42, 0.548);
  padding:5px;
  max-width: 700px;
  width:100%;
}
.bullets {
  margin: 10px;
  display: flex;
  justify-content: space-between;
  img{
    height: 20px;
  }
}
.characters {
  display: flex;
  justify-content: space-between;
}
.avatar{
  height: 80px;
}
.enemy{
  align-self: flex-end;
}
.battleground{
  height:215px;
  background: url('../assets/images/graveyard.jpg');
  background-repeat: no-repeat;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 10px 15px 10px;
}
.buttons button {
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
}
</style>