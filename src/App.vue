<template>
  <Nav :class="{ normal: (this.$route.name != 'home') }"/>
  <router-view/>
</template>

<script>
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.mount('#app')

import Nav from '@/components/Nav.vue';
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
