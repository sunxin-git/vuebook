<template>
  <div>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  export default {
    name: 'BookIntroduction',
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    
  }
</script>
<style scoped>

</style>