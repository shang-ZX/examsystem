<template>
  <div>
    <div class="loginform">
      <h1 class="loginh1">程序员在线考试系统</h1>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="账号 :">
          <el-input v-model="form.user" placeholder="输入您的账号" style="width: 320px; left: -40px"></el-input>
        </el-form-item>
        <el-form-item label="密码 :">
          <el-input type="password" v-model="form.password" placeholder="输入密码" style="width: 320px; left: -40px"></el-input>
        </el-form-item>
        <el-radio-group v-model="status">
          <el-radio :label="1">管理员</el-radio>
          <el-radio :label="2">教师</el-radio>
          <el-radio :label="3">学生</el-radio>
        </el-radio-group><br><br>
        <el-button @click="loginbtn()">登录</el-button>
        <el-button>取消</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../store/index'
export default {
  name: '',
  store,
  data () {
    return {
      form: {
        user: '',
        password: '',
      },
      status: 1
    };
  },
  components: {},
  mounted () {},
  methods: {
    loginbtn(){    
      axios({
        url: 'http://127.0.0.1:8888/login',
        params: {
          user: this.form.user,
          password: this.form.password,
          status: this.status
        }
      }).then(ret => {
        this.$store.commit('userstatus',ret.data)
        if(ret.data.status === 'admin'){
          this.$router.push('/admin')
        }else if(ret.data.status === 'teacher'){
          this.$router.push('/teacher')
        }else if(ret.data.status === 'student'){
          this.$router.push('/student')
        }else{
          alert("登录失败！")
        }
      })
    }
  }
}
</script>

<style>
.loginform {
  position: absolute;
  width: 500px;
  height: 360px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: beige;
  padding: 10px;
}
.loginh1{
  margin: 40px;
}
</style>