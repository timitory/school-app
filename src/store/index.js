// src/store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    teachers: [],
    students: [],
  },
  mutations: {
    ADD_TEACHER(state, teacher) {
      state.teachers.push(teacher);
      console.log(state.teachers)
    },
    ADD_STUDENT(state, student) {
      state.students.push(student);
      console.log(state.students)
    },
    EDIT_TEACHER(state, updatedTeacher) {
      const index = state.teachers.findIndex(t => t.teacherNumber === updatedTeacher.teacherNumber);
      if (index !== -1) {
        state.teachers.splice(index, 1, updatedTeacher);
      }
    },
    EDIT_STUDENT(state, updatedStudent) {
      const index = state.students.findIndex(t => t.studentNumber === updatedStudent.studentNumber);
      if (index !== -1) {
        state.students.splice(index, 1, updatedStudent);
      }
    },
    DELETE_TEACHER(state, teacherNumber) {
      state.teachers = state.teachers.filter(t => t.teacherNumber !== teacherNumber);
    },
    DELETE_STUDENT(state, studentNumber) {
      state.students = state.students.filter(t => t.studentNumber !== studentNumber);
    },
  },
  
  actions: {
    addTeacher({ commit }, teacher) {
      commit('ADD_TEACHER', teacher);
    },
    editTeacher({ commit }, updatedTeacher) {
      commit('EDIT_TEACHER', updatedTeacher);
    },
    deleteTeacher({ commit }, teacherNumber) {
      commit('DELETE_TEACHER', teacherNumber);
    },
    addStudent({ commit }, student) {
      commit('ADD_STUDENT', student);
    },
    editStudent({ commit }, updatedStudent) {
      commit('EDIT_STUDENT', updatedStudent);
    },
    deleteStudent({ commit }, studentNumber) {
      commit('DELETE_STUDENT', studentNumber);
    },
  },
  getters: {
    allTeachers: state => state.teachers,
    getTeacherByNumber: state => teacherNumber => state.teachers.find(t => t.teacherNumber === teacherNumber),
    allStudents: state => state.students,
    getStudentByNumber: state => studentNumber => state.students.find(t => t.studentNumber === studentNumber),
  },
});

export default store;

