const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mydb',{useNewUrlParser:true},(err)=>{
  if(err){
      console.log(err+"数据库连接失败");
  }else{
    console.log("数据库连接成功");
  } 
})

const AdminSchema = mongoose.Schema({
  user: String,
  password: String,
  status: {
    type: String,
    default: 'admin'
  }
})

const TeacherSchema = mongoose.Schema({
  user: String,
  password: String,
  name: String,
  sex: String,
  status: {
    type: String,
    default: 'teacher'
  }
})

const StudentSchema = mongoose.Schema({
  user: String,
  password: String,
  name: String,
  sex: String,
  status: {
    type: String,
    default: 'student'
  }
})

const QuestionSchema = mongoose.Schema({
  type: String,
  questiontype: String,
  question: String,
  A: String,
  B: String,
  C: String,
  D: String,
  answer: String
})

const GradeSchema = mongoose.Schema({
  user: String,
  name: String,
  type: String,
  grade: String
})

//三个参数的含义，model名，schema名，操作的数据集合
const Admin = mongoose.model("Admin", AdminSchema, "admins")
const Teacher = mongoose.model("Teacher", TeacherSchema, "teachers")
const Student = mongoose.model("Student", StudentSchema, "students")
const Question = mongoose.model("Question", QuestionSchema, "questions")
const Grade = mongoose.model("Grade",GradeSchema,"grades")
module.exports = {
  Admin,
  Teacher,
  Student,
  Question,
  Grade
}
