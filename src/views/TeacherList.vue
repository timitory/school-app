<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100">
    
    <HomeView @FormValid="handleSubmit" />
    
  
    <div class="w-full max-w-2xl mt-6">
     
      <div v-for="teacher in teachers" :key="teacher.idNum" class="bg-white shadow-md rounded-lg p-4 mb-4">
        <hr class="bg-gray-500 mb-4">
        <div class="space-y-2">
          <h1 class="text-lg"><strong>Title:</strong> {{ teacher.title }}</h1>
          <h1 class="text-lg"><strong>Name:</strong> {{ teacher.name }}</h1>
          <h1 class="text-lg"><strong>Surname:</strong> {{ teacher.surname }}</h1>
          <h1 class="text-lg"><strong>Salary:</strong> {{ teacher.salary }}</h1>
          <h1 class="text-lg"><strong>Id:</strong> {{ teacher.teacherNum }}</h1>
          <h1 class="text-lg"><strong>Date Of Birth:</strong> {{ teacher.dob }}</h1>
          <h1 class="text-lg"><strong>NIN:</strong> {{ teacher.idNum }}</h1>
        </div>
        <div class="flex justify-center gap-4 mt-4">
          <button @click="editTeacher(teacher.teacherNum)" class="rounded-lg bg-sky-700 py-2 px-8 text-white text-lg">EDIT</button>
          <button @click="deleteTeacher(teacher.teacherNum)" class="rounded-lg bg-red-700 py-2 px-8 text-white text-lg">DELETE</button>
        </div>
      </div>
      <router-link to="/homeview" class="block text-center mt-4 mb-4 rounded-lg bg-sky-700 py-2 px-5 text-white">Add New Teacher</router-link>
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
    data(){
      return{
        showForm:false,
        selectedTeacherNum:null
      }
    },
    computed: {
        ...mapState(['teachers']),
   teachers(){
    return this.$store.getters.getTeacher
   }
      
 
  },
  methods:{
        ...mapActions(['addteachers','deleteTeacher']),
        handleSubmit(teach) {
      this.addteachers(teach);
    },
    editTeacher(teacherNum) {
        this.$router.push({ name: 'EditTeacher', params: { teacherNum } });
      },
   
    
    }

//     created() {
//     this.teachers = this.getTeacher;
//   }
}

</script>