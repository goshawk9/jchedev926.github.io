<template>
  <div class="container">
    <Header />
    <intro-section></intro-section>
    <work-section></work-section>
    <Footer v-if="false" />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import IntroSection from '../components/IntroSection'
import WorkSection from '../components/work/WorkSection'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    IntroSection,
    WorkSection,
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