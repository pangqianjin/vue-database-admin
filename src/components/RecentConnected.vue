<template>
    <div>
        <el-row><h2>最近连接</h2></el-row>
        <el-row v-show="recentConnected.length===0">暂无最近连接的数据库</el-row>
        <div v-show="recentConnected.length!==0">
            <el-row v-for="(database, index) in recentConnected" :key="index">
                <el-col :span="24"><strong>{{database}}</strong></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters(['recentConnected']),
    },
    mounted(){// 挂载后，读取localStorage中的最近连接过的数据库
        this.setRecentConnectedFromLocalStorage()
    },
    methods:{
        ...mapActions(['setRecentConnectedFromLocalStorage', 'connectDB'])
    }
}
</script>