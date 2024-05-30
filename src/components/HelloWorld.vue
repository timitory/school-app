<template>
  <div class=" bg-white">
    <div class="text-center">
      <h1 class="text-gray-800 text-lg ">Hello!  You are welcome on board.It's Nice to have You here.</h1>
      <h1 class="text-gray-800 text-lg">Kindly Select the Category Below to Proceed</h1>
      
    </div>
    
      <div class="flex items-center justify-center gap-8 bg-white my-3 mx-4">
        <div class="rounded-lg bg-sky-700 py-2 px-5  text-white text-center">
            <RouterLink to="/teacher" class="text-lg ">Teacher Registration</RouterLink>
        </div>
        <div class="rounded-lg bg-sky-700 py-2 px-5  text-white text-center ">
            <RouterLink to="/student" class="text-lg">Student Registration</RouterLink>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
