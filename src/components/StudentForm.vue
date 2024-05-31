<template>
    <div class="flex flex-col items-center min-h-screen bg-gray-100">
      <div class="w-full max-w-2xl">
        <h2 class="text-center text-lg text-pink-500 my-3">{{ isEditMode ? 'Edit' : 'Add' }} Student</h2>
  
        <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-lg">
          <div class="space-y-4">
            <div class="flex flex-col items-center">
              <label for="nationalId" class="text-lg sm:text-[25px]">National ID:</label>
              <input type="text" v-model="student.nationalId" placeholder="Enter National ID" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
  
            <div class="flex flex-col items-center">
              <label for="name" class="text-lg sm:text-[25px]">Name:</label>
              <input type="text" v-model="student.name" placeholder="Enter Name" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
  
            <div class="flex flex-col items-center">
              <label for="surname" class="text-lg sm:text-[25px]">Surname:</label>
              <input type="text" v-model="student.surname" placeholder="Enter Surname" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
  
            <div class="flex flex-col items-center">
              <label for="dob" class="text-lg sm:text-[25px]">Date of Birth:</label>
              <input type="date" @change="Checkage" v-model="student.dob" placeholder="Select Date of Birth" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
  
            <div class="flex flex-col items-center">
              <label for="teacherNumber" class="text-lg sm:text-[25px]">Student Number:</label>
              <input type="text" v-model="student.studentNumber" placeholder="Enter Student Number" class="mt-2 w-full max-w-md px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
          </div>
  
          <div class="flex justify-center mt-4">
            <button type="submit" class="rounded-lg bg-sky-700 py-2 px-5 text-white">{{ isEditMode ? 'Update' : 'Add' }} Student</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    props: ['studentNumber', 'allStudents'],
    data() {
      return {
        student: {
          nationalId: '',
          name: '',
          surname: '',
          dob: '',
          studentNumber: '',
        },
        isEditMode: false,
        error: '',
      };
    },
    computed: {
      ...mapGetters(['getStudentByNumber']),
    },
    methods: {
      ...mapActions(['addStudent', 'editStudent']),
      Checkage() {
        const dob = new Date(this.student.dob);
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
        if (!this.Checkage()) {
          alert(this.error);
          return;
        }
  
        if (this.isEditMode) {
          this.editStudent(this.student);
        } else {
          this.addStudent(this.student);
        }
  
        this.$router.push({ name: 'StudentList' });
      },
    },
    created() {
      if (this.studentNumber) {
        const existingStudent = this.getStudentByNumber(this.studentNumber);
        if (existingStudent) {
          this.student = { ...existingStudent };
          this.isEditMode = true;
        }
      }
    },
  };
  </script>
  