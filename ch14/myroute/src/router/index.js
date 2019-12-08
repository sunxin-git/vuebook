import Vue from 'vue'
import VueRouter from 'vue-router'  // 导入vue-router
//import News from '@/components/News'
//import Books from '@/components/Books'
//import Videos from '@/components/Videos'
import Book from '@/components/Book'
import Login from '@/components/Login'

Vue.use(VueRouter)  //安装vue-router插件

// 将VueRouter实例作为模块的默认导出
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'news'
      }
    },
    {
      path: '/news',
      name: 'news',
      //component: News,
      component: () => import(/* webpackChunkName: "home" */ '@/components/News'),

      meta: {
        title: '新闻'
      }
    },
    {
      path: '/books',
      name: 'books',
      //component: Books,
      component: () => import(/* webpackChunkName: "home" */ '@/components/Books'),
      meta: {
        title: '图书列表'
      },
      /* children: [
        {path: '/book/:id', name: 'book', component: Book}
      ], */
    },
    {
      path: '/book/:id',
      name: 'book',
      meta: {
        title: '图书'
      },
      components: {bookDetail: Book}
    },
    {
      path: '/videos',
      name: 'videos',
      //component: Videos,
      component: () => import(/* webpackChunkName: "home" */ '@/components/Books'),
      meta: {
        title: '视频',
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录'
      }
    }
  ]
})
/*router.beforeEach((to, from, next) => {
  // 判断目标路由是否是/login，如果是，直接调用next()方法
  if(to.path == '/login'){
    next();
  }
  else{
    // 否则判断用户是否已经登录，注意这里是字符串判断
    if(sessionStorage.isAuth === "true"){
      next();
      
    } 
    // 如果用户访问的是受保护的资源，且没有登录，则跳转到登录页面，
    // 并将当前路由的完整路径作为查询参数传给Login组件，以便登录成功后返回先前的页面
    else{
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      });
    }
  }
})*/

router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.matched.some(record => record.meta.requiresAuth))
  {
    // 路由需要验证，判断用户是否已经登录
    if(sessionStorage.isAuth === "true"){
      next(); 
    }
    else{
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      });
    }
  }
  else
    next();
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  document.title = to.meta.title;
})

export default router;