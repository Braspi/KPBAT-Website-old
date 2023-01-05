<template>
  <Nav :class="{ normal: (this.$route.name != 'home') }"/>
  <router-view/>
</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
