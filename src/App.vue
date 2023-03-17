<template>
  <h1>Composition API</h1>
  <b>Name:</b> {{ user.first_name }} {{ user.last_name }} <br />
  <input
      type="text"
      v-model="user.first_name"
  />

  <button @click="changeName">Alterar nome</button>
</template>

<script>
import {ref, watch} from 'vue'
  export default {
    setup() {
      const user = ref({
        first_name: 'John',
        last_name: 'Doe'
      })

      watch(name, (value, oldValue) => {
        console.log('Name changed from', oldValue, 'to', value)
        alert()
      }, {
        imemediate: true,
        deep: true
      })

      function alert() {
        console.log('Alert')
      }

      function changeName() {
        user.value = {
          first_name: 'Sansa',
          last_name: 'Stark'
        }
      }

      return {
        user,
        changeName
      }
    }
  }
</script>