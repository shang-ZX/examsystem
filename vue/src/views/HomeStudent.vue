<template>
  <div>
    <div class="nav">
      <StudentNav></StudentNav>
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
import StudentNav from '../components/StudentNav'
import Header from '../components/Header'
export default {
  name: '',
  data () {
    return {
      
    };
  },
  components: {
    StudentNav,
    Header
  },
  mounted () {
    
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