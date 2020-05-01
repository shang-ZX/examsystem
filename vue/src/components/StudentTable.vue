<template>
  <div>
    <div class="studenttable">
      <h1>学生管理表</h1><br><br>
      <el-table :data="tableData" height="400" border>
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="100">
        </el-table-column>
        <el-table-column prop="user" label="学号" width="150">
        </el-table-column>
        <el-table-column prop="password" label="密码" width="150">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="dialogUpdateVisible = true,handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table><br>
      <el-button type="primary" @click="dialogAddVisible = true">新增学生</el-button>
    </div>

    <el-dialog title="新增学生" :visible.sync="dialogAddVisible">
      <el-form :model="add" :rules="rules" ref="add" label-width="100px" :inline="true" label-position="left">
        <el-form-item label="姓名 :" prop="name">
          <el-input v-model="add.name" style="width: 500px;" @input="$forceUpdate()"></el-input>
        </el-form-item>
        <el-form-item label="性别 :" prop="sex">
          <el-radio-group v-model="add.sex" @input="$forceUpdate()">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="学号 :" prop="user">
          <el-input v-model="add.user" style="width: 500px;" @input="$forceUpdate()"></el-input>
        </el-form-item>
        <el-form-item label="密码 :" prop="password">
          <el-input v-model="add.password" style="width: 500px;" @input="$forceUpdate()"></el-input>
        </el-form-item><br><br>
        <el-form-item>
          <el-button type="primary" @click="addstudent('add')">添加</el-button>
          <el-button @click="reset('add')">重置</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddVisible = false">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog title="编辑学生" :visible.sync="dialogUpdateVisible">
      <el-form :model="update" ref="update" label-width="100px" :inline="true" label-position="left">
        <el-form-item label="姓名 :">
          <el-input v-model="update.name" style="width: 500px;" @input="$forceUpdate()"></el-input>
        </el-form-item>
        <el-form-item label="性别 :">
          <el-radio-group v-model="update.sex" @input="$forceUpdate()">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="学号 :">
          <el-input v-model="update.user" style="width: 500px;" @input="$forceUpdate()"></el-input>
        </el-form-item>
        <el-form-item label="密码 :">
          <el-input v-model="update.password" style="width: 500px;" @input="$forceUpdate()"></el-input>
        </el-form-item><br><br>
        <el-form-item>
          <el-button type="primary" @click="updatestudent()">更新学生</el-button>
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
      dialogAddVisible: false,
      dialogUpdateVisible: false,
      tableData: [],
      add: {},
      update: {},
      rules: {
        name: [
          { required: true, message: '请输入教师姓名', trigger: 'blur' },
          { max: 5, message: '姓名长度应在 5 个字符以内', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        user: [
          { required: true, message: '请输入用户账号', trigger: 'blur' },
          { max: 11, message: '用户账号长度应小于 11 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
        ]
      }
    };
  },
  components: {},
  mounted () {
    axios({
      url: 'http://127.0.0.1:8888/find',
      params: {
        collection: 'student'
      }
    }).then(ret => {
      for(let i in ret.data){
        vue.set(this.tableData, i, ret.data[i])
      }
    })
  },
  methods: {
    addstudent(add){
      this.$refs[add].validate((valid) => {
        if (valid) {
          axios({
            url: 'http://127.0.0.1:8888/add',
            params: {
              collection: 'student',
              name: this.add.name,
              sex: this.add.sex,
              user: this.add.user,
              password: this.add.password
            }
          }).then(ret => {
            if(ret.data === false){
              alert("您输入的的学号已存在！")
              return
            }
            for(let i in ret.data){
              vue.set(this.tableData, i, ret.data[i])
            }
            for(let k of Object.keys(this.add)){
              vue.delete(this.add, k)
            }
            this.dialogAddVisible = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    updatestudent(){
      for(let key in this.update){
        if(this.update[key] === ''){
          alert(key + '不能为空！')
          return
        }
      }
      axios({
        url: 'http://127.0.0.1:8888/update',
        params: {
          collection: 'student',
          id: this.update._id,
          user: this.update.user,
          password: this.update.password,
          name: this.update.name,
          sex: this.update.sex
        }
      }).then(ret => {
        this.tableData.splice(0)
        for(let i in ret.data){
          vue.set(this.tableData, i, ret.data[i])
        }
      })
      this.dialogUpdateVisible = false
    },
    handleClick(row) {
      for(let key in row){
        this.update[key] = row[key]
      }
    },
    deleteClick(row) {
      axios({
        url: 'http://127.0.0.1:8888/delete',
        params: {
          collection: 'student',
          id: row._id
        }
      }).then(ret => {
        this.tableData.splice(0)
        for(let i in ret.data){
          vue.set(this.tableData, i, ret.data[i])
        }
      })
    },
    reset(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
.studenttable{
position: absolute;
top: 50%;
left: 60%;
transform: translate(-50%, -50%);
text-align: center;
}
</style>
