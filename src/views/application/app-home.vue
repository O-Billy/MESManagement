<template>
  <div class="app-home flex">
    <div class="sidebar w-[12.5%] bg-transparent"><sidebar_ /></div> 
    <div class="navbar w-[88%] h-[86px] bg-transparent"><narbar_ /></div> 
  </div>
</template>

<script>
import sidebar_ from '../../components/sidebar.vue';
import narbar_ from '../../components/narbar.vue';
export default {
  name:'App',
  components:{
    sidebar_,
    narbar_,
  }
}
</script>
<style scoped>
</style>