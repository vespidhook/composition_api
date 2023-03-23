<template>
  <pre>
    {{ user }}
  </pre>
</template>

<!--<script>-->
<!--import {onBeforeMount, onBeforeUnmount, onMounted, onUnmounted} from "vue";-->

<!--  export default {-->
<!--    emits: ['update'],-->
<!--    props: {-->
<!--      user: Object-->
<!--    },-->
<!--    beforeCreate() {},-->
<!--    created() {},-->

<!--    beforeMount() {-->
<!--      console.log('onBeforeMount')-->
<!--    },-->
<!--    mounted() {-->
<!--      console.log('onMounted')-->
<!--    },-->

<!--    beforeUnmount() {-->
<!--      console.log('onBeforeUnmount')-->
<!--    },-->
<!--    unmounted() {-->
<!--      console.log('onUnmounted')-->
<!--    },-->
<!--    setup(props, { emit }) {-->
<!--      onBeforeMount(() => {-->
<!--        console.log('onBeforeMount')-->
<!--      })-->
<!--      onMounted(() => {-->
<!--        console.log('onMounted')-->
<!--      })-->
<!--      onBeforeUnmount(() => {-->
<!--        console.log('onBeforeUnmount')-->
<!--      })-->
<!--      onUnmounted(() => {-->
<!--        console.log('onUnmounted')-->
<!--      })-->
<!--    }-->
<!--  }-->
<!--</script>-->

  <script setup>
  import {onBeforeMount, onMounted, onUnmounted} from "vue";

  const emits = defineEmits(['update']);

  onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeMount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })

  </script>