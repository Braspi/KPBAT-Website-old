<template>
  <main>
    <div class="category">
      <div class="top">
          <p class="title">{{ $t("main.sections.s2.title") }}</p>
          <p class="desc">{{ $t("main.sections.s2.desc") }}</p>
      </div>
      <!-- <section>
        .
      </section> -->
    </div>
  </main>
</template>


<style scoped src="@/assets/style/views/gallery/category.less" lang="less">
</style>

 <script>
    export default {
      methods: {
        login() {
          this.$router.push("/{{name}}")
        }
      }
    }

  // import axios from "axios";

  // export default {
  //   name: "CategoryView",
  //   data: ()=> {
  //     return {
  //       images: {}
  //     }
  //   },

  //   created() {
  //     axios.get("https://api-v4.yshop.pl/shops/1/products/")
  //         .then((response) => {
  //           this.images = response.data
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //   }
  // }
</script> 
