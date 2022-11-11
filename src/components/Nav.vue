<template lang="html">
  <div class="nav">
    <img src="@/assets/icon/logo/LOGO3.jpg" alt="logo" class="logo">
    <div class="links">
      <router-link to="/gallery" class="hua">{{ $t("nav.gallery") }}</router-link>
      <router-link to="/" class="hua">{{ $t("nav.home") }}</router-link>
      <a href="/#contact" class="hua">{{ $t("nav.contact") }}</a>
    </div>
    <div class="lang">
      <img src="@/assets/icon/flags/france.jpeg" @click="changeLang('fr')" alt="france">
      <img src="@/assets/icon/flags/united_kingdom.jpeg" @click="changeLang('en')" alt="united_kingdom" >
    </div>

    <font-awesome-icon icon="fa-solid fa-bars" @click="showNav()" class="bars" size="3x"/>

    <div class="burger">
      <div class="inner" :class="[hidden ? 'hidden' : '']">
        <div class="links">
          <router-link to="/gallery" class="hua">{{ $t("nav.gallery") }}</router-link>
          <router-link to="/" class="hua">{{ $t("nav.home") }}</router-link>
          <a href="/#contact" class="hua">{{ $t("nav.contact") }}</a>
        </div>
        <h1>{{ $t("nav.language") }}:</h1>
        <div class="lang">
          <img src="@/assets/icon/flags/france.jpeg" @click="changeLang('fr')" alt="france">
          <img src="@/assets/icon/flags/united_kingdom.jpeg" @click="changeLang('en')" alt="united_kingdom">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: true,
    }
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
    },
    showNav() {
      this.hidden = !this.hidden;
    }
  }
}
</script>
<style scoped src="@/assets/style/components/nav.less" lang="less">
</style>