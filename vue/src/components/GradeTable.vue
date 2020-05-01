<template>
  <div>
    <div class="gradetable">
      <h1>成绩统计表</h1><br><br>
      <el-table :data="tableData" height="400" border>
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column prop="user" label="学号" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="type" label="试题类型" width="150">
        </el-table-column>
        <el-table-column prop="grade" label="成绩" width="100">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import vue from 'vue'
import store from '../store/index'
export default {
  name: '',
  data () {
    return {
      tableData: []
    };
  },
  components: {},
  mounted () {
    axios({
      url: 'http://127.0.0.1:8888/grade',
      params: {
        status: this.$store.state.status,
        user: this.$store.state.user
      }
    }).then(ret => {
      for(let i in ret.data){
        vue.set(this.tableData, i, ret.data[i])
      }
    })
  },
  methods: {}
}
</script>

<style>
.gradetable{
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>