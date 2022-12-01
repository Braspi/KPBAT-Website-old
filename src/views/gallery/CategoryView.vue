<template lang="html">
    <div class="category">'
      <p v-for="image in images" :key="image.id"> {{image.name}} </p>
    </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "CategoryView",
    data: ()=> {
      return {
        images: {}
      }
    },

    created() {
      axios.get("https://api-v4.yshop.pl/shops/1/products/")
          .then((response) => {
            this.images = response.data
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }


</script>
