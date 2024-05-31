<template>
    <div class="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div class="w-full max-w-4xl">
        <h2 class="text-center text-lg text-sky-950 mb-6">Student  List</h2>
        <div class="overflow-x-auto bg-white shadow-md rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">National ID</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Surname</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Number</th>
                
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="student in students" :key="student.studentNumber">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ student.nationalId }}</td>
               
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ student.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ student.surname }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ student.dob }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ student.studentNumber }}</td>
                
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button @click="editStudent(student.studentNumber)" class="bg-sky-700 text-white px-4 py-2 rounded-lg mr-2">Edit</button>
                  <button @click="deleteStudent(student.studentNumber)" class="bg-red-700 text-white px-4 py-2 rounded-lg">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
       
        <div class="flex justify-center mt-6">
          <router-link to="/add-student" class="bg-sky-700 text-white px-5 py-2 rounded-lg">Add New Student</router-link>
        </div>
      </div>
    </div>
  </template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['allStudents']),
    students(){
      return this.$store.getters.allStudents
    }
  },
  methods: {
    ...mapActions(['deleteStudent']),
    editStudent(studentNumber) {
      this.$router.push({ name: 'EditStudent', params: { studentNumber } });
    },
  },
};
</script>
  