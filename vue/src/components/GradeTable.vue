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
      </el-table><br>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" v-if="this.$store.state.status === 'teacher'">
        <el-form-item>
          <el-input v-model="formInline.item1" placeholder="学号/姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formInline.item2" placeholder="搜索条件">
            <el-option label="学号" value="uesr"></el-option>
            <el-option label="姓名" value="name"></el-option>
            <el-option label="全部" value="all"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <h1>平均分：{{avg}}</h1>
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
      tableData: [],
      formInline: {
        item1: '',
        item2: ''
      }
    };
  },
  computed: {
    avg(){
      let num = 0
      for(let i in this.tableData){
        num += parseFloat(this.tableData[i].grade)/this.tableData.length
      }
      const avg = Math.floor(num*100)/100
      return avg
    }
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
  methods: {
    onSubmit() {
      axios({
        url: 'http://127.0.0.1:8888/findgrade',
        params: {
          item1: this.formInline.item1,
          item2: this.formInline.item2
        }
      }).then(ret => {
        this.tableData.splice(0)
        for(let i in ret.data){
          vue.set(this.tableData, i, ret.data[i])
        }
      })
    }
  }
}
</script>

<style>
.gradetable{
  position: absolute;
  top: 54%;
  left: 60%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>