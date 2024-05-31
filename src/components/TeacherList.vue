<template>
    <div class="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div class="w-full max-w-4xl">
        <h2 class="text-center text-lg text-sky-950 mb-6">Teacher List</h2>
        <div class="overflow-x-auto bg-white shadow-md rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">National ID</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Surname</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher Number</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="teacher in teachers" :key="teacher.teacherNumber">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ teacher.nationalId }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ teacher.title }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ teacher.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ teacher.surname }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ teacher.dob }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ teacher.teacherNumber }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ teacher.salary }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button @click="editTeacher(teacher.teacherNumber)" class="bg-sky-700 text-white px-4 py-2 rounded-lg mr-2">Edit</button>
                  <button @click="deleteTeacher(teacher.teacherNumber)" class="bg-red-700 text-white px-4 py-2 rounded-lg">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Add New Teacher Link -->
        <div class="flex justify-center mt-6">
          <router-link to="/add-teacher" class="bg-sky-700 text-white px-5 py-2 rounded-lg">Add New Teacher</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['allTeachers']),
      teachers(){
        return this.$store.getters.allTeachers
      }
    },
    methods: {
      ...mapActions(['deleteTeacher']),
      editTeacher(teacherNumber) {
        this.$router.push({ name: 'EditTeacher', params: { teacherNumber } });
      },
    },
  };
  </script>
  