<template>
  <div>
    <div class="test">
      <h1 style="width: 100%; text-align: center;">C语言程序设计</h1><br>
      <el-form ref="form" :model="form" label-position="left">
        <h3>一、单选题(每题5分)</h3>
        <el-form-item v-for="(item, index) in questionsI" :key="item._id" :label="(index+1)+'、'+item.question"><br>
          <el-radio-group v-model="form.questionsIanswer[index]">
            <el-radio :label="'A、'+item.A"></el-radio>
            <el-radio :label="'B、'+item.B"></el-radio>
            <el-radio :label="'C、'+item.C"></el-radio>
            <el-radio :label="'D、'+item.D"></el-radio>
          </el-radio-group>
        </el-form-item>
        <h3>二、多选题（每题10分）</h3>
        <el-form-item v-for="(item, index) in questionsII" :key="item._id" :label="(index+1)+'、'+item.question"><br>
          <el-checkbox :label="'A、'+item.A" v-model="form.questionsIIanswer[index][0]"></el-checkbox>
          <el-checkbox :label="'B、'+item.B" v-model="form.questionsIIanswer[index][1]"></el-checkbox>
          <el-checkbox :label="'C、'+item.C" v-model="form.questionsIIanswer[index][2]"></el-checkbox>
          <el-checkbox :label="'D、'+item.D" v-model="form.questionsIIanswer[index][3]"></el-checkbox>
        </el-form-item>
        <h3>三、填空题（每题10分）</h3>
        <el-form-item v-for="(item, index) in questionsIII" :key="item._id" :label="(index+1)+'、'+item.question">
          <el-input v-model="form.questionsIIIanswer[index]"></el-input>
        </el-form-item>
        <h3>四、问答题（每题15分）</h3>
        <el-form-item v-for="(item, index) in questionsIIII" :key="item._id" :label="(index+1)+'、'+item.question">
          <el-input type="textarea" :rows="5" v-model="form.questionsIIIIanswer[index]"></el-input>
        </el-form-item>
        <h3>五、编程题（每题20分）</h3>
        <el-form-item v-for="(item, index) in questionsIIIII" :key="item._id" :label="(index+1)+'、'+item.question">
          <el-input type="textarea" :rows="15" v-model="form.questionsIIIIIanswer[index]"></el-input>
        </el-form-item>
        <el-form-item class="primary">
          <el-button type="primary" @click="onSubmit" :disabled=isbtn>提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import vue from 'vue'
