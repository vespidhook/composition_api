<template>
  <h1>Composition API</h1>
  <User
      :user="user"
      @update="updateUser"
  />
</template>

<script setup>
  import User from "./components/User.vue";
  import {ref} from "vue";

  const user = ref({
    first_name: 'John',
  })

  function updateUser() {
    console.log('updateUser')
  }
</script>