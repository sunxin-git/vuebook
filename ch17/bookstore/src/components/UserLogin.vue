<template>
  <div class="login">
    <div class="error">{{ message }}</div>
    <form>
      <div class="lable">
        <input
          name="username"
          type="text"
          v-model.trim="username"
          placeholder="请输入用户名"
        />
        <input
          type="password"
          v-model.trim="password"
          placeholder="请输入密码"
        />
      </div>
      <div class="submit">
        <input type="submit" @click.prevent="login" value="登录" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "UserLogin",
  data() {
    return {
      username: '',
      password: '',
      message: ''
    };
  },
  methods: {
    login(){
      this.message = '';
      if(!this.checkForm())
        return;
      this.axios.post("/user/login", 
        {username: this.username, password: this.password})
        .then(response => {
          if(response.data.code === 200){
            this.saveUser(response.data.data);
            this.username = '';
            this.password = '';
            this.$msgBox.show({
              title: "登录成功",
              handleOk: ()=>{
                //如果存在查询参数
                if(this.$route.query.redirect){   
                    let redirect = this.$route.query.redirect;
                    //跳转至进入登录页前的路由
                    this.$router.replace(redirect); 
                }else{
                    // 否则跳转至首页
                    this.$router.replace('/');    
                }
              }
            });
            
          }else if(response.data.code === 500){
            this.message = "用户登录失败";
          }else if(response.data.code === 400){
            this.message = "用户名或密码错误";
          }
        })
        .catch(error => {
          alert(error.message)
        })
    },
    ...mapMutations('user', [
      'saveUser'
    ]),
    checkForm(){
      if(!this.username || !this.password){
        this.$msgBox.show({title: "用户名和密码不能为空"});
        return false;
      }
      return true;
    }
  }
};
</script>
<style scoped>
.login {
  margin: 5em auto 0;
  width: 44%;
}

.login input{
  padding: 15px;
  width: 94%;
  font-size: 1.1em;
  margin: 18px 0px;
  color: gray;
  float: left;
  cursor: pointer;
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: none;
  font-weight: 600;
  margin-left: 3px;
  background: #eee;
  transition: all 0.3s ease-out;
  border: solid 1px #ccc;
}

.login input:hover{
  color: rgb(180, 86, 9);
  border-left: solid 6px #40A46F;
}

.login {
  padding: 5px 4px;
  text-align: center;
}
input[type="submit"] {
  padding: 17px 17px;
  color: #fff;
  float: right;
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: #40a46f;
  border: solid 1px #40a46f;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.5s ease-out;
  outline: none;
  width: 100%;
}

.submit input[type="submit"]:hover {
  background: #07793d;
  border: solid 1px #07793d;
}

.login .error{
  color: red;
  font-weight: bold;
  font-size: 1.1em;
}
</style>