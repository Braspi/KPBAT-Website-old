<template>
  <Nav/>
  <router-view/>
  <Footer/>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
    Nav,Footer
  }
}
</script>