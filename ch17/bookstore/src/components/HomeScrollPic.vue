<template>
  <div class="scrollPic">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide><img src="/ad01.jpg"></swiper-slide>
      <swiper-slide><img src="/ad02.jpg"></swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 轮播图向左滚动按钮 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <!-- 轮播图向右滚动按钮 -->
      <div class="swiper-button-next" slot="button-next"></div>
      <!-- 轮播图滚动条 -->
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>
 
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  data() {
    return {
      // 在swiperOption中对轮播图进行参数设置
      swiperOption: {
        loop: true,  // 开启循环播放模式
        pagination: {  // 分页器设置，包括样式、是否可以点击、气泡是否动态变化等
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          dynamicBullets: true
        },
        speed: 1000, // 设置slide从自动滑动开始到结束的时间，单位ms
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        effect: "slide",  // 图片切换效果：滑动
        navigation: {
          nextEl: ".swiper-button-next", // 设置轮播图向左向右按钮
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    /* swiper() {
      return this.$refs.mySwiper.swiper;
    } */
  }
};
</script>

<style scoped>
.scrollPic {
  width: 610px;
  height: 80px; 
  float: left;
  margin: 10px 50px auto 50px;
}
.scrollPic img {
  width: 610px;
  height: 200px;
}

</style>