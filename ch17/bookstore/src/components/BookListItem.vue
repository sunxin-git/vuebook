<template>
  <div class="bookListItem">
    <div>
      <img :src="item.bigImgUrl">
    </div>
    <p class="title">
      <router-link 
        :to="{name: 'book', params: {id: item.id}}" 
        target="_blank">
        {{ item.title }}
      </router-link>
    </p>
    <p>
      <span class="factPrice">
        {{ item.price | factPrice(item.discount) | currency }} 
      </span>
      <span>
        定价：<i class="price">{{ item.price | currency }}</i>
      </span>
    </p>
    <p>
      <span>{{ item.author }}</span> /
      <span>{{ item.publishDate }}</span> /
      <span>{{ item.bookConcern }}</span>
    </p>
    <p>
      {{ item.brief }}
    </p>
    <p>
      <button 
        class="addCartButton" 
        @click=addCartItem(item)>
        加入购物车
      </button>
    </p>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  //import {factPrice} from '@/utils/filters'
  export default {
    name: 'BookListItem',
    props: {
      item: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      ...mapActions('cart', {
        // 将this.addCart映射为 this.$store.dispatch('cart/addProductToCart')
        addCart: 'addProductToCart'
      }),
      factPrice(price, discount){
        return price * discount;
      },
      addCartItem(item){
        let quantity = 1;
        let newItem = {
          ...item, 
          price: this.factPrice(item.price, item.discount), 
          quantity
        };
        this.addCart(newItem);
        console.log(newItem);
        this.$router.push("/cart");
      }
    },
  }
</script>
<style scoped>
.bookListItem {
  border-bottom: solid 1px #ccc;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
}
.bookListItem p{
  text-align: left;
}
.bookListItem p span{
  padding-left: 10px;
}
.bookListItem img{
  width: 180px;
  height: 180px;
  float: left;
}
.addCartButton{
	padding: 5px 10px 6px;
	color: #fff;
	border: none;
	border-bottom: solid 1px #222;
	border-radius: 5px;
	box-shadow: 0 1px 3px #999;
	text-shadow: 0 -1px 3px #444;
	cursor: pointer;
  background-color: #e33100;
}
.addCartButton:hover {
  text-shadow: 0 1px 1px #444;
}
.bookListItem .price {
  color: #cdcdcd;
  text-decoration: line-through;
}
.bookListItem .factPrice{
  color: red;
  font-weight: bold;
}

.bookListItem .title{
  color: #e00;
}
</style>