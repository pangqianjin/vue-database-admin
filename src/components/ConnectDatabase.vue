<template>
    <div>
        <el-row>
            <el-col :span="24"><h1>新建立连接</h1></el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-input v-model="value" type="password" show-password placeholder="e.g. tcp://user:password@host:port/database" />
            </el-col>
        </el-row><br/>
        <el-row><el-button type="primary" @click="connect(value)">连接</el-button></el-row>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    data(){
        return {
            value: '',// addr
        }
    },
    computed:{
        ...mapGetters(['err'])
    },
    methods:{
        ...mapActions(['connectDB']),
        connect(database){
            this.connectDB({addr: database.trim()})
            setTimeout(()=>{
                if(this.err){
                    this.$notify.error({
                        title: '错误',
                        message: this.err
                    });   
                }else{
                    this.$notify({
                        type: 'success',
                        title:'成功',
                        message: 'success'
                    })
                    this.$router.replace('/connected')// 跳转路由
                }
            }, 1000)
        }
    }
}
</script>