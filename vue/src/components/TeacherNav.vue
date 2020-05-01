<template>
  <div>
    <div style="text-align: center;color: #ffffff;margin: 20px">
      <h1>教师操作</h1>
    </div>
    <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ff0000">
      <el-menu-item index="1" @click="btnstudent()">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>考生管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2" @click="btngrade()">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>成绩统计</span>
        </template>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>题库管理</span>
        </template>
        <el-menu-item index="3-1" @click="btnquestion('C')">C语言程序设计</el-menu-item>
        <el-menu-item index="3-2" @click="btnquestion('Java')">Java语言程序设计</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {
    btnstudent(){
      this.$router.push('/teacher/student')
    },
    btngrade(){
      this.$router.push('/teacher/grade')
    },
    btnquestion(questiontype){
      this.$router.push('/teacher/question-'+questiontype)
    }
  }
}
</script>

<style>
</style>