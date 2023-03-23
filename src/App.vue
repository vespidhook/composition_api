<template>
  <h1>Composition API</h1>
  <button @click="show = !show">Mostrar componente</button>
  <User
      v-if="show"
      :user="user"
  />
</template>

<script setup>
  import User from "./components/User.vue";
  import {ref} from "vue";

  const show = ref(true)

  const user = ref({
    first_name: 'John',
  })
</script>