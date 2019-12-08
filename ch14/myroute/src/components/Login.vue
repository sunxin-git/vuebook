<template>
    <div>
        <h3>{{ info }}</h3>
        <table>
            <caption>用户登录</caption>
            <tbody>
                <tr>
                    <td><label for="username">用户名：</label></td>
                    <td><input id="username" v-model.trim="username" placeholder="请输入用户名"/></td>
                </tr>
                <tr>
                    <td><label for="password">密码：</label></td>
                    <td><input id="password" v-model.trim="password" type="password" placeholder="请输入密码"/></td>
                </tr>
                <tr>
                    <td cols="2">
                        <input type="submit" value="登录" @click.prevent="login"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username: "",
            password: "",
            info: ""   // 用于保存登录失败后的提示信息
        }
    },
    methods: {
        login() {
            // 实际场景中，这里应该通过Ajax请求上服务端去验证
            if("lisi" == this.username && "1234" == this.password){
                // sessionStorage中存储的都是字符串值，
                // 因此这里实际存储的将是字符串"true"
                sessionStorage.setItem("isAuth", true);
                this.info = "";
                //如果存在查询参数
                if(this.$route.query.redirect){   
                    let redirect = this.$route.query.redirect;
                    //跳转至进入登录页前的路由
                    this.$router.replace(redirect); 
                }else{
                    // s否则跳转至首页
                    this.$router.replace('/');    
                }
            }
            else{
                sessionStorage.setItem("isAuth", false);
                this.username = "";
                this.password = "";
                this.info = "用户名或密码错误";
            }
                
        }
    }
}
</script>
