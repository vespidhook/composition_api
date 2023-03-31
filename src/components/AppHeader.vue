<template>
  {{ counter }}
</template>

<script setup>
import { useCounter} from "../composebles/useCounter.js";
const {counter} = useCounter();

</script>