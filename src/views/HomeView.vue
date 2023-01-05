<template lang="html">
    <div class="home">
        <main>
            <Carousel 
            :autoplay="2000"
            :wrap-around="true"
            :mouseDrag="false"
            :transition="1000"
            >
                <Slide v-for="(img, i) in images" :key="i">
                    <img class="carousel__item" :src="img">
                </Slide>
            </Carousel>
            <p class="title">{{ $t("main.title") }}</p>
            <p class="desc">{{ $t("main.desc") }}</p>
        </main>
        <div class="wrapper">
            <section class="about invert">
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
                <img src="https://source.unsplash.com/random/576x1000" alt="">
            </section>
            <section class="work">
                <div class="top">
                    <p class="title">{{ $t("main.sections.s2.title") }}</p>
                    <p class="desc">{{ $t("main.sections.s2.desc") }}</p>
                </div>
                <div class="imgs">
                    <img src="https://source.unsplash.com/random/570x570" alt="">
                    <img src="https://source.unsplash.com/random/571x571" alt="">
                    <img src="https://source.unsplash.com/random/572x572" alt="">
                    <img src="https://source.unsplash.com/random/573x573" alt="">
                    <img src="https://source.unsplash.com/random/574x574" alt="">
                    <img src="https://source.unsplash.com/random/575x575" alt="">
                </div>
                <router-link to="#" class="button">{{ $t("main.sections.s2.btn") }}</router-link>
            </section>
            <section class="services invert">
              <div class="top">
                <p class="title">{{ $t("main.sections.s3.title") }}</p>
                <p class="desc">{{ $t("main.sections.s3.desc") }}</p>
              </div>
              <div class="imgs">
                <div class="img">
                    <img src="https://source.unsplash.com/random/250x500" alt="">
                    <div class="button-content">
                        <p>{{ $t("main.sections.s3.imgs.img1") }}</p>
                    </div>
                </div>
                <div class="img">
                    <img src="https://source.unsplash.com/random/251x500" alt="">
                    <div class="button-content">
                        <p>{{ $t("main.sections.s3.imgs.img2") }}</p>
                    </div>
                </div>
                <div class="img">
                    <img src="https://source.unsplash.com/random/252x500" alt="">
                    <div class="button-content">
                        <p>{{ $t("main.sections.s3.imgs.img3") }}</p>
                    </div>
                </div>
                <div class="img">
                    <img src="https://source.unsplash.com/random/253x500" alt="">
                    <div class="button-content">
                        <p>{{ $t("main.sections.s4.imgs.img4") }}</p>
                    </div>
                </div>
                <router-link to="#" class="button">{{ $t("main.sections.s3.btn") }}</router-link>
              </div>
            </section>
            <section class="form">
                <div class="top">
                    <p class="title">{{ $t("main.sections.s4.title") }}</p>
                    <p class="desc">{{ $t("main.sections.s4.desc") }}</p>
                </div>
                <div class="form-container">
                    <div class="contact-wrap">
                        <div>
                            <h2>Contact Us</h2>
                            <form @submit.prevent="sendMail()">
                                <div class="p50">
                                    <label for="inp1">{{ $t('main.sections.s4.form.name') }}</label>
                                    <input type="text" id="inp1" v-model="name" :placeholder="`${$t('main.sections.s4.form.name')}`">
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
                                <div class="p10">
                                    <button>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1274.0990718208316!2d2.19013932765034!3d48.89889028349159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6637ffc3534d3%3A0x9cf183962cbea637!2s85%20Bd%20du%20G%C3%A9n%C3%A9ral%20Leclerc%2C%2092000%20Nanterre%2C%20Francja!5e0!3m2!1spl!2spl!4v1672865373668!5m2!1spl!2spl" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default {
    data() {
        return {
            currentSlide: 0,
            images: [
                "https://source.unsplash.com/random/1300x700",
                "https://source.unsplash.com/random/1300x701",
                "https://source.unsplash.com/random/1300x702",
                "https://source.unsplash.com/random/1300x703",
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
           this.currentSlide = val
        },
    },
    components: {
        Footer,
        Carousel,
        Slide,
        Navigation,
    }
}

</script>
<style scoped src="@/assets/style/views/home.less" lang="less">
</style>
1
