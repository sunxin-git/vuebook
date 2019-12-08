<template>
    <div>
        <h3>图书列表</h3>
        <ul>
            <li v-for="book in books" :key="book.id">
                <!--
                <router-link :to="'/book/' + book.id">{{book.title}}</router-link>
                -->
                <!--
                <router-link :to="{name: 'book', params: { id: book.id }}">{{book.title}}</router-link>
                -->
                
                <a href="#" @click.prevent="goRoute({name: 'book', params: { id: book.id }})">{{book.title}}</a>
                
            </li>
        </ul>
        <!--Book组件在这里渲染-->
        
        <!-- <router-view></router-view> -->
        
    </div>
</template>

<script>
// 导入Books数组
import Books from '@/assets/books'
export default {
    data(){
        return {
            books: Books
        }
    },
    methods: {
        goRoute(location){
            // 当点击的URL中的参数id与当前路由对象参数id值不同时，才调用$router.push方法
            if(location.params.id != this.$route.params.id)
                this.$router.push(location)
        }

    }
}
</script>