const express = require('express')
const db = require('../mongodb/db')
const router = express.Router()

router.get('/login', function(req, res){
  if(req.query.status == 1){
    db.Admin.findOne({user: req.query.user, password: req.query.password},function(err,data){
      if(err){
        console.log(err)
      }
      if(data){
        res.send(data)
      }else {
        res.send('false')
      }
    })
  }else if(req.query.status == 2){
    db.Teacher.findOne({user: req.query.user, password: req.query.password},function(err,data){
      if(err){
        console.log(err)
      }
      if(data){
        res.send(data)
      }else {
        res.send('false')
      }
    })
  }else if(req.query.status == 3){
    db.Student.findOne({user: req.query.user, password: req.query.password},function(err,data){
      if(err){
        console.log(err)
      }
      if(data){
        res.send(data)
      }else {
        res.send('false')
      }
    })
  }
})

router.get('/add', function(req, res){
  if(req.query.collection == 'teacher'){
    db.Teacher.findOne({user: req.query.user}, function(err,data){
      if(err){
        console.log(err)
      }
      if(data){
        res.send('false')
      }else {
        db.Teacher.create({
          user: req.query.user,
          password: req.query.password,
          name: req.query.name,
          sex: req.query.sex
        },function(err, ret){
          if(err){
            console.log(err)
          }else{
            db.Teacher.find(function(err,data){
              if(err){
                console.log(err)
              }else{
                res.send(data)
              }
            })
          }
        })
      }
    })
  }else if(req.query.collection == 'student'){
    db.Student.findOne({user: req.query.user}, function(err,data){
      if(err){
        console.log(err)
      }
      if(data){
        res.send('false')
      }else {
        db.Student.create({
          user: req.query.user,
          password: req.query.password,
          name: req.query.name,
          sex: req.query.sex
        },function(err, ret){
          if(err){
            console.log(err)
          }else{
            db.Student.find(function(err,data){
              if(err){
                console.log(err)
              }else{
                res.send(data)
              }
            })
          }
        })
      }
    })
  }else if(req.query.collection == 'question'){
    if(req.query.questiontype == '单选题' || req.query.questiontype == '多选题'){
      db.Question.create({
        type: req.query.type,
        questiontype: req.query.questiontype,
        question: req.query.question,
        A: req.query.A,
        B: req.query.B,
        C: req.query.C,
        D: req.query.D,
        answer: req.query.answer
      },function(err, ret){
        if(err){
          console.log(err)
        }else{
          res.send(req.query.questiontype)  
        }
      })
    }else {
      db.Question.create({
        type: req.query.type,
        questiontype: req.query.questiontype,
        question: req.query.question,
        answer: req.query.answer
      },function(err, ret){
        if(err){
          console.log(err)
        }else{
          res.send(req.query.questiontype)  
        }
      })
    }
  }
})

router.get('/find', function(req, res){
  if(req.query.collection == 'teacher'){
    db.Teacher.find(function(err,data){
      if(err){
        console.log(err)
      }else{
        res.send(data)
      }
    })
  }else if(req.query.collection == 'student'){
    db.Student.find(function(err,data){
      if(err){
        console.log(err)
      }else{
        res.send(data)
      }
    })
  }else if(req.query.collection == 'question'){
    db.Question.find({'type': req.query.type, 'questiontype': req.query.questiontype},function(err,data){
      if(err){
        console.log(err)
      }else{
        res.send(data)
      }
    })
  }
})

router.get('/delete', function(req, res){
  if(req.query.collection == 'teacher'){
    db.Teacher.deleteOne({
      _id: req.query.id
    },function(err){
      if(err){
        console.log(err)
      }else{
        db.Teacher.find(function(err, data){
          if(err){
            console.log(err)
          }else{
            res.send(data)
          }
        })
      }
    })
  }else if(req.query.collection == 'student'){
    db.Student.deleteOne({
      _id: req.query.id
    },function(err){
      if(err){
        console.log(err)
      }else{
        db.Grade.deleteMany({
          user: req.query.user
        },function(err){
          if(err){
            console.log(err)
          }
        })
        db.Student.find(function(err, data){
          if(err){
            console.log(err)
          }else{
            res.send(data)
          }
        })
      }
    })
  }else if(req.query.collection == 'question'){
    db.Question.deleteOne({
      _id: req.query.id
    },function(err){
      if(err){
        console.log(err)
      }else{
        db.Question.find({'type': req.query.type, 'questiontype': req.query.questiontype},function(err, data){
          if(err){
            console.log(err)
          }else{
            res.send(data)
          }
        })
      }
    })
  }
})

