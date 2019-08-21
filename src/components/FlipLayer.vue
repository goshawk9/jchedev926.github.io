<template>
  <div id="flip-layer" :class="{ 'animate-1': animate1, 'animate-2': animate2 , 'hidden': hidden }"></div>
</template>

<script>
export default {
  name: 'flip-layer',
  data() {
    return {
      animate1: false,
      animate2: false,
      hidden: false,
    }
  },
  computed: {
    jumpto_about: {
      get() {
        return this.$store.state.home.jumpto_about
      },
      set(value) {
        this.$store.commit('home/updateJumpToAbout', value)
      },
    },
  },
  watch: {
    jumpto_about(newValue) {
      console.log(newValue)
      if (newValue === true) {
        this.animate()
      }
    },
  },
  methods: {
    animate() {
      this.hidden = false
      this.animate1 = true

      setTimeout(() => {
        this.animate2 = true
      }, 2000)

      setTimeout(() => {
        this.hidden = true
        this.animate1 = false
        this.animate2 = false
        this.jumpto_about = false
      }, 3200)
    },
  },
}
</script>

<style lang="scss" scoped>
#flip-layer {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  z-index: $flip-layer_zindex;
  transform: translateY(100%);
  transition: transform 1s ease-in-out;
  opacity: 1;

  &.animate-1 {
    transform: translateY(0);
  }

  &.animate-2 {
    transform: translateY(-100%);
  }

  &.hidden {
    opacity: 0;
  }
}
</style>