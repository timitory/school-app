import { createStore } from 'vuex'

export default createStore({
  state: {
   teachers:[],
   students:[]

  },
  getters: {
    getTeacher:state=> state.teachers,
    getStudent:state=> state.students,
    getTeacherNum:state=>(teacherNum)=>state.teachers.filter(tNum => tNum.teacherNum ===teacherNum),
    getStudentNum:state=>(studentNum)=>state.students.filter(sNum => sNum.studentNum ===studentNum),
     

    
  },
  mutations: {
    UpdateTeacher(state,teach){ 
      state.teachers.push(teach)
      console.log(state.teachers)
    },
    UpdateStudent(state,student){ 
      state.students.push(student)
      console.log(state.students)
    },
    EditedTeacher(state,updatedteacher){
      const index = state.teachers.findIndex(tind => tind.teacherNum === updatedteacher.teacherNum)
      if(index !== -1){
        state.teachers.splice(index,1,updatedteacher)
      }
      
    },
    EditedStudent(state,updatedstudent){
      const index = state.students.findIndex(sind => sind.studentNum === updatedstudent.studentNum)
      if(index !== -1){
        state.students.splice(index,1,updatedstudents)
      }
      
    },
    DeleteStudent(state,studentNum){
      state.students=state.students.filter(s =>s.studentNum !==studentNum)
    },
    DeleteTeacher(state,teacherNum){
      state.teachers = state.teachers.filter(t=>t.teacherNum !==teacherNum);
    }
    
    
  },
  actions: {
    addteachers({commit},teach){
      commit('UpdateTeacher',teach)
      
    },
    addstudents({commit},student){
      commit('UpdateStudent',student)
    },editTeacher({commit},updatedteacher){
      commit('EditedTeacher',updatedteacher)
    },
    editStudent({commit},updatedstudent){
      commit('EditedStudent',updatedstudent)
    },
    deleteStudent({commit},studentNum){
      commit('DeleteStudent',studentNum)
    },
    deleteTeacher({commit},teacherNum){
      commit('DeleteTeacher',teacherNum)
    }
  },
  modules: {
  }
})
