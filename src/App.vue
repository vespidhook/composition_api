<template>
  <h1>Composition API</h1>
  <input
      type="text"
      v-model="name"
  />

  <br>

  <input
      type="text"
      v-model="address"
  />
</template>

<script>
import {ref, watch} from 'vue'
  export default {
    setup() {
      const name = ref('John')
      const address = ref('Rua A, quadra B 000000')

      watch([name, address], (newValue, oldValue) => {
        console.log(newValue, oldValue)
        action()
      })



      function action() {
        console.log('Action')
      }

      return {
        name,
        address
      }
    }
  }
</script>