<template>
  <h1>Composition API</h1>
  <b>Name:</b> {{ user.name }} <br />
  <b>Age:</b> {{ user.age }} <br />
  <br><br>

  <input
    v-model="user.name"
    type="text"
  />
  <button @click="changeName">Alterar nome</button>

  <br><br>
  <b>Product:</b> {{ product }} <br>
  <input
      v-model="product"
      type="text"
  />
  <button @click="changeProduct">Alterar nome do produto</button>

</template>

<script>
import {ref} from 'vue'
  export default {
    setup() {
      const product = ref('Iphone')
      const user = ref({
        name: 'John',
        age: 30
      })

      function changeName() {
        user.value.name = 'Bruno Alves'
      }

      function changeProduct() {
        product.value = 'Samsung'
      }

      return {
        user,
        changeName,
        product,
        changeProduct
      }
    }
  }
</script>