<template lang="html">
    <div class="footer">
              <img src="@/assets/icon/logo/LOGO3.jpg" class="logo" alt="">

            <div class="links">
              <router-link to="#">{{ $t("footer.home") }}</router-link>
              <router-link to="#">{{ $t("footer.gallery") }}</router-link>
              <router-link to="#">{{ $t("footer.how-works") }}</router-link>
              <router-link to="#">{{ $t("footer.contact") }}</router-link>
            </div>

            <div class="media">
                <a href="https://www.facebook.com/kpbat"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                <a href="https://www.instagram.com/kp_bat/"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest" /></a>
            </div>

            <hr size="1px">

            <div class="copyright">
              <p>Privacy Policy</p>
              <p>© 2022 KP BAT. All Rights Reserved</p>
            </div>
    </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped src="@/assets/style/components/footer.less" lang="less"></style>
