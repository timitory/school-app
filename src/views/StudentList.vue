<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100">
    
    <AboutView @formSubmitting="SubmitHandler"/>

   
    <div class="w-full max-w-2xl mt-6">
      <div v-for="student in students" :key="student.idNum" class="bg-white shadow-md rounded-lg p-4 mb-4">
        <hr class="bg-gray-500 mb-4">
        <div class="space-y-2">
          <h1 class="text-lg"><strong>Name:</strong> {{ student.name }}</h1>
          <h1 class="text-lg"><strong>Surname:</strong> {{ student.surname }}</h1>
          <h1 class="text-lg"><strong>ID:</strong> {{ student.studentNum }}</h1>
          <h1 class="text-lg"><strong>Date Of Birth:</strong> {{ student.dob }}</h1>
          <h1 class="text-lg"><strong>NIN:</strong> {{ student.idNum }}</h1>
        </div>
        <div class="flex justify-center gap-4 mt-4">
          <button @click="editStudent(student.studentNum)" class="rounded-lg bg-sky-700 py-2 px-8 text-white text-lg">EDIT</button>
          <button @click="deleteStudent(student.studentNum)" class="rounded-lg bg-red-700 py-2 px-8 text-white text-lg">DELETE</button>
        </div>
      </div>
      <router-link to="/aboutview" class="block text-center mt-4 mb-4 rounded-lg bg-sky-700 py-2 px-5 text-white">Add New Student</router-link>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import AboutView from "./AboutView.vue";
export default{
    name:'StudentList',
    components:{
        AboutView,
    },
    computed: {
        ...mapState(['teachers','students']),
        ...mapGetters(['getStudent']),
   students(){
    return this.$store.getters.getStudent
   }
      
 
  },
    methods:{
        ...mapActions(['addstudents','deleteStudent']),
        SubmitHandler(student) {
      this.addstudents(student);
    },
    editStudent(studentNum) {
        this.$router.push({ name: 'EditStudent', params: { studentNum } });
      },
   
    
    }

}

</script>