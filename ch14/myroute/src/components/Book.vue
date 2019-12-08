<template>
    <div>
        <p>图书ID：{{ book.id }}</p>
        <p>书名：{{ book.title }}</p>
        <p>说明：{{ book.desc }}</p>
    </div>
</template>

<script>
import Books from '@/assets/books'
export default {
    data(){
        return {
            book: {}
        }
    },
    methods: {
        setBook(book){
            this.book = book;
        }
    },
    /* created(){
        this.book = Books.find((item) => item.id == this.$route.params.id);
    }, */
    
    
   /*  watch: {
        '$route' (to) {
            this.book = Books.find((item) => item.id == to.params.id);
        }
    } */
    /* watch: {
        '$route': {
            handler: function(to) {
                this.book = Books.find((item) => item.id == to.params.id);
            },
            immediate: true
        } 
    } */
    beforeRouteEnter (to, from, next) {
        let book = Books.find((item) => item.id == to.params.id);
        next(vm => vm.setBook(book));
    },
    beforeRouteUpdate (to, from, next) {
        this.book = null;      
        this.book = Books.find((item) => item.id == to.params.id);
        next();
    }
}
</script>