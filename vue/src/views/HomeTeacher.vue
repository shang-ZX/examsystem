<template>
  <div>
    <div class="nav">
      <TeacherNav></TeacherNav>
    </div>
    <div class="header">
      <Header></Header>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TeacherNav from '../components/TeacherNav'
import StudentTable from '../components/StudentTable'
import Header from '../components/Header'
export default {
  name: '',
  data () {
    return {
      
    };
  },
  components: {
    TeacherNav,
    StudentTable,
    Header
  },
  mounted () {
    this.$router.push('/teacher/student')
  },
  methods: {
  }
}
</script>

<style>
.nav{
  float: left;
  width: 18%;
  height: 100vh;
  background-color: #545c64;
}
.header{
  float: left;
  width: 82%;
  height: 11vh;
}
.main{
  float: left;
  width: 82%;
  height: 89vh;
  background-color: rgb(235, 235, 235);
}
</style>