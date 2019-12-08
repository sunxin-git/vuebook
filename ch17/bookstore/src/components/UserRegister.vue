<template>
  <div class="register">
    <form>
      <div class="lable">
        <label class="error">{{ message }}</label>
        <input name="username" 
          type="text" 
          v-model.trim="username" 
          placeholder="请输入用户名" />
        <input 
          type="password" 
          v-model.trim="password" 
          placeholder="请输入密码" />
        <input 
          type="password" 
          v-model.trim="password2" 
          placeholder="请输入确认密码" />
        <input 
          type="tel" 
          v-model.trim="mobile" 
          placeholder="请输入手机号" />    
      </div>
      <div class="submit">
        <input type="submit" @click.prevent="register" value="注册" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "UserRegister",
  props: [""],
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      mobile: "",
      message: ''
    };
  },

  watch: {
    username(newVal) {
      // 取消上一次请求
      if (newVal) {
        this.cancelRequest();
        this.axios
          .get("/user/" + newVal, {
            cancelToken: new this.axios.CancelToken(
              cancel => this.cancel = cancel
            )
          })
          .then(response => {
            if (response.data.code == 200) {
              let isExist = response.data.data;
              if (isExist) {
                this.message = "该用户名已经存在";
              }else{
                this.message = "";
              }
            }
          })
          .catch(error => {
            if (this.axios.isCancel(error)) {
              //如果是请求被取消产生的错误，输出取消请求的原因
              console.log("请求取消：", error.message);
              //alert(error.message);
             //throw new Error("请求取消：" + error.message)
            } else {
              //处理错误
              console.log(error);
               //throw new Error(error.message)
            }
          });
      }
    }
  },
  methods: {
    register() {
      this.message = '';
      if(!this.checkForm())
        return;
      this.axios.post("/user/register", 
        {username: this.username, password: this.password, mobile: this.mobile})
        .then(response => {
          if(response.data.code === 200){
            this.saveUser(response.data.data);
            this.username = '';
            this.password = '';
            this.password2 = '';
            this.mobile = '';
            this.$router.push("/");
          }else if(response.data.code === 500){
            this.message = "用户注册失败";
          }
        })
        .catch(error => {
          alert(error.message)
        })
    },
    cancelRequest() {
      if (typeof this.cancel === "function") {
        this.cancel("终止请求");
      }
    },
    checkForm(){
      if(!this.username || !this.password || !this.password2 || !this.mobile){
        this.$msgBox.show({title: "所有字段不能为空"});
        return false;
      }  
      if(this.password !== this.password2){
        this.$msgBox.show({title: "密码和确认密码必须相同"});
        return false;
      }
      return true;
    },
    ...mapMutations('user', [
      'saveUser'
    ])
  },
};
</script>
<style scoped>
.register {
  margin: 5em auto 0;
  width: 44%;
}

.register input {
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

.register input:hover {
  color: rgb(180, 86, 9);
  border-left: solid 6px #40A46F;
}

.register .submit {
  padding: 5px 4px;
  text-align: center;
}
.register input[type="submit"] {
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

.register .submit input[type="submit"]:hover {
  background: #07793d;
  border: solid 1px #07793d;
}
.register .error{
  color: red;
  font-weight: bold;
  font-size: 1.1em;
}
</style>