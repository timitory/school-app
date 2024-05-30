import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeacherList from '../views/TeacherList'
import HelloWorld from '../components/HelloWorld.vue'
import StudentList from '../views/StudentList.vue'
import Displaydata from '../views/Displaydata.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/teacher',
    name: 'TeacherList',
    component: TeacherList
  },
  {
    path: '/homeview',
    name: 'homeview',
    component: HomeView
  },
  {
    path: '/aboutview',
    name: 'Aboutview',
    component: AboutView
  },
  
  {
    path: '/edit/:teacherNum',
    name: 'EditTeacher',
    component: HomeView,
    props:true
  },
  {
    path: '/edit/:studentNum',
    name: 'EditStudent',
    component: AboutView,
    props:true
  },
  
  {
    path: '/student',
    name: 'StudentList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/StudentList.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
