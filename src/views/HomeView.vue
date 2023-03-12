<template lang="html">
    <div class="home">
        <main>
<!--            <Carousel-->
<!--            :autoplay="5000"-->
<!--            :wrap-around="true"-->
<!--            :mouseDrag="false"-->
<!--            :transition="1000"-->
<!--            >-->
<!--                <Slide v-for="(img, i) in images" :key="i">-->
<!--                    <img class="carousel__item" :src="img" alt="">-->
<!--                </Slide>-->
<!--            </Carousel>-->
            <img src="" alt="">
            <p class="title">{{ $t("main.title") }}</p>
            <p class="desc">{{ $t("main.desc") }}</p>
          <button @click="scrollToBottom">
            <div class="scroll-down"></div>
          </button>
        </main>
        <div class="wrapper" id="sechello">
            <section class="about invert" ref="bottom">
                <div class="left">
                    <p class="name">{{ $t("main.sections.s1.name") }}</p>
                    <p class="title">{{ $t("main.sections.s1.title") }}</p>
                    <p class="desc">
                        {{ $t("main.sections.s1.line1") }}
                        <br><br>
                        {{ $t("main.sections.s1.line2") }}
                        <br><br>
                        {{ $t("main.sections.s1.line3") }}
                    </p>
                </div>
                <img :src="require('../assets/img/1.png')" alt="">
            </section>
            <section class="work">
                <div class="top">
                    <p class="title">{{ $t("main.sections.s2.title") }}</p>
                    <p class="desc">{{ $t("main.sections.s2.desc") }}</p>
                </div>
                <div class="imgs">
                    <img :src="require('../assets/img/gallery/1.jpg')" alt="">
                    <img :src="require('../assets/img/gallery/2.jpg')" alt="">
                    <img :src="require('../assets/img/gallery/3.jpg')" alt="">
                    <img :src="require('../assets/img/gallery/4.jpg')" alt="">
                    <img :src="require('../assets/img/gallery/5.jpg')" alt="">
                    <img :src="require('../assets/img/gallery/6.jpg')" alt="">
                </div>
                <router-link to="/gallery" class="button">{{ $t("main.sections.s2.btn") }}</router-link>
            </section>
            <section class="services invert">
              <div class="top">
                <p class="title">{{ $t("main.sections.s3.title") }}</p>
                <p class="desc">{{ $t("main.sections.s3.desc") }}</p>
              </div>
              <div class="imgs">
                <router-link to="/ourservices" @click="scrollToTop">
                <div class="img bg" :style="`background-image: url(${require('../assets/img/services/1.jpg')}) !important`">
                    <div class="button-content btn-hover">
                        <p>{{ $t("main.sections.s3.imgs.img1") }}</p>
                    </div>
                </div>
                </router-link>
                <router-link to="/ourservices" @click="scrollToTop">
                <div class="img bg" :style="`background-image: url(${require('../assets/img/services/2.jpg')}) !important`">
                  <div class="button-content">
                    <p>{{ $t("main.sections.s3.imgs.img2") }}</p>
                  </div>
                </div>
                </router-link>
                <router-link to="/ourservices" @click="scrollToTop">
                <div class="img bg" :style="`background-image: url(${require('../assets/img/services/3.jpg')}) !important`">
                  <div class="button-content">
                    <p>{{ $t("main.sections.s3.imgs.img3") }}</p>
                  </div>
                </div>
                </router-link>
                <router-link to="/ourservices" class="button" @click="scrollToTop">{{ $t("main.sections.s3.btn") }}</router-link>
              </div>
            </section>
            <section class="form" id="contact">
                <div class="top">
                    <p class="title">{{ $t("main.sections.s4.title") }}</p>
                    <p class="desc">{{ $t("main.sections.s4.desc") }}</p>
                </div>
                <div class="form-container">
                    <div class="contact-wrap">
                        <div>
                            <h2>{{ $t('main.sections.s4.form.title') }}</h2>
                            <p>{{ $t('main.sections.s4.form.desc')}}</p>
                            <form @submit.prevent="sendMail()">
                                <div class="p50">
                                    <label for="inp1">{{ $t('main.sections.s4.form.name') }}</label>
                                    <input type="text" id="inp1" v-model="name" :placeholder="`${$t('main.sections.s4.form.name')}`">
                                </div>
                                <div class="p50">
                                    <label for="inp1">{{ $t('main.sections.s4.form.surname') }}</label>
                                    <input type="text" id="inp1" v-model="surname" :placeholder="`${$t('main.sections.s4.form.surname')}`">
                                </div>
                                <div class="p50">
                                    <label for="inp2">{{ $t('main.sections.s4.form.email') }}</label>
                                    <input type="email" id="inp2" v-model="email" :placeholder="`${$t('main.sections.s4.form.email')}`">
                                </div>
                                <div class="p50">
                                    <label for="inp3">{{ $t('main.sections.s4.form.phone') }}</label>
                                    <input type="text" id="inp3" v-model="phone" :placeholder="`${$t('main.sections.s4.form.phone')}`">
                                </div>
                                <div class="p100">
                                    <label for="inp4">{{ $t('main.sections.s4.form.message') }}</label>
                                    <textarea id="inp4"  v-model="message" :placeholder="`${$t('main.sections.s4.form.message')}`"></textarea>
                                </div>
                                <div class="p100 priv">
                                  <input type="checkbox" required>
                                  <label>{{ $t('main.sections.s4.form.privacy') }}</label>
                                      <a href="https://docs.google.com/document/d/1bnxOXVHx54XLblR6ZMMVRtHaewmt3CC4fmrkdvxEdEA/edit?usp=sharing">{{ $t('main.sections.s4.form.privacy2') }}</a>
                                </div>
                                <div class="p10">
                                    <button>{{ $t('main.sections.s4.form.submit') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="data">
                      <div class="data-info">
                        <div class="data-sec">
                          <h1>{{ $t('main.sections.s5.left.title')}}</h1>
                          <p>{{ $t('main.sections.s5.left.desc')}}</p>
                          <div class="media telephone">
                            <label><font-awesome-icon icon="fa-solid fa-phone" class="fa-solid"/></label>
                            <h2><p>contact telephone</p>+33 6 38 61 77 95</h2>
                          </div>
                          <div class="media mail">
                            <label><font-awesome-icon icon="fa-solid fa-envelope" class="fa-solid"/></label>
                            <h2><p>contact email</p>contact@kpbat.com</h2>
                          </div>
                        </div>
                      </div>
                      <hr>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457551747!2d2.2769955921557585!3d48.858946580659975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2spl!4v1674766664032!5m2!1sfr!2spl" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
          <Footer/>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Footer from "@/components/Footer";

import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import InputElement from "@/components/InputElement.vue";

export default {
    data() {
        return {
            currentSlide: 0,
            images: [
                require("../assets/img/carousel/1.jpg"),
                require("../assets/img/carousel/2.jpg"),
                require("../assets/img/carousel/3.jpg"),
                require("../assets/img/carousel/4.jpg"),
            ],
            name: "",
            email: "",
            phone: "",
            message: "",
        }
    },
    methods: {
        sendMail() {
            if (!(this.name.length > 0)) return alert("You must provide name");
            if (!(this.email.length > 0)) return alert("You must provide email");
            if (!(this.phone.length > 0)) return alert("You must provide phone");
            if (!(this.message.length > 0)) return alert("You must provide message");
            axios.post("/api/messages/send", { "name": this.name, "email": this.email, "phone": this.phone, "message": this.message}).then((res) => {
                console.log(res);
            }).catch((e) => {
                console.error(e);
            })
        },
        slideTo(val) {
           this.currentSlide = val;
        },
        scrollToTop() {
        window.scrollTo(0,0);
        },
        scrollToBottom(){
          this.$refs['bottom'].scrollIntoView({behavior: "smooth"})
        }
      },
  components: {
      InputElement,
        Footer,
        Carousel,
        Slide,
        Navigation,
    }
}

</script>
<style scoped>
.bg {
  background-size: cover;
  background-position: center;
}
</style>
<style scoped src="@/assets/style/views/home.less" lang="less">
</style>
