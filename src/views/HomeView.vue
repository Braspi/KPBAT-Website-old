<template lang="html">
    <div class="home">
        <main>
            <p class="title">{{ $t("main.title") }}</p>
            <p class="desc">{{ $t("main.desc") }}</p>
        </main>
        <div class="wrapper">
            <section class="invert">
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
            <section>
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
            <section class="invert">
                <div class="top">
                    <p class="title">{{ $t("main.sections.s3.title") }}</p>
                    <p class="desc">{{ $t("main.sections.s3.desc") }}</p>
                </div>
                <form>
                    <div class="container">
                        <input type="text" class="inp1" :placeholder="`${$t('main.sections.s3.form.name')}`">
                            <input type="email" class="inp2" :placeholder="`${$t('main.sections.s3.form.email')}`">
                            <input type="tel" class="inp3" :placeholder="`${$t('main.sections.s3.form.phone')}`">
                        <textarea cols="30" rows="10" :placeholder="`${$t('main.sections.s3.form.message')}`" ></textarea>
                    </div>
                    <input type="submit" :value="`${$t('main.sections.s3.form.submit')}`">
                </form>
            </section>
            <section>
                <div class="top">
                    <p class="title">{{ $t("main.sections.s4.title") }}</p>
                    <p class="desc">{{ $t("main.sections.s4.desc") }}</p>
                </div>
                <div class="imgs">
                    <img src="https://source.unsplash.com/random/200x500" alt="">
                    <img src="https://source.unsplash.com/random/201x500" alt="">
                    <img src="https://source.unsplash.com/random/202x500" alt="">
                    <img src="https://source.unsplash.com/random/203x500" alt="">
                </div>
                <router-link to="#" class="button">{{ $t("main.sections.s4.btn") }}</router-link>
            </section>
        </div>
    </div>
</template>
<script>

</script>

<style scoped src="@/assets/style/views/home.less" lang="less">
</style>