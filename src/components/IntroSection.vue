<template>
  <div id="intro-section">
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
      <a href="#" v-scroll-to="'#work-section'">
        <span class="text-wrapper">see my works</span>
      </a>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'intro-section',
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
  mounted() {
    this.animate()
    // set intro animation finishied
    setTimeout(() => (this.intro_animated = true), 4600)
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
          targets: '.see-work .text-wrapper',
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
#intro-section {
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
    font-style: italic;
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
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  a {
    color: #ffffff;
    text-decoration: none;
  }
  span {
    cursor: pointer;
    transform-origin: 0 0;
    text-transform: uppercase;
    display: inline-block;
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