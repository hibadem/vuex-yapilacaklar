<template>
  <div>
      <Navbar />
      <Yapilacaklar />
  </div>
</template>

<script>
import Yapilacaklar from '../components/Yapilacaklar.vue';
import Navbar from '../components/Navbar.vue';
export default {
 name:'anasayfa',
 components:{
   Yapilacaklar,
   Navbar
 }
}
</script>

<style>

</style>