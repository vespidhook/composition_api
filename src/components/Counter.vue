<template>
  <div>
    <button @click="decrement()">-</button>
    {{ counter }}
    <button @click="increment()">+</button>
  </div>
</template>

<script setup>
import { useCounter } from "../composebles/useCounter.js";

const { counter, increment, decrement } = useCounter();
</script>