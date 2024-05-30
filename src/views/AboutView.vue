<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-2xl">
      <h1 class="text-2xl py-3 sm:text-[40px] text-sky-950 text-center">Students Registration Data</h1>
      <h2 class="text-center text-lg text-pink-500 my-3">{{ isEditMode ? 'Edit' : 'Add' }} Student</h2>
      <form @submit.prevent="FormSubmit" class="bg-white p-6 rounded-lg shadow-lg">
        <ul class="space-y-4">
          <li class="flex flex-col items-center">
            <label for="name" class="text-lg sm:text-[25px]">Name</label>
            <input type="text" v-model="student.name" placeholder="Enter Name" class="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </li>
          <li class="flex flex-col items-center">
            <label for="surname" class="text-lg sm:text-[25px]">Surname</label>
            <input type="text" v-model="student.surname" placeholder="Enter Surname" class="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </li>
          <li class="flex flex-col items-center">
            <label for="NIN" class="text-lg sm:text-[25px]">National ID</label>
            <input type="text" v-model="student.idNum" placeholder="Enter ID Number" class="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </li>
          <li class="flex flex-col items-center">
            <label for="Teacher Number" class="text-lg sm:text-[25px]">Student Number</label>
            <input type="text" v-model="student.studentNum" placeholder="+2340000000000" class="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </li>
          <li class="flex flex-col items-center">
            <label for="Date of Birth" class="text-lg sm:text-[25px]">Date of Birth</label>
            <input type="date" @change="Checkage" v-model="student.dob" placeholder="00/00/00" class="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </li>
        </ul>
        <div class="flex justify-center mt-4">
          <button type="submit" class="rounded-lg bg-sky-700 py-2 px-5 text-white">{{ isEditMode ? 'Update' : 'Add' }} Student</button>
        </div>
      </form>
      <h1 v-if="error" class="text-red-700 text-center mt-4">{{ error }}</h1>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

import {ref} from 'vue'


export default {
  name: 'about',
  props:['studentNum'],
  components: {
 
  },
  emits:['formSubmitting'],
  data(){
    return{
     student:[{ 
      name:'',
      surname:'',
      studentNum:'',
      dob:'',
      idNum:''
    }],
    error:'',
    isEditMode:false,
  }
  
  },
  computed:{
    ...mapGetters(['getStudentNum'])
  },
  methods:{
    ...mapActions(['addstudents','editStudent']),
    Verifyage(){
      const daob= new Date(this.student.dob)
      const agediff = Date.now() - daob.getTime();
      const ageDate = new Date(agediff);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);
      if (age < 22){
        this.error='Age must be minimum of 21 years old'
      }
      else{
        this.error=''
      }
    },
    FormSubmit(){
    this.Verifyage();
    if(this.error){
      return ;
    }
    if(this.isEditMode){
      this.editTeacher(this.student)
    }
    else{
    this.$emit('formSubmitting',this.student)
    }
    this.$router.push({ name: 'StudentList' });
  }
  },
  created(){
    if (this.studentNum){
      const existingStudent= this.getStudentNum(this.studentNum)
      if(existingStudent){
        this.student = {...existingStudent};
        this.isEditMode = true;

      }
    }
  }
  
}
</script>
