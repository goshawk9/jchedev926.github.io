<template>
  <div class="container">
    <Header />
    <main>
      <introduction></introduction>
      <my-works v-if="intro_animated"></my-works>
      <about v-if="intro_animated"></about>
    </main>
    <Footer v-if="false" />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import MyWorks from '../components/work/MyWorks'
import About from '../components/about/About'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    Introduction,
    MyWorks,
    About,
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
  color: $primary-text-color;
}
</style>