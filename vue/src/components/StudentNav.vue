<template>
  <div>
    <div style="text-align: center; color: #ffffff; margin: 20px">
      <h1>考生操作</h1>
    </div>
    <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ff0000">
      <el-menu-item index="1" @click="btngrade()">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>查看成绩</span>
        </template>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>在线考试</span>
        </template>
        <el-menu-item index="3-1" @click="btnexam('C')">C语言程序设计</el-menu-item>
        <el-menu-item index="3-2" @click="btnexam('Java')">Java语言程序设计</el-menu-item>
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
  mounted () {
    this.$router.push('/student/grade')
  },
  methods: {
    btngrade(){
      this.$router.push('/student/grade')
    },
    btnexam(exam){
      this.$router.push('/student/'+exam)
    }
  }
}
</script>

<style>
</style>