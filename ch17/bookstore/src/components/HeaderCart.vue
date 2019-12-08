<template>
  <div class="headerCart">
      <a href="javascript:;" @click.prevent="handleCart">
          <span>购物车{{ cartItemsCount }}</span>
      </a>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name:'HeaderCart',
    components: {},
    computed: {
      //cart模块带有命名空间
      ...mapGetters('cart', {
        //Vuex的store中定义的一个getter，得到购物车中商品的数量
        // 将this.cartItemsCount 映射为 this.$store.getters['cart/itemsCount']
        cartItemsCount: 'itemsCount'
      })
    },

    methods: {
      handleCart(){
        this.$router.push("/cart");
      }
    },
  }
</script>
<style scoped>
.headerCart {
    display: inline-block; 
    position: relative;
    text-align: center;
    width: 100px;
    height: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    margin-left: 20px;
    background-color:red;
    vertical-align: middle;
}

.headerCart a {
    text-decoration: none;
    color: white;
    
}
.headerCart a > span{
  position: absolute;
  left: 2px;
  right: 2px;
  bottom: 5px;
}
</style>