router.get('/update',function(req, res){
  if(req.query.collection == 'teacher'){
    db.Teacher.updateOne({_id: req.query.id}, {
      user: req.query.user,
      password: req.query.password,
      name: req.query.name,
      sex: req.query.sex
    },function(err, data){
      if(err){
        console.log(err)
      }else{
        db.Teacher.find(function(err, data){
          if(err){
            console.log(err)
          }else{
            res.send(data)
          }
        })
      }
    })
  }else if(req.query.collection == 'student'){
    db.Student.updateOne({_id: req.query.id}, {
      user: req.query.user,
      password: req.query.password,
      name: req.query.name,
      sex: req.query.sex
    },function(err, data){
      if(err){
        console.log(err)
      }else{
        db.Student.find(function(err, data){
          if(err){
            console.log(err)
          }else{
            res.send(data)
          }
        })
      }
    })
  }else if(req.query.collection == 'question'){
    db.Question.updateOne({_id: req.query.id}, {
      question: req.query.question,
      answer: req.query.answer,
      A: req.query.A,
      B: req.query.B,
      C: req.query.C,
      D: req.query.D
    },function(err, data){
      if(err){
        console.log(err)
      }else{
        db.Question.find({'type': req.query.type, 'questiontype': req.query.questiontype},function(err, data){
          if(err){
            console.log(err)
          }else{
            res.send(data)
          }
        })
      }
    })
  }
})

router.get('/exam',function(req,res){
  let arr = []
  db.Question.aggregate([
    {$match: { 'questiontype': '单选题', 'type': req.query.exam }},
    {$sample: { size: 5 }}
  ]).then(function(data){
    arr.push(...data)
    db.Question.aggregate([
      {$match: { 'questiontype': '多选题', 'type': req.query.exam }},
      {$sample: { size: 2 }}
    ]).then(function(data){
      arr.push(...data)
      db.Question.aggregate([
        {$match: { 'questiontype': '填空题', 'type': req.query.exam }},
        {$sample: { size: 2 }}
      ]).then(function(data){
        arr.push(...data)
        db.Question.aggregate([
          {$match: { 'questiontype': '问答题', 'type': req.query.exam }},
          {$sample: { size: 1 }}
        ]).then(function(data){
          arr.push(...data)
          db.Question.aggregate([
            {$match: { 'questiontype': '编程题', 'type': req.query.exam }},
            {$sample: { size: 1 }}
          ]).then(function(data){
            arr.push(...data)
            res.send(arr)
          })
        })
      })
    })
  })
})

router.get('/grade',function(req,res){
  if(req.query.status == 'teacher'){
    db.Grade.find(function(err,data){
      if(err){
        console.log(err)
      }else{
        res.send(data)
      }
    })
  }else if(req.query.status == 'student'){
    db.Grade.find({'user': req.query.user},function(err,data){
      if(err){
        console.log(err)
      }else{
        res.send(data)
      }
    })
  }else{
    db.Grade.create({
      user: req.query.user,
      name: req.query.name,
      type: req.query.type,
      grade: req.query.grade
    },function(err, ret){
      if(err){
        console.log(err)
      }else{
        res.send('success')
      }
    })
  }
})

router.get('/findgrade',function(req,res){
  if(req.query.item2 === "uesr"){
    db.Grade.find({'user': req.query.item1},function(err,data){
      if(err){
        console.log(err)
      }else{
        res.send(data)
      }
    })
  }else if(req.query.item2 === "name"){
    db.Grade.find({'name': req.query.item1},function(err,data){
      if(err){
        console.log(err)
      }else{
        res.send(data)
      }
    })
  }else{
    db.Grade.find(function(err,data){
      if(err){
        console.log(err)
      }else{
        res.send(data)
      }
    })
  }
})

module.exports = router