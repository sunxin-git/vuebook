<template>
  <div>
    <h3>{{ message }}</h3>
    <BookCommentListItem 
      v-for="comment in comments" 
      :item="comment" 
      :key="comment.id"/>
  </div>
</template>

<script>
  import BookCommentListItem from './BookCommentListItem'
  
  export default {
    name: 'BookCommentList',
    data () {
      return {
        comments: [],
        message: '',
      };
    },

    components: {
      BookCommentListItem,
     
    },

    created(){
      this.message = '';
      let url = this.$route.path + "/comment";
      this.axios.get(url)
          .then(response => {
            if(response.status == 200){
              
              this.comments = response.data;
              if(this.comments.length === 0){
                this.message = "当前没有任何评论！"
              }
            }
          })
          .catch(error => alert(error));
    }
  }

</script>
<style scoped>

</style>