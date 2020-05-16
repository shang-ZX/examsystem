<template>
  <div>
    <el-table :data="tableData" style="width: 100%" max-height="608">
      <el-table-column fixed type="index" label="序号" width="50">
      </el-table-column>
      <el-table-column prop="questiontype" label="题目类型" width="100">
      </el-table-column>
      <el-table-column prop="question" label="题目" width="300">
      </el-table-column>
      <el-table-column prop="A" label="A选项" width="180">
      </el-table-column>
      <el-table-column prop="B" label="B选项" width="180">
      </el-table-column>
      <el-table-column prop="C" label="C选项" width="180">
      </el-table-column>
      <el-table-column prop="D" label="D选项" width="180">
      </el-table-column>
      <el-table-column prop="answer" label="答案" width="100">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click="dialogUpdateVisible = true,handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.row)" type="text" size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑考题" :visible.sync="dialogUpdateVisible">
      <el-form :model="update" ref="update" label-width="100px" :inline="true" label-position="left">
        <el-form-item label="题目 :">
          <el-input v-model="update.question" style="width: 500px;" @input="$forceUpdate()"></el-input>
        </el-form-item>
        <el-form-item label="A选项 :">
          <el-input v-model="update.A" style="width: 500px;" @input="$forceUpdate()"></el-input>
        </el-form-item>
        <el-form-item label="B选项 :">
          <el-input v-model="update.B" style="width: 500px;" @input="$forceUpdate()"></el-input>
        </el-form-item>
        <el-form-item label="C选项 :">
          <el-input v-model="update.C" style="width: 500px;" @input="$forceUpdate()"></el-input>
        </el-form-item>
        <el-form-item label="D选项 :">
          <el-input v-model="update.D" style="width: 500px;" @input="$forceUpdate()"></el-input>
        </el-form-item>
        <el-form-item label="答案 :">
          <el-input v-model="update.answer" style="width: 500px;" @input="$forceUpdate()"></el-input>
        </el-form-item><br><br>
        <el-form-item>
          <el-button type="primary" @click="updatequestion()">更新考题</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUpdateVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import vue from 'vue'
export default {
  name: '',
  data () {
    return {
      tableData: [],
      dialogUpdateVisible: false,
      update: {}
    };
  },
  components: {},
  props: {
    type: String
  },
  mounted () {
    axios({
      url: 'http://127.0.0.1:8888/find',
      params: {
        collection: 'question',
        type: this.type,
        questiontype: '单选题',
      }
    }).then(ret => {
      for(let i in ret.data){
        vue.set(this.tableData, i, ret.data[i])
      }
    })
  },
  methods: {
    deleteRow(row) {
      axios({
        url: 'http://127.0.0.1:8888/delete',
        params: {
          collection: 'question',
          id: row._id,
          type: row.type,
          questiontype: row.questiontype
        }
      }).then(ret => {
        this.tableData.splice(0)
        for(let i in ret.data){
          vue.set(this.tableData, i, ret.data[i])
        }
      })
    },
    handleClick(row) {
      for(let key in row){
        this.update[key] = row[key]
      }
    },
    updatequestion(){
      for(let key in this.update){
        if(this.update[key] === ''){
          alert(key + '不能为空！')
          return
        }
      }
      axios({
        url: 'http://127.0.0.1:8888/update',
        params: {
          collection: 'question',
          id: this.update._id,
          question: this.update.question,
          answer: this.update.answer,
          A: this.update.A,
          B: this.update.B,
          C: this.update.C,
          D: this.update.D,
          type: this.update.type,
          questiontype: this.update.questiontype
        }
      }).then(ret => {
        this.tableData.splice(0)
        for(let i in ret.data){
          vue.set(this.tableData, i, ret.data[i])
        }
      })
      this.dialogUpdateVisible = false
    }
  }
}
</script>

<style>
</style>