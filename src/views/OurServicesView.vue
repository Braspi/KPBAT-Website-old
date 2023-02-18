<template>
    <section>
      <div class="top">
        <p class="title">{{ $t("main.sections.s2.title") }}</p>
        <p class="desc">{{ $t("main.sections.s2.desc") }}</p>
      </div>
        <div class="wrapper">
          <div class="content-box" v-for="(service, index) in services" :key="index">
            <div class="card" @mouseover="mouseEnterHandle($event, require(`@/assets/img/ourservices/${index+1}.jpg`))" @mouseleave="mouseLeaveHandle">
              <font-awesome-icon :icon="service.iconName"/>
              <h2>{{ $t(service.name) }}</h2>
              <p>{{ $t(service.description) }}</p>
            </div>
          </div>
        </div>
    </section>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default  {
  data: () => ({
    services: [
      {
        background: '@/assets/img/ourservices/1.jpg',
        iconName: 'fa-solid fa-house',
        name: "ourservices.services.s1.title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
      },
      {
        background: '@/assets/img/ourservices/2.jpg',
        iconName: 'fa-solid fa-dungeon',
        name: "ourservices.services.s2.title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
      },
      {
        background: '@/assets/img/ourservices/3.jpg',
        iconName: 'fa-solid fa-toolbox',
        name: "ourservices.services.s3.title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
      },
      {
        background: '@/assets/img/ourservices/4.jpg',
        iconName: 'fa-solid fa-vest-patches',
        name: "ourservices.services.s4.title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
      },
      {
        background: '@/assets/img/ourservices/5.jpg',
        iconName: 'fa-solid fa-wrench',
        name: "ourservices.services.s5.title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
      },
      {
        background: '@/assets/img/ourservices/6.jpg',
        iconName: 'fa-solid fa-snowflake',
        name: "ourservices.services.s6.title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
      },
      {
        background: '@/assets/img/ourservices/7.jpg',
        iconName: 'fa-solid fa-hammer',
        name: "ourservices.services.s7.title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
      },
      {
        background: '@/assets/img/ourservices/8.jpg',
        iconName: 'fa-solid fa-trowel',
        name: "ourservices.services.s8.title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
      },
      {
        background: '@/assets/img/ourservices/9.jpg',
        iconName: 'fa-solid fa-paint-roller',
        name: "ourservices.services.s9.title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
      }
    ]
  }),
  methods: {
    mouseEnterHandle(event, image) {
      if (event.target.tagName !== 'DIV') return;
      event.target.style.background = `linear-gradient(45deg, rgba(42, 42, 42,0.7) 0%, rgba(69, 69, 69, 0.7) 100%), url('${image}')`
      event.target.style.backgroundSize = `cover`
    },
    mouseLeaveHandle() {
      event.target.style.background = `#fff`
    }
  },
  components: {
    Footer
  }
}
</script>
<style scoped src="@/assets/style/views/ourservices.less" lang="less"> </style>