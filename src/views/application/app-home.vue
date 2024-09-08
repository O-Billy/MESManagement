<template>
  <div class="app-home flex">
    <div class="sidebar w-[12.5%] bg-transparent"><sidebar_ /></div> 
<<<<<<< HEAD
    <div class="navbar w-[88%] bg-transparent">
      <div class="h-[86px]">
        <narbar_ />
      </div>
      <div class="h-[86%] bg-[#FBF7F4] ">
=======
    <div class="navbar w-[88%] bg-transparent 
                lg:ml-[6%]
                ">
      <div class="h-[86px]">
        <narbar_ />
      </div>
      <div class="h-[86%] bg-[#FBF7F4] lg:mt-[-25px]">
>>>>>>> wfh
        <body_ />
      </div>
    </div> 
  </div>
</template>

<script>
import sidebar_ from '../../components/sidebar.vue';
import narbar_ from '../../components/narbar.vue';
import body_ from '../../components/body.vue';
<<<<<<< HEAD
=======

>>>>>>> wfh
export default {
  name:'App',
  components:{
    sidebar_,
    narbar_,
    body_,
  }
}
</script>
<style scoped>
</style>