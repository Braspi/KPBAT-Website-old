<template>
  <main>
    <div class="category">
      <div class="top">
          <p class="title">{{ $t("main.sections.s2.title") }}</p>
          <p class="desc">{{ $t("main.sections.s2.desc") }}</p>
      </div>
      <section class="container">
          <template v-for="category in categories" :key="category.id">
            <router-link :to="`/category`"> 
              <p>{{ category.name }}</p>
              <img :src="category.miniature" alt="">
            </router-link>
          </template>
      </section>
    </div>
  </main>
</template>


<style scoped src="@/assets/style/views/gallery/category.less" lang="less">
</style>

 <script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
    }
  },
  created() {
    axios.get("/api/categories").then((res) => {
      this.categories = res.data;
    }).catch((e) => {
      console.error(e);
    })
  }
}
</script> 
