const db = require('./mongodb/db')
const teacher = require('./mongodb/teacher')
const student = require('./mongodb/student')
const question = require('./mongodb/question')
const grade = require('./mongodb/grade')

// db.Teacher.insertMany(teacher,function(err, ret){
//   if(err){
//     console.log(err)
//   }else{
//     console.log("教师表插入数据成功")
//   }
// })

// db.Student.insertMany(student,function(err, ret){
//   if(err){
//     console.log(err)
//   }else{
//     console.log("学生表插入数据成功")
//   }
// })

// db.Question.insertMany(question,function(err, ret){
//   if(err){
//     console.log(err)
//   }else{
//     console.log("试题表插入数据成功")
//   }
// })

db.Grade.insertMany(grade,function(err, ret){
  if(err){
    console.log(err)
  }else{
    console.log("成绩表插入数据成功")
  }
})