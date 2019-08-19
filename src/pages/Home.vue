<template>
  <div class="container">
    <Header />
    <div class="home">
      <div class="title">
        <div>
          <h1 class="pro">
            <span class="text-wrapper">Proactive</span>
          </h1>
        </div>
        <div>
          <h2 class="aim">Full-Stack Developer / Project Manager</h2>
        </div>
      </div>
      <div class="see-work">
        <span>see my works</span>
      </div>
    </div>
    <Footer v-if="false" />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      this.$anime
        .timeline({ loop: false })
        .add({
          targets: '.pro .text-wrapper',
          scale: [14, 1],
          opacity: [0, 1],
          easing: 'easeOutCirc',
          duration: 800,
          delay: function(el, i) {
            return 800 * i
          },
        })
        .add({
          targets: '.aim',
          translateY: [40, 0],
          opacity: [0, 1],
          easing: 'easeOutCirc',
          duration: 1200,
          delay: 400,
        })
        .add({
          targets: '.see-work',
          translateY: [180, 0],
          easing: 'easeOutCirc',
          opacity: [0, 1],
          duration: 1200,
          delay: 1200,
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.container,
.home {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  color: $private-text-color;
}
.title {
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h1,
  h2 {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-weight: 700;
    font-size: 6vw;
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
    margin-top: 3vw;
  }

  span {
    display: inline-block;
  }

  .active {
    margin-left: 2vw;
  }
}

.see-work {
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%);
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  span {
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -100px;
      width: 2px;
      height: 60px;
      background: #ffffff;
      transform: translate(-50%);
    }
    &:hover::before {
      height: 40px;
      transition: height 0.5s ease;
    }
  }
}
</style>
<style language="scss">
.active .letter {
  display: inline-block;
  transform-origin: 0 0;
}
</style>