<script setup lang="ts">
import { computed, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue: boolean // used to tell dice to roll
    diceNumber: string
    id: string
    class: string
  }>(),
  { diceNumber: 'one' }
)
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): true
}>()

const diceSides = ['one', 'two', 'three', 'four', 'five', 'six'];

const rollDice = () => {
  const dice = document.getElementById(props.id)!;
  var sideToLandOn   = Math.floor((Math.random() * 6) + 1);
  for (var i = 1; i <= 6; i++) {
    dice.classList.remove('show-' + i);
    if (sideToLandOn === i) {
      dice.classList.add('show-' + i);
    }
  }
}

const modelValueRef = computed(()=> props.modelValue)
watch(modelValueRef, (value) => {
  if (value) {
    rollDice();
    emits('update:modelValue', false)
  }
})
</script>

<template>
  <div class="container">
    <div class="dice" :id="id" :class="class">
      <div
        v-for="(side, n) in diceSides"
        :id="`dice-${diceNumber}-side-${side}`"
        :class='`side ${side}`'>
        <div
          v-for="count in (n + 1)"
          :class="`dot ${side}-${count}`">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: inline-block;
}

.dice {
  position: relative;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 1s;
}

.dot {
  position: absolute;
  width: 20px;
  height: 20px;
  margin: -10px 5px 5px -10px;
  border-radius: 20px;
  background-color: #f25f5c;
  box-shadow: inset 2px 2px #d90429;
}

.side {
  position: absolute;
  background-color: #ffF;
  border-radius: 5px;
  width: 100px;
  height: 100px;
  border: 1px solid #e5e5e5;
  text-align: center;
  line-height: 2em;
}

.side:nth-child(1) {
  transform: translateZ(3.1em);
}

.side:nth-child(6) {
  transform: rotateY(90deg) translateZ(3.1em);
}

.side:nth-child(3) {
  transform: rotateY(-90deg) translateZ(3.1em);
}

.side:nth-child(4) {
  transform: rotateX(90deg) translateZ(3.1em);
}

.side:nth-child(5) {
  transform: rotateX(-90deg) translateZ(3.1em);
}

.side:nth-child(2) {
  transform: rotateY(-180deg) translateZ(3.1em);
}

.show-1 {
  transform: rotateX(720deg) rotateZ(-720deg);
}

.show-6 {
  transform: rotateX(-900deg) rotateZ(1080deg);
}

.show-3 {
  transform: rotateY(-450deg) rotateZ(-1440deg);
}

.show-4 {
  transform: rotateY(810deg) rotateZ(720deg);
}

.show-5 {
  transform: rotateX(-810deg) rotateZ(-1080deg);
}

.show-2 {
  transform: rotateX(450deg) rotateZ(-720deg);
}

.two-1,
.three-1,
.four-1,
.five-1,
.six-1 {
  top: 20%;
  left: 20%;
}

.four-3,
.five-3,
.six-4 {
  top: 20%;
  left: 80%;
}

.one-1,
.three-2,
.five-5 {
  top: 50%;
  left: 50%;
}

.four-2,
.five-2,
.six-3 {
  top: 80%;
  left: 20%;
}

.two-2,
.three-3,
.four-4,
.five-4,
.six-6 {
  top: 80%;
  left: 80%;
}

.six-2 {
  top: 50%;
  left: 20%;
}

.six-5 {
  top: 50%;
  left: 80%;
}</style>