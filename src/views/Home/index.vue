<template>
  <div class="home">
    <navTp></navTp>
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in imgArr" :key="index">
          <div class="swipe-item">
            <img :src="item" alt />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
// 导入nav
import navTp from "@/components/nav";
const imgArr = [
  require("@/assets/Life class1.jpg"),
  require("@/assets/Life class2.jpg"),
  require("@/assets/Life class3.jpg"),
  require("@/assets/Life class4.jpg")
];
export default {
  data() {
    return {
      imgArr,
    };
  },
  name: "home",
  components: {
    navTp
  }
};
</script>

<style lang="scss" scoped>
.home {
  .swipe {
    height: 190px;
    // background-color: red;
    .van-swipe {
      height: 100%;
      img{
          width: 100%;
          height: 190px;
      }
    }
  }
}
</style>