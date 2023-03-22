<template>
  <pre>
    {{ user }}
  </pre>
  <button @click="emits('update')">Update</button>
</template>

<!--<script>-->
<!--  export default {-->
<!--    emits: ['update'],-->
<!--    props: {-->
<!--      user: Object-->
<!--    },-->
<!--    setup(props, { emit }) {-->
<!--      emit('update')-->
<!--    }-->
<!--  }-->
<!--</script>-->

<script setup>
  const emits = defineEmits(['update']);
  const props = defineProps({
    user: Object
  })

  emits('update')

  console.log(props.user)
</script>