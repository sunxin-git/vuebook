<template>
  <div class="book">
    <img :src="book.bigImgUrl" />
    <div>
      <div class="bookInfo">
        <h3>{{ book.title }}</h3>
        <p>{{ book.slogan }}</p>
        <p>
          <span>作者：{{ book.author }}</span>
          <span>出版社：{{ book.bookConcern }}</span>
          <span>出版日期：{{ book.publishDate }}</span>
        </p>
        <p>
          <span class="factPrice">
            {{ book.price | factPrice(book.discount) | currency }}
          </span>
          <span class="discount">
            [{{book.discount  | formatDiscount}}]
          </span>
          <span>[定价 <i class="price">{{book.price | currency}}</i>]</span>
        </p>
      </div>
      <div class="addCart">
        <AddSubtractButton :quantity="quantity" @updateQuantity="handleUpdate"/> 
        <button class="addCartButton" @click="addCart(book)">加入购物车</button>
      </div>
    </div>
    <BookTabComponent :content="book.detail"/>
  </div>
</template>

<script>
  import AddSubtractButton from '@/components/AddSubtractButton'
  import BookTabComponent from '@/components/BookTabComponent'
  import { mapActions } from 'vuex'
  export default {
    name: 'Book',
    data () {
      return {
        book: {},
        quantity: 0
      }
    },
    components: {
      AddSubtractButton,
      BookTabComponent
    },
  
    created(){
      this.axios.get(this.$route.fullPath)
        .then(response => {
          if(response.status == 200){
            this.book = response.data;
          }
        }).catch(error => alert(error));
    },
    methods: {
      // 子组件AddSubtractButton的自定义事件updateQuantity的处理函数
      handleUpdate(value){
        this.quantity = value;
      },
      factPrice(price, discount){
        return price * discount;
      },
      addCart(book){
        let quantity = this.quantity;
        
        if(quantity === 0){
          quantity = 1;
        }
        let newItem = {...book, price: this.factPrice(book.price, book.discount)}; 
        this.addProductToCart({...newItem, quantity});
        this.$router.push('/cart');
      },
      ...mapActions('cart', [
        'addProductToCart'
      ])
    },
 
    filters: {
      // 格式化折扣数据
      formatDiscount(value){
        if(value)
        {
          let strDigits = value.toString().substring(2);
          strDigits += "折";
          return strDigits;
        }
        else
          return value;
      }
    }
  }
</script>
<style scoped>
.book {
  width: 1100px;
  margin-top: 60px;
  text-align: left;
}
.book img {
  margin-left: 50px;
  float: left;
  width: 200px;
  height: 200px;
}
.book .bookInfo {
  margin-left: 20px;
  float: left;
  width: 800px;
  background-color: #eee;
  padding-left: 20px;
  padding-top: 5px;
}

.book .addCart {
  margin-left: 300px;
  float: left;
  margin-top: 10px;
}
.book .addCartButton{
	padding: 5px 10px 6px;
	color: #fff;
	border: none;
	border-bottom: solid 1px #222;
	border-radius: 5px;
	box-shadow: 0 1px 3px #999;
	text-shadow: 0 -1px 3px #444;
	cursor: pointer;
  background-color: #e33100;
  display: block;
  margin-left: 80px;
}
.addCartButton:hover {
  text-shadow: 0 1px 1px #444;
}

.book span{
  padding-right: 15px;
}

.book .price {
  color: gray;
  text-decoration: line-through;
}
.book .discount{
  color: red;
}
.book .factPrice{
  color: red;
  font-weight: bold;
}
</style>