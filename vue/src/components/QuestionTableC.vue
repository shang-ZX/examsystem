<template>
  <div>
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ff0000">
        <el-menu-item index="1" @click="btnjump('I')">单选题管理</el-menu-item>
        <el-menu-item index="2" @click="btnjump('II')">多选题管理</el-menu-item>
        <el-menu-item index="3" @click="btnjump('III')">填空题管理</el-menu-item>
        <el-menu-item index="4" @click="btnjump('IIII')">编程题管理</el-menu-item>
        <el-menu-item index="5" @click="btnjump('IIIII')">问答题管理</el-menu-item>
        <div class="addbtn"><el-button type="primary" icon="el-icon-edit" circle @click="dialogAdd = true"></el-button></div>
      </el-menu>
      <router-view v-if="isRouterAlive" type="C语言程序设计"></router-view>
      
      <el-dialog title="新增题目" :visible.sync="dialogAdd">
        <el-form :model="add" :rules="rules" ref="add" label-width="100px" :inline="true" label-position="left">
          <el-form-item label="题目类型" prop="questiontype">
            <el-radio-group v-model="add.questiontype" @change="show()">
              <el-radio label="单选题"></el-radio>
              <el-radio label="多选题"></el-radio>
              <el-radio label="填空题"></el-radio>
              <el-radio label="编程题"></el-radio>
              <el-radio label="问答题"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="题目 :" prop="question">
            <el-input v-model="add.question" style="width: 500px;" @input="$forceUpdate()"></el-input>
          </el-form-item>
          <div v-if="showoption">
            <el-form-item label="选项A :" prop="A">
              <el-input v-model="add.A" style="width: 500px;" @input="$forceUpdate()"></el-input>
            </el-form-item>
            <el-form-item label="选项B :" prop="B">
              <el-input v-model="add.B" style="width: 500px;" @input="$forceUpdate()"></el-input>
            </el-form-item>
            <el-form-item label="选项C :" prop="C">
              <el-input v-model="add.C" style="width: 500px;" @input="$forceUpdate()"></el-input>
            </el-form-item>
            <el-form-item label="选项D :" prop="D">
              <el-input v-model="add.D" style="width: 500px;" @input="$forceUpdate()"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="答案 :" prop="answer">
            <el-input v-model="add.answer" style="width: 500px;" @input="$forceUpdate()"></el-input>
          </el-form-item>
          <br><br>
          <el-form-item>
            <el-button type="primary" @click="addquestion('add')">添加</el-button>
            <el-button @click="reset('add')">重置</el-button>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogAdd = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import vue from 'vue'
export default {
  name: '',
  data () {
    return {
      activeIndex: '1',
      dialogAdd: false,
      showoption: true,
      isRouterAlive: true,
      add: {
        questiontype: '单选题'
      },
      rules: {
        question: [
          { required: true, message: '题目不能为空', trigger: 'blur' }
        ],
        answer: [
          { required: true, message: '答案不能为空', trigger: 'blur' }
        ],
        A: [
          { required: true, message: '选择题每个选项不能为空', trigger: 'blur' },
        ],
        B: [
          { required: true, message: '选择题每个选项不能为空', trigger: 'blur' },
        ],
        C: [
          { required: true, message: '选择题每个选项不能为空', trigger: 'blur' },
        ],
        D: [
          { required: true, message: '选择题每个选项不能为空', trigger: 'blur' },
        ],
      }
    };
  },
  components: {},
  mounted () {
    this.$router.push('question-C/I')
  },
  methods: {
    btnjump(i){
      this.$router.push(i)
    },
    addquestion(add){
      this.$refs[add].validate((valid) => {
        if (valid) {
          axios({
            url: 'http://127.0.0.1:8888/add',
            params: {
              collection: 'question',
              type: 'C语言程序设计',
              questiontype: this.add.questiontype,
              question: this.add.question,
              A: this.add.A,
              B: this.add.B,
              C: this.add.C,
              D: this.add.D,
              answer: this.add.answer
            }
          }).then(ret => {
            this.isRouterAlive = false;
            this.$nextTick( () => {
              this.isRouterAlive = true;
            })
            for(let k of Object.keys(this.add)){
              if(k != 'questiontype'){
                vue.delete(this.add, k)
              }
            }
          })
          this.dialogAdd = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    reset(formName) {
      this.$refs[formName].resetFields();
    },
    show(){
      if(this.add.questiontype == '单选题' || this.add.questiontype == '多选题'){
        this.showoption = true
      }else{
        this.showoption = false
      }
    }
  }
}
</script>

<style>
.addbtn{
  position: absolute;
  top: 50%;
  left: 96%;
  transform: translate(-50%, -50%);
}
</style>