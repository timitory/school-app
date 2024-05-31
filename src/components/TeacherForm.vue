<template>
    <div class="flex flex-col items-center min-h-screen bg-gray-100">
      
      <div class="w-full max-w-2xl">
        <h2 class="text-center text-lg text-pink-500 my-3">{{ isEditMode ? 'Edit' : 'Add' }} Teacher</h2>
        
       
        <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-lg">
          <div class="space-y-4">
            <div class="flex flex-col items-center">
              <label for="nationalId" class="text-lg sm:text-[25px]">National ID:</label>
              <input type="text" v-model="teacher.nationalId" placeholder="Enter National ID" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
            
            <div class="flex flex-col items-center">
              <label for="title" class="text-lg sm:text-[25px]">Title:</label>
              <select v-model="teacher.title" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                <option v-for="option in titles" :key="option" :value="option">{{ option }}</option>
              </select>
            </div>
  
            <div class="flex flex-col items-center">
              <label for="name" class="text-lg sm:text-[25px]">Name:</label>
              <input type="text" v-model="teacher.name" placeholder="Enter Name" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
  
            <div class="flex flex-col items-center">
              <label for="surname" class="text-lg sm:text-[25px]">Surname:</label>
              <input type="text" v-model="teacher.surname" placeholder="Enter Surname" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
  
            <div class="flex flex-col items-center">
              <label for="dob" class="text-lg sm:text-[25px]">Date of Birth:</label>
              <input type="date" @change="VerifyAge" v-model="teacher.dob" placeholder="Select Date of Birth" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
  
            <div class="flex flex-col items-center">
              <label for="teacherNumber" class="text-lg sm:text-[25px]">Teacher Number:</label>
              <input @input="formatTeacherNumber" type="text" v-model="teacher.teacherNumber" placeholder="Enter Teacher Number" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
  
            <div class="flex flex-col items-center">
              <label for="salary" class="text-lg sm:text-[25px]">Salary:</label>
              <input @input="formatSalary" type="text" v-model="teacher.salary" placeholder="Enter Salary" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>
  
          <div class="flex justify-center mt-4">
            <button type="submit" class="rounded-lg bg-sky-700 py-2 px-5 text-white">{{ isEditMode ? 'Update' : 'Add' }} Teacher</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    props: ['teacherNumber','allTeachers'],
    data() {
      return {
        teacher: {
          nationalId: '',
          title: '',
          name: '',
          surname: '',
          dob: '',
          teacherNumber: '',
          salary: '',
        },
        titles: ['Mr', 'Mrs', 'Miss', 'Dr', 'Prof'],
        isEditMode: false,
        error: ''
      };
    },
    computed: {
      ...mapGetters(['getTeacherByNumber']),
    },
    methods: {
      ...mapActions(['addTeacher', 'editTeacher']),
      Verifyage() {
        const dob = new Date(this.teacher.dob);
        const ageDiff = Date.now() - dob.getTime();
        const ageDate = new Date(ageDiff);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
        if (age < 21) {
          this.error = 'Age must be a minimum of 21 years old';
          return false;
        } else {
          this.error = '';
          return true;
        }
      },
      handleSubmit() {
        if (!this.Verifyage()) {
          alert(this.error);
          return;
        }
        if (this.isEditMode) {
          this.editTeacher(this.teacher);
        } else {
          this.addTeacher(this.teacher);
        }
        this.$router.push({ name: 'TeacherList' });
      },
      formatTeacherNumber() {
       
        this.teacher.teacherNumber = this.teacher.teacherNumber.replace(/\D/g, '');
  
       
        if (this.teacher.teacherNumber.length > 11) {
          this.teacher.teacherNumber = this.teacher.teacherNumber.slice(0, 11);
        }
      },
      formatSalary() {
        
        let salaryStr = this.teacher.salary.replace(/[^0-9.]/g, '');
  
        
        const [integerPart, decimalPart = ''] = salaryStr.split('.');
  
      
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
        
        let formattedDecimalPart = decimalPart;
        if (formattedDecimalPart.length === 0) {
          formattedDecimalPart = '00';
        } else if (formattedDecimalPart.length === 1) {
          formattedDecimalPart = `${formattedDecimalPart}0`;
        } else if (formattedDecimalPart.length > 2) {
          formattedDecimalPart = formattedDecimalPart.slice(0, 2);
        }
        this.teacher.salary = `$${formattedIntegerPart}.${formattedDecimalPart}`;
      },
    },
    created() {
      if (!this.Verifyage()) {
        alert(this.error);
        return;
      }
      if (this.teacherNumber) {
        const existingTeacher = this.getTeacherByNumber(this.teacherNumber);
        if (existingTeacher) {
          this.teacher = { ...existingTeacher };
          this.isEditMode = true;
        }
      }
    },
  };
  </script>
  
  <style scoped>
  input {
    margin-bottom: 1em;
  }
  </style>
  