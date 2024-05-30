<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100">
    
    <div class="w-full max-w-2xl">
      <h1 class="text-2xl py-3 sm:text-[40px] text-sky-950 text-center">Teachers Registration Data</h1>
      <h2 class="text-center text-lg text-pink-500 my-3">{{ isEditMode ? 'Edit' : 'Add' }} Teacher</h2>
      
     
      <form @submit.prevent="SubmitForm" class="bg-white p-6 rounded-lg shadow-lg">
        <ul class="space-y-4">
          <li class="flex flex-col items-center">
            <h1 class="text-lg sm:text-[25px]">Choose Title:</h1>
            <select v-model="teacher.title" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
              <option disabled value="">Choose Title:</option>
              <option v-for="title in titles" :key="title" :value="title">{{ title }}</option>
            </select>
          </li>

          <li class="flex flex-col items-center">
            <label for="name" class="text-lg sm:text-[25px]">Name</label>
            <input type="text" v-model="teacher.name" placeholder="Enter Name" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </li>

          <li class="flex flex-col items-center">
            <label for="surname" class="text-lg sm:text-[25px]">Surname</label>
            <input type="text" v-model="teacher.surname" placeholder="Enter Surname" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </li>

          <li class="flex flex-col items-center">
            <label for="NIN" class="text-lg sm:text-[25px]">National ID</label>
            <input type="text" v-model="teacher.idNum" placeholder="Enter ID Number" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </li>

          <li class="flex flex-col items-center">
            <label for="salary" class="text-lg sm:text-[25px]">Salary</label>
            <input type="text" v-model="teacher.salary" placeholder="Enter Salary" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </li>

          <li class="flex flex-col items-center">
            <label for="Teacher Number" class="text-lg sm:text-[25px]">Teacher Number</label>
            <input type="text" v-model="teacher.teacherNum" placeholder="+2340000000000" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </li>

          <li class="flex flex-col items-center">
            <label for="Date of Birth" class="text-lg sm:text-[25px]">Date of Birth</label>
            <input type="date" @change="Checkage" v-model="teacher.dob" placeholder="00/00/00" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </li>
        </ul>

        <div class="flex justify-center mt-4">
          <button type="submit" class="rounded-lg bg-sky-700 py-2 px-5 text-white">{{ isEditMode ? 'Update' : 'Add' }} Teacher</button>
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
  name: 'HomeView',
  props:['teacherNum'],
  components: {
 
  },
  emits:['FormValid'],
  data(){
    return{
     teacher:[{ 
      name:'',
      surname:'',
      title:'',
      teacherNum:'',
      dob:'',
      salary:'',
      idNum:''
    }],
    error:'',
    titles:['Mr','Mrs','Miss','Dr','Prof'],
    isEditMode:false
  }
  
  },
  computed:{
    ...mapGetters(['getTeacherNum'])
  },
  methods:{
    ...mapActions(['addteachers','editTeacher']),
    Checkage(){
      const daob= new Date(this.teacher.dob)
      const agediff = Date.now() - daob.getTime();
      const ageDate = new Date(agediff);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);
      if (age < 21){
        this.error= alert('Age must be minimum of 21 years old')
      }
      else{
        this.error=''
      }
    },
    SubmitForm(){
    this.Checkage();
    if(this.error){
      return ;
    }
    if(this.isEditMode){
      this.editTeacher(this.teacher)
    }
    else{
      this.$emit('FormValid',this.teacher)
    }
    this.$router.push({ name: 'TeacherList' });
    
   
   
  }
  },
  created(){
    if (this.teacherNum){
      const existingTeacher= this.getTeacherNum(this.teacherNum)
      if(existingTeacher){
        this.teacher = {...existingTeacher};
        this.isEditMode = true;

      }
    }
  }
  
}
</script>
