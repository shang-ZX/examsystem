const Login = () => import('../views/Login')
const HomeAdmin = () => import('../views/HomeAdmin')
const HomeTeacher = () => import('../views/HomeTeacher')
const HomeStudent = () => import('../views/HomeStudent')
const TeacherTable = () => import('../components/TeacherTable')
const StudentTable = () => import('../components/StudentTable')
const QuestionTableC = () => import('../components/QuestionTableC')
const QuestionTableJava = () => import('../components/QuestionTableJava')
const QuestionI = () => import('../components/QuestionI')
const QuestionII = () => import('../components/QuestionII')
const QuestionIII = () => import('../components/QuestionIII')
const QuestionIIII = () => import('../components/QuestionIIII')
const QuestionIIIII = () => import('../components/QuestionIIIII')
const GradeTable = () => import('../components/GradeTable')
const ExamC = () => import('../components/ExamC')
const ExamJava = () => import('../components/ExamJava')

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: HomeAdmin,
    children: [
      {
        path: 'teacher',
        component: TeacherTable
      },
      {
        path: 'student',
        component: StudentTable
      },
      {
        path: 'question-C',
        component: QuestionTableC,
        children: [
          {
            path: 'I',
            component: QuestionI
          },
          {
            path: 'II',
            component: QuestionII
          },
          {
            path: 'III',
            component: QuestionIII
          },
          {
            path: 'IIII',
            component: QuestionIIII
          },
          {
            path: 'IIIII',
            component: QuestionIIIII
          }
        ]
      },
      {
        path: 'question-Java',
        component: QuestionTableJava,
        children: [
          {
            path: 'I',
            component: QuestionI
          },
          {
            path: 'II',
            component: QuestionII
          },
          {
            path: 'III',
            component: QuestionIII
          },
          {
            path: 'IIII',
            component: QuestionIIII
          },
          {
            path: 'IIIII',
            component: QuestionIIIII
          }
        ]
      }
    ]
  },
  {
    path: '/teacher',
    component: HomeTeacher,
    children: [
      {
        path: 'student',
        component: StudentTable
      },
      {
        path: 'grade',
        component: GradeTable
      },
      {
        path: 'question-C',
        component: QuestionTableC,
        children: [
          {
            path: 'I',
            component: QuestionI
          },
          {
            path: 'II',
            component: QuestionII
          },
          {
            path: 'III',
            component: QuestionIII
          },
          {
            path: 'IIII',
            component: QuestionIIII
          },
          {
            path: 'IIIII',
            component: QuestionIIIII
          }
        ]
      },
      {
        path: 'question-Java',
        component: QuestionTableJava,
        children: [
          {
            path: 'I',
            component: QuestionI
          },
          {
            path: 'II',
            component: QuestionII
          },
          {
            path: 'III',
            component: QuestionIII
          },
          {
            path: 'IIII',
            component: QuestionIIII
          },
          {
            path: 'IIIII',
            component: QuestionIIIII
          }
        ]
      }
    ]
  },
  {
    path: '/student',
    component: HomeStudent,
    children: [
      {
        path: 'grade',
        component: GradeTable
      },
      {
        path: 'C',
        component: ExamC
      },
      {
        path: 'Java',
        component: ExamJava
      }
    ]
  }
]

export default routes