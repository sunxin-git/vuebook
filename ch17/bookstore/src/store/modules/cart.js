const state = {
  items: [],
  //quantity: 0
}
// mutations
const mutations = {
  // 添加商品到购物车中
  pushProductToCart(state, { id, imgUrl, title, price, quantity}) {
    if(! quantity)
      quantity = 1;
    state.items.push({ id, imgUrl, title, price, quantity });
  },

  // 增加商品数量
  incrementItemQuantity(state, { id, quantity }) {
    let cartItem = state.items.find(item => item.id == id);
    cartItem.quantity += quantity;
  },
  // 用于清空购物车
  setCartItems(state, { items }) {
    state.items = items
  },

  // 删除购物车中的产品
  deleteCartItem(state, id){
    let index = state.items.findIndex(item => item.id === id);
    if(index > -1)
      state.items.splice(index, 1);
  }
}


const getters = {
  // 计算购物车中所有商品的总价
  cartTotalPrice: (state) => {
    return state.items.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },
  // 计算购物车中单项商品的价格
  cartItemPrice: (state) => (id) => {
    if (state.items.length > 0) {
      const cartItem = state.items.find(item => item.id === id);
      if (cartItem) {
        return cartItem.price * cartItem.quantity;
      }
    }
  },
  // 获取购物车中商品的数量
  itemsCount: (state) => {
    return state.items.length;
  }
}
const actions = {
  // 增加任意数量的商品到购物车
  addProductToCart({ state, commit }, 
    { id, imgUrl, title, price, inventory, quantity }) {
    if (inventory > 0) {
      const cartItem = state.items.find(item => item.id == id);
      if (!cartItem) {
        commit('pushProductToCart', { id, imgUrl, title, price, quantity })
      } else {
        commit('incrementItemQuantity', { id, quantity })
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}