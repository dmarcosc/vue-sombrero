
<template>
<main>
    <div class="wrapper">
      <div class="battleground">
        <span class="result">{{ textResult }}</span>
        <div class="bullets">
          <div class="ammo">
            <img v-for="items in userBullets" :key="items" src="@/assets/images/bullet.png" alt="Bullet">
          </div>
          <div>
            <img v-for="items in enemyBullets" :key="items" src="@/assets/images/bullet.png" alt="Bullet">
          </div>
        </div>
        <div class="characters">
          <img src="@/assets/images/cowboy.png" alt="hero" class="avatar">
          <img src="@/assets/images/bandit.png" alt="bandit" class="avatar enemy">
        </div>
      </div>
      <div class="panel">
        <div class="text-wrapper"><span class="text">{{ dialog }}</span></div>
      </div>
      <div class="buttons">
        <div class="pair">
          <WButton :block="true" @onClick="startRound('shoot')" :disabled="!!result" style=" cursor: url('/vue-sombrero/src/assets/images/revolver.png'), auto !important;">SHOOT</WButton>
          <WButton :block="true" @onClick="startRound('reload')" :disabled="!!result" style=" cursor: url('/vue-sombrero/src/assets/images/bullet.png'), auto !important;">RELOAD</WButton>
        </div>
        <div class="pair">
          <WButton :block="true" @onClick="startRound('dodge')" :disabled="!!result" style=" cursor: url('/vue-sombrero/src/assets/images/shield.png'), auto !important;" >DODGE</WButton>
          <WButton :block="true" @onClick="startRound('lucky')" :disabled="!!result || userBullets < 5"  style="cursor: url('/vue-sombrero/src/assets/images/trebol.png'), auto !important;" >LUCKY SHOT</WButton>
        </div>
        <WButton :block="true" v-if="result === 'L' || result === 'D'" @click="$router.go(0)" >RESTART</WButton>
        <WButton :block="true" v-if="result === 'W'" @click="$router.push('/spacetrip')" >NEXT</WButton>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { randomIntFromInterval } from '../utils/utils';
import WButton from '@/components/WButton.vue';

  const router = useRouter()
  const round = ref(0)
  const dialog = ref('Hello homiefella')
  const textResult = ref('')

  const result = computed(() => {
    if (!isUserAlive.value && !isEnemyAlive.value ) {
      dialog.value = "HA! took you with me"
      textResult.value = "DRAW"
      return 'D'
    } else if (!isUserAlive.value && isEnemyAlive.value ) {
      dialog.value = "Not even close"
      textResult.value = "YOU LOSE"
      return 'L'
    } else if (isUserAlive.value && !isEnemyAlive.value ){
      dialog.value = "Impossible..."
      textResult.value = "YOU WON"
      return 'W'
    }
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
      if(!userBullets.value) dialog.value = "No bullets you fool"
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
  padding:15px 5px;
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
  background: url('../assets/images/wildwest.jpg');
  background-repeat: no-repeat;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 10px 15px 10px;
}
.result{
  display: flex;
  top: 15px;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 40px;
  font-weight: 500;
  color: darkred;
}
.panel{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 5px 0px;
  border-radius: 5px;
  border: 1px solid black;
  background-color:bisque;
}
.text-wrapper{
  display: flex;
}
.text {

  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  font-family:monospace;
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
.buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:15px;
    .pair {
      display: flex;
      gap: 5px;
      width: 100%;
    }
}

</style>