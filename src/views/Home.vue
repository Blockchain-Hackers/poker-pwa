<script setup lang="ts">
import { ref } from 'vue';
import Dice from '@/components/Dice.vue';

const diceList = ['one', 'two', 'three', 'four', 'five'];
const rollDice = ref(false);
</script>

<template>
  <main>
    <div class="flex gap-4 px-10">
      <div class="tw-flex tw-gap-3">
        <Dice
          v-for="(item,i) in diceList" :key="i"
          v-model="rollDice"
          :id="`dice${i+1}`"
          :class="`dice-${item}`"
          :diceNumber="item"
        />
      </div>

      <div>
        <button class="bg-red-600" @click="rollDice=true">Roll dice!</button>
      </div>
    </div> 
  </main>
</template>