import store from '../store/index'
export default {
  name: '',
  store,
  data () {
    return {
      questionsI: [],
      questionsII: [],
      questionsIII: [],
      questionsIIII: [],
      questionsIIIII: [],
      form: {
        questionsIanswer: [],
        questionsIIanswer: [
          [],
          []
        ],
        questionsIIIanswer: [],
        questionsIIIIanswer: [],
        questionsIIIIIanswer: []
      },
      grade: 0,
      isbtn: false
    };
  },
  components: {},
  mounted () {
    axios({
      url: 'http://127.0.0.1:8888/exam',
      params: {
        exam: 'C语言程序设计'
      }
    }).then(ret =>{
      for(let i = 0; i < 5; i++){
        vue.set(this.questionsI, i, ret.data[i])
      }
      for(let i = 5; i < 7; i++){
        vue.set(this.questionsII, i-5, ret.data[i])
      }
      for(let i = 7; i < 9; i++){
        vue.set(this.questionsIII, i-7, ret.data[i])
      }
      for(let i = 9; i < 10; i++){
        vue.set(this.questionsIIII, i-9, ret.data[i])
      }
      for(let i = 10; i < 11; i++){
        vue.set(this.questionsIIIII, i-10, ret.data[i])
      }
    })
  },
  methods: {
    onSubmit() {
      for(let i in this.questionsI){
        if(this.form.questionsIanswer[i].charAt(0) == this.questionsI[i].answer){
          this.grade += 5
        }
      }
      for(let i in this.questionsII){
        let answernumber = 0
        if(this.form.questionsIIanswer[i][0]){
          answernumber++
          if(!this.questionsII[i].answer.indexOf("A") == -1){
            continue
          }
        }
        if(this.form.questionsIIanswer[i][1]){
          answernumber++
          if(!this.questionsII[i].answer.indexOf("B") == -1){
            continue
          }
        }
        if(this.form.questionsIIanswer[i][2]){
          answernumber++
          if(!this.questionsII[i].answer.indexOf("C") == -1){
            continue
          }
        }
        if(this.form.questionsIIanswer[i][3]){
          answernumber++
          if(!this.questionsII[i].answer.indexOf("D") == -1){
            continue
          }
        }
        if(answernumber == this.questionsII[i].answer.split(',').length){
          this.grade += 10
        }else{
          this.grade += 5
        }
      }
      for(let i in this.questionsIII){
        if(this.form.questionsIIIanswer[i] == this.questionsIII[i].answer){
          this.grade += 10
        }
      }
      for(let i in this.questionsIIII){
        const text1 = [];
        const text2 = [];
        for(let x in this.questionsIIII[i].answer){
          text1[x] = this.questionsIIII[i].answer.charAt(x)
        }
        for(let x in this.form.questionsIIIIanswer[i]){
          text2[x] = this.form.questionsIIIIanswer[i].charAt(x)
        }
        let dif = []
        for (let a = 0; a <= text1.length; a++) {
          dif[a] = []
          dif[a][0] = a
        }
        for (let a = 0; a <= text2.length; a++) {
          dif[0][a] = a
        }
        let temp = -1
        for (let i = 1; i <= text1.length; i++) {
          for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] == text2[j - 1]) {
              temp = 0
            } else {
              temp = 1
            }
            const arr = [dif[i - 1][j - 1] + temp, dif[i][j - 1] + 1, dif[i - 1][j] + 1]
            dif[i][j] = 999
            for (let k = 0; k < arr.length; k++) {
              if (dif[i][j] > arr[k]) {
                dif[i][j] = arr[k]
              }
            }
          }
        }
        let similarity = (1 - dif[text1.length][text2.length] / Math.max(text1.length, text2.length)).toFixed(2)
        if(similarity > 0.8){
          this.grade += 15
        }else if(similarity > 0.5){
          this.grade += 10
        }else if(similarity > 0.3){
          this.grade += 5
        }
      }
      for(let i in this.questionsIIIII){
        const text1 = this.questionsIIIII[i].answer.match(/[a-zA-Z0-9]/g)
        const text2 = this.form.questionsIIIIIanswer[i].match(/[a-zA-Z0-9]/g)
        let dif = []
        for (let a = 0; a <= text1.length; a++) {
          dif[a] = []
          dif[a][0] = a
        }
        for (let a = 0; a <= text2.length; a++) {
          dif[0][a] = a
        }
        let temp = -1
        for (let i = 1; i <= text1.length; i++) {
          for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] == text2[j - 1]) {
              temp = 0
            } else {
              temp = 1
            }
            const arr = [dif[i - 1][j - 1] + temp, dif[i][j - 1] + 1, dif[i - 1][j] + 1]
            dif[i][j] = 999
            for (let k = 0; k < arr.length; k++) {
              if (dif[i][j] > arr[k]) {
                dif[i][j] = arr[k]
              }
            }
          }
        }
        let similarity = (1 - dif[text1.length][text2.length] / Math.max(text1.length, text2.length)).toFixed(2)
        if(similarity > 0.9){
          this.grade += 20
        }else if(similarity > 0.7){
          this.grade += 15
        }else if(similarity > 0.5){
          this.grade += 10
        }else if(similarity > 0.3){
          this.grade += 5
        }
      }
      axios({
        url: 'http://127.0.0.1:8888/grade',
        params: {
          user: this.$store.state.user,
          name: this.$store.state.name,
          type: 'C语言程序设计',
          grade: this.grade
        }
      }).then(ret => {
        if(ret.data == 'success'){
          alert("你本次考试的成绩是"+this.grade)
          this.isbtn = true
        }
      })
    }
  }
}
</script>

<style>
.test{
  position: absolute;
  padding: 20px;
  background-color: #ffffff;
  width: 50%;
  height: 80.5vh;
  top: 14vh;
  left: 32%;
  overflow-x: hidden;
	overflow-y: scroll;
}
.primary{
  text-align: center;
}
</style>