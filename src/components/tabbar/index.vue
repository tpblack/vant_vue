<template>
  <div>
    <van-tabbar v-model="index" safe-area-inset-bottom>
      <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/type" icon="orders-o">类别</van-tabbar-item>
      <van-tabbar-item to="/shop" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// 定义一个 路由列表数组
var routerArr = ['/','/type','/shop','/user']
export default {
  data() {
    return {
      index: 0
    };
  },
  // 页面加载的时候 判断路由 然后给出相对应的v-model值
  created() {
    // 获取当前路由
    var path = this.$route.path;
    console.log(path)
    // 根据当前路由查询当前路由对应的index
    // console.log(routerArr.indexOf(path))
    this.index = routerArr.indexOf(path)
  },
  // 监听router的变化
  // watch: {
  //   $route(to,from){
  //     console.log(to)
  //   }
  // },
};
</script>

<style lang="scss" scoped>
</style>