<template>
  <div class="home" v-cloak>
    <HomeCategory/>
    <HomeScrollPic/>
    <HomeBooksHot/>
    <BooksNew/>
  </div>
</template>

<script>
import HomeCategory from '@/components/HomeCategory.vue'
import HomeScrollPic from '@/components/HomeScrollPic.vue'
import HomeBooksHot from '@/components/HomeBooksHot.vue'
import BooksNew from '@/components/BooksNew.vue'
export default {
  name: 'home',
  components: {
    HomeCategory,
    HomeScrollPic,
    HomeBooksHot,
    BooksNew
  }
}
</script>
<style scoped>
.home {
  float: left;
  text-align: center;
  width: 100%;
}
[v-cloak]{
  display: none;
}
</style>
