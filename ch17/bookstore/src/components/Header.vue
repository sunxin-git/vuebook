<template>
  <div class="header">
    <img src="@/assets/images/logo.png">
    <HeaderSearch />
    <HeaderCart/>
    <span v-if="!user">你好，请<router-link to="/login">登录</router-link>  免费<router-link to="/register">注册</router-link></span>
    <span v-else>欢迎您，{{ user.username }}，<a href="javascript:;" @click="logout">退出登录</a></span>
  </div>
</template>

<script>
import HeaderSearch from "./HeaderSearch";
import HeaderCart from "./HeaderCart";
import { mapState, mapMutations } from 'vuex'

export default {
  name: "Header",

  components: {
    HeaderSearch,
    HeaderCart
  },

  computed: {
    // user模块带有命名空间
    ...mapState('user', [
      // 将this.user 映射为 this.$store.state.user.user
      'user'
    ])
  },

  methods: {
    logout(){
      this.deleteUser();
    },
    // user模块带有命名空间
    ...mapMutations('user', [
      // 将this.deleteUser 映射为 this.$store.commit('user/deleteUser')
      'deleteUser'
    ])
  },
};
</script>
<style scoped>
.header {
    width: 100%;
    /*position: relative;*/
}
.header img{
    width: 200px;
    height: 60px;
    margin: auto;  
}
.header span{
  margin-left: 20px;
}
.header a{
  text-decoration: none;
  color: red;

}


</style>