<template>
  <div>
    <div v-for="book in list" :key="book.id">
      <BookListItem :item="book" />
    </div>
  </div>
</template>

<script>
  import BookListItem from "./BookListItem"
  export default {
    name: 'BookList',
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    components: {
      BookListItem
    },
  }
</script>
<style scoped>

</style>