<template>
  <div class="bookRecommend">
    <h3>热门推荐</h3>
    <ul>
      <li v-for="book in books" :key="book.id">
        <router-link :to="'/book/'+ book.id">
          {{ book.title }} 
          <span>{{ book.price | factPrice(book.discount) | currency}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'HomeBooksHot',
    data () {
      return {
        books: []
      };
    },
    created(){
       this.axios.get("/book/hot")
        .then(response => {
          if(response.status == 200){
            this.books = response.data;
          }
        })
        .catch(error => alert(error));
    },
  }
</script>
<style scoped>
.bookRecommend {
    width: 18%;
    height: 220px;
    border: solid 1px #ccc;
    float: left;
    margin-top: 10px;
    /*right: 80px;
    position: absolute;*/
    /*margin-left: 950px;*/
    /*margin-right: 80px;
    margin-top: -80px;*/
}

.bookRecommend li{
  list-style: none;
  text-align: left;
  padding-left: 0;
  margin-left: -20px;
}
</style>