<template>
  <div>
    <div class="left">
      <h1 style="margin-top: 15px">程序员在线考试系统</h1>
    </div> 
    <div class="right">
      <span>{{$store.state.name}}({{$store.state.status}})</span><a href="/login">/退出</a>
    </div>
  </div>
</template>

<script>
import store from '../store/index'
export default {
  name: '',
  store,
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style>
.left{
  width: 80%;
  height: 11vh;
  float: left;
  text-align: center;
}
.right{
  width: 20%;
  height: 11vh;
  float: right;
  text-align: center;
  margin-top: 32px
}
</style>