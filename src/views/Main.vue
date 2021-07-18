<template>
    <div>
        <h3>当前连接：{{connected}}</h3>
        <el-row>
            <el-col :span="2" :offset="1"><el-button @click="save">保存</el-button></el-col>
            <el-col :span="2" :offset="1"><el-button @click="run">运行</el-button></el-col>
        </el-row><br/>
        <div class="container">
            <el-input class="textarea" v-model="value" placeholder="输入查询语句" type="textarea" :rows="20"></el-input>
            <router-view class="result"></router-view>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    data(){
        return {
            value: ''
        }
    },
    computed:{
        ...mapGetters(['err', 'result', 'currentConnected']),
        connected(){
            return this.currentConnected?.replace(/(?<=.*:\/\/.*:).*(?=@.*:.*\/.*)/, '******')
        }
    },
    methods:{
        ...mapActions(['query']),
        save(){
            console.log(this.value)
        },
        run(){
            this.query({queryString: this.value})
            setTimeout(()=>{
                if(this.$route.path!=='/connected/result'){
                    this.$router.replace('/connected/result')
                }
            }, 1000)
        }
    }
}
</script>

<style scoped>
    .container{
        display: flex;
    }

    .textarea{
        width: 40%;
    }

    .result{
        width: 50%;
        padding: 2em;
    }
</style>