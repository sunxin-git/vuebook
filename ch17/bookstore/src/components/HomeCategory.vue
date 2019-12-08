<template>
  <div class="category">
      <h3>图书分类</h3>
      <div v-for="category in categories" :key="category.id">
          <h5>{{ category.name }}</h5>
          <router-link v-for="child in category.children" :key="child.id"
            :to="'/category/' + child.id">{{ child.name }}</router-link>
      </div>
      
  </div>
</template>
<script>
  export default {
    name:'HomeCategory',
    data () {
      return {
        categories: []
      };
    },

    created(){
      this.axios.get("/category")
        .then(response => {
          if(response.status == 200){
            this.categories = response.data;
          }
        })
        .catch(error => alert(error));
    },
  }
</script>

<style scoped>
.category {
    /*margin-top: 10px;
    */
    /*position: fixed;*/
    margin-left: 60px;
    margin-top: 10px;
    float: left;
  
    border: solid 1px #ccc;
    width: 15%
}
.category div{
  margin-bottom: 10px;
}
.category a{
    padding: 0 5px 0 5px;
}
</style>