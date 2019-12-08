<template>
  <div class="bookCommentListItem">
    <div>
      <span>{{ item.username }}</span>
      <span>{{ item.commentDate | formatTime }}</span>
    </div>
    <div>{{ item.content }}</div>
  </div>
</template>

<script>
  export default {
    name: 'BookCommentListItem',
    props: {
      item: {
        type: Object,
        default: () => {}
      }
    },
  }
</script>

<style scoped>
.bookCommentListItem{
  border-bottom: solid 1px #ccc;
  margin-bottom: 10px;
}
.bookCommentListItem span{
  margin-right: 20px;
}
</style>