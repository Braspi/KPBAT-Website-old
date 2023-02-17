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
            <h2>{{ service.name }}</h2>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default  {
  data: () => ({
    services: [
      {
        background: '@/assets/img/ourservices/1.jpg',
        iconName: 'fa-solid fa-info',
        name: 'Rénovation Extérieur',
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
  }
}
</script>
<style scoped src="@/assets/style/views/ourservices.less" lang="less"> </style>