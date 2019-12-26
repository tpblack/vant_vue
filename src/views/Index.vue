<template>
    <div>
        <router-view/>
        <!-- 在.vue文件中 如果该标签没有填充内容 则直接写为但标签 -->
        <TabBarTp />
    </div>
</template>

<script>
// 引入Tabbar组件
import TabBarTp from '@/components/tabbar'
export default {
    name: 'index',
    // 局部导入组件
    components: {
        TabBarTp
    }
}
</script>

<style lang="scss" scoped>

</style>