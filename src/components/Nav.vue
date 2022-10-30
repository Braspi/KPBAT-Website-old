<template lang="html">
    <div class="nav">
        <router-link to="/">
            <img src="@/assets/icon/logo/LOGO3.jpg" alt="logo" class="logo">
        </router-link>
        <div class="links">
            <router-link to="/gallery" class="hua">{{ $t("nav.gallery") }}</router-link>
            <router-link to="/" class="hua">{{ $t("nav.home") }}</router-link>
            <router-link to="#" class="hua">{{ $t("nav.contact") }}</router-link>
        </div>
        <div class="lang">
            <img src="@/assets/icon/flags/france.jpeg" @click="changeLang('fr')" alt="france">
            <img src="@/assets/icon/flags/united_kingdom.jpeg" @click="changeLang('en')" alt="united_kingdom" >
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        changeLang(lang) {
            this.$i18n.locale = lang;
        }
    }
}
</script>
<style scoped src="@/assets/style/components/nav.less" lang="less">
</style>