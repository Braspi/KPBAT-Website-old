<template lang="html">
  <div class="nav" :class="{ bg: !navDetached }" >
    <router-link to="/">
      <img src="@/assets/icon/logo/LOGO2_alpha.png" alt="logo" class="logo">
    </router-link>
    <div class="links">
      <a href="/#" class="hua">{{ $t("nav.home") }}</a>
      <router-link to="/gallery" class="hua">{{ $t("nav.gallery") }}</router-link>
      <a href="/#contact" class="hua">{{ $t("nav.contact") }}</a>
    </div>
    <div class="lang">
      <img src="@/assets/icon/flags/france.webp" @click="changeLang('fr')" alt="france">
      <img src="@/assets/icon/flags/united_kingdom.webp" @click="changeLang('en')" alt="united_kingdom" >
    </div>

    <font-awesome-icon icon="fa-solid fa-bars" @click="showNav()" class="bars" size="3x"/>

    <div class="burger">
      <div class="inner" :class="[hidden ? 'hidden' : '']">
        <div class="links">
          <a href="/" class="hua">{{ $t("nav.home") }}</a>
          <router-link to="/gallery" class="hua">{{ $t("nav.gallery") }}</router-link>
          <a href="/#contact" class="hua">{{ $t("nav.contact") }}</a>
        </div>
        <h1>{{ $t("nav.language") }}:</h1>
        <div class="lang">
          <img src="@/assets/icon/flags/france.webp" @click="changeLang('fr')" alt="france">
          <img src="@/assets/icon/flags/united_kingdom.webp" @click="changeLang('en')" alt="united_kingdom">
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
      navDetached: true,
    }
  },
  created() {
      window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount() {
      window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
    },
    showNav() {
      this.hidden = !this.hidden;
    },
    onScroll() {
      let header = document.querySelector('.home main').getBoundingClientRect();
      this.navDetached = window.pageYOffset < (header.height / 8)
    }
  }
}
</script>
<style scoped src="@/assets/style/components/nav.less" lang="less">
</style>
