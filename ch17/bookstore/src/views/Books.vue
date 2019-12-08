<template>
  <div>
    <Loading v-if="loading" />
    <h3 v-else>{{ title }}</h3>
    <BookList :list = "books"/>
    <h1>{{ message }}</h1>
    <el-pagination 
      :hide-on-single-page="true"
      @size-change="handleSizeChange" 
      :page-sizes="[2, 10, 20, 40]" 
      @current-change="handleCurrentChange" 
      :current-page="pageNum" 
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper" 
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import BookList from "@/components/BookList"
  import Loading from '@/components/Loading.vue'
  export default {
    name:'Books',
    props:[''],
    data () {
      return {
        title: '',
        books: [],
        message: '',
        loading: true,
        total: 5,
        pageNum: 1,
        pageSize: 2
      };
    },

    beforeRouteEnter(to, from, next){
      next(vm => {
        vm.title = to.meta.title;
        let url = vm.setRequestUrl(to.fullPath);
        vm.getBooks(url, vm.pageNum, vm.pageSize);
      });
    },
    beforeRouteUpdate(to, from, next){
      let url = this.setRequestUrl(to.fullPath);
      this.getBooks(url, this.pageNum, this.pageSize);
      next();
    },

    components: {
      BookList,
      Loading
    },

    methods: {
      getBooks(url, pageNum, pageSize){
        this.message = '';
        this.axios.get(url, {params: {pageNum, pageSize}})
          .then(response => {
            if(response.data.code == 200){
              this.loading = false;
              this.books = response.data.data;
              this.total = response.data.total;
              if(this.books.length === 0){
                if(this.$route.name === "category")
                  this.message = "当前分类下没有图书！"
                else
                  this.message = "没有搜索到匹配的图书！"
              }
            }
          })
          .catch(error => alert(error));
      },
      // 动态设置服务端数据接口的请求URL
      setRequestUrl(path){
        let url = path;
        if(path.indexOf("/category") != -1){
          url = "/book" + url + "/page";
        }
        return url;
      },
      handleSizeChange(selectedSize) {
            this.pageSize = selectedSize;
            //console.log(this.pageSize) //每页下拉显示数据条数
            let url = this.setRequestUrl(this.$route.fullPath);
            this.getBooks(url, this.pageNum, this.pageSize);
        },

      handleCurrentChange(currentPage) {
          this.pageNum = currentPage
          let url = this.setRequestUrl(this.$route.fullPath);
          //console.log(currentPage) //点击第几页
          this.getBooks(url, this.pageNum, this.pageSize)
      },
    }
  }
</script>
<style scoped>

</style>