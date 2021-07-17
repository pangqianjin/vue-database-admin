<template>
    <el-container>
        <!-- 最近连接过的数据库 -->
        <el-aside width="500px"><recent-connected /></el-aside>
        <!-- 连接数据库输入框 -->
        <el-main><connect-database/></el-main>
    </el-container>
</template>

<script>
import RecentConnected from '../components/RecentConnected.vue'
import ConnectDatabase from '../components/ConnectDatabase.vue'

export default {
    components: {
        RecentConnected,
        ConnectDatabase
    }
}
</script>