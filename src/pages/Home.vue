<template>
  <div class="container">
    <Header />
    <intro-section></intro-section>
    <work-section v-if="intro_animated"></work-section>
    <about-section v-if="intro_animated"></about-section>
    <Footer v-if="false" />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import IntroSection from '../components/IntroSection'
import WorkSection from '../components/work/WorkSection'
import AboutSection from '../components/about/AboutSection'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    IntroSection,
    WorkSection,
    AboutSection,
  },
  created() {},
  computed: {
    intro_animated: {
      get() {
        return this.$store.state.home.intro_animated
      },
      set(value) {
        this.$store.commit('home/updateIntroAnimated', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  color: $private-text-color;
}
</style>