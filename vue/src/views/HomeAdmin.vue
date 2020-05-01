<template>
  <div>
    <div class="nav">
      <AdminNav></AdminNav>
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
import AdminNav from '../components/AdminNav'
import TeacherTable from '../components/TeacherTable'
import Header from '../components/Header'
export default {
  name: '',
  data () {
    return {
      
    };
  },
  components: {
    AdminNav,
    TeacherTable,
    Header
  },
  mounted () {
    this.$router.push('/admin/teacher')
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