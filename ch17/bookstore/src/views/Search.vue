<template>
  <div>
    <h3>{{ title }}</h3>
    <BookList :list = "books"/><!--  v-if="books.length"/> -->
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
  import BookList from "@/components/BookList"
  export default {
    name:'',
    props:[''],
    data () {
      return {
        title: '',
        books: [],
        message: ''
      };
    },
    beforeRouteEnter(to, from, next){
      next(vm => {
        vm.title = to.meta.title;
        let url = to.fullPath;
        vm.getBooks(url);
      });
    },
    beforeRouteUpdate(to, from, next){
      this.getBooks(to.fullPath);
      next();
    },
    components: {
      BookList
    },

    computed: {},

    methods: {
      getBooks(url){
        this.message = '';
        this.axios.get(url)
          .then(response => {
            if(response.status == 200){
              this.books = response.data;
              if(this.books.length === 0){
                this.message = "没有搜索到匹配的图书！"
                //alert(this.message);
              }
            }
          })
          .catch(error => alert(error));
      }
    },
    watch: {}

  }

</script>
<style scoped>

</style>