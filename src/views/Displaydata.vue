<template>
    <div>

        <div class="flex gap-1" v-for="teacher in teachers" :key="teacher.idNum">
        <h1>Name:{{ teacher.name }}</h1>
        <h1>Surname:{{ teacher.surname }}</h1>
        <h1>Salary:{{ teacher.salary }}</h1>
        <h1>teacherNum:{{teacher.teacherNum }}</h1>
        <h1>Name:{{ teacher.dob }}</h1>
        <h1>Name:{{ teacher.idNum }}</h1>
        <h1>Name:{{ teacher.title }}</h1>
        
      <div class="flex items-center justify-center gap-8 bg-white my-3">
        <div class="rounded-lg bg-sky-700 py-2 px-5  text-white ">
            <button @click="editTeacher(teacher.teacherNum)" class="text-lg">EDIT</button>
        </div>
        <div class="rounded-lg bg-sky-700 py-2 px-5  text-white ">
            <button   class="text-lg">DELETE</button>
        </div>
      </div>
        </div>
    </div>

</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import HomeView from './HomeView.vue';
export default{
    name:'TeacherList',
    components:{
        HomeView,
    },
    computed: {
        ...mapState(['teachers']),
   teachers(){
    return this.$store.getters.getTeacher
   }
      
 
  },
    
//     created() {
//     this.teachers = this.getTeacher;
//   }
}

</script>