<template>
  <div class="booksNew">
    <h3>新书上市</h3>
    <div class=book v-for="book in books" :key="book.id">
      <figure>
        <router-link :to="'/book/' + book.id">
        <img :src="book.imgUrl">
        <figcaption>
            {{ book.title }}
        </figcaption>
        </router-link>
      </figure>
      <p>
        {{ book.price | factPrice(book.discount) | currency}} 
        <span>{{ book.price | currency}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        books: [],
      };
    },
    created(){
      this.axios.get("/book/new")
      .then(response => {
        if(response.status == 200){
          this.loading = false;
          this.books = response.data;
        }
      })
      .catch(error => alert(error));
    }
  }
</script>

<style scoped>
.booksNew{
  float: left;
}
.booksNew .book{
  display: inline-block;
  width: 19%;
  border-right: solid 1px #ccc;
  margin-left: 10px;
}
.booksNew a:hover{
  color: red;
}
.booksNew img {
  width: 120px;
  height: 100px
}
.booksNew span{
  color: #cdcdcd;
  text-decoration: line-through;
}
</style>