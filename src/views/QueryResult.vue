<template> 
    <el-table border class="result" v-if="result.rows.length!==0"
        :data="result.rows"
        style="width: 100%">
        <el-table-column v-for="col in result.fields" :key="col.columnID"
            :prop="col.name"
            :label="col.name"
            width="180">
        </el-table-column>
    </el-table>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters(['result']),
    }
}
</script>

<style scoped>
    .result{
        width: 50%;
        margin: 0 2em;
    }
</style>