// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import TeacherList from '../components/TeacherList.vue';
import TeacherForm from '../components/TeacherForm.vue';
import StudentForm from '../components/StudentForm.vue';
import StudentList from '../components/StudentList.vue';

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/teacher', name: 'TeacherList', component: TeacherList },
  { path: '/student', name: 'StudentList', component: StudentList },
  { path: '/add-teacher', name: 'AddTeacher', component: TeacherForm },
  { path: '/add-student', name: 'AddStudent', component: StudentForm },
  { path: '/edit-teacher/:teacherNumber', name: 'EditTeacher', component: TeacherForm, props: true },
  { path: '/edit-student/:studentNumber', name: 'EditStudent', component: StudentForm, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
