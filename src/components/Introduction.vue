<template>
  <section role="banner" id="introduction" class="section">
    <div class="main">
      <div class="name">
        <h1 :class="{ 'animate': animateName3 }">Wan Hao Gui</h1>
        <div class="revealer" :class="{ 'animate-1': animateName1, 'animate-2': animateName2 }"></div>
      </div>

      <div class="position" :class="{ 'animate': animatePosition }">
        <h2>Freelance Full-Stack &amp; Mobile Developer</h2>
      </div>
    </div>
    <div class="see-work">
      <a href="#" v-scroll-to="'#my-works'">
        <span class="text-wrapper" :class="{'animate': animateWork}">see my works</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'introduction',
  data() {
    return {
      animateName1: false,
      animateName2: false,
      animateName3: false,
      animatePosition: false,
      animateWork: false,
    }
  },
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
  },
  methods: {
    animate() {
      setTimeout(() => {
        this.animateName1 = true
      }, 100)
      setTimeout(() => {
        this.animateName2 = true
      }, 300)
      setTimeout(() => {
        this.animateName3 = true
      }, 1000)
      setTimeout(() => (this.animatePosition = true), 1600)
      setTimeout(() => (this.animateWork = true), 2800)
      // set intro animation finishied
      setTimeout(() => (this.intro_animated = true), 4800)
    },
  },
}
</script>

<style lang="scss" scoped>
#introduction {
  height: 100vh;
}
.main {
  position: absolute;
  width: 60%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.name {
  position: relative;
  overflow: hidden;

  h1 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 6em;
    margin-top: 0;
    margin-bottom: 1.2rem;
    opacity: 0;
    transition: opacity 1s ease-in;

    &.animate {
      opacity: 1;
    }
  }

  .revealer {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: $primary-text-color;
    transform: translateX(-102%);
    transform-origin: 0 0;
    transition: transform 1s ease-in;

    &.animate-1 {
      transform: translateX(0);
    }

    &.animate-2 {
      transform: translateX(102%);
    }
  }
}

.position {
  overflow: hidden;

  h2 {
    font-size: 1.2em;
    font-weight: 400;
    opacity: 0;
    transition: opacity, 1s ease-in;
  }

  &.animate {
    h2 {
      opacity: 1;
    }
  }
}

.see-work {
  position: absolute;
  left: 50%;
  bottom: 10vh;
  transform: translate(-50%);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  a {
    display: inline-block;
    color: #ffffff;
    text-decoration: none;
  }

  span {
    cursor: pointer;
    transform-origin: 0 0;
    text-transform: uppercase;
    display: inline-block;
    transform: translateY(12vh);
    opacity: 0;
    &.animate {
      opacity: 1;
      transform: translateY(0);
      transition: opacity, transform 1s ease-in;
    }

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -10vh;
      width: 2px;
      height: 6vh;
      background: #ffffff;
      transform: translate(-50%);
    }
    &:hover::before {
      height: 4vh;
      transition: height 0.5s ease-in;
    }
  }
}
</style>

