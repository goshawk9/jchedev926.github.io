<template>
  <header class="header float">
    <div>
      <a href="#" class="logo">
        <span class="text-wrapper">
          <span class="letters">Wan Hao Gui</span>
        </span>
      </a>
    </div>
    <div class="navbar">
      <a v-on:click="jumpToAbout()">
        <span class="nav-item hover-link">About</span>
      </a>
      <a v-scroll-to="'#my-works'">
        <span class="nav-item work hover-link">Work</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
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
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      // Wrap every letter in a span
      var textWrapper = document.querySelector('.logo .letters')
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>",
      )

      this.$anime
        .timeline({ loop: false })
        .add({
          targets: '.logo .letter',
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1200,
          offset: '-=775',
          delay: function(el, i) {
            return 2000 + 40 * (i + 1)
          },
        })
        .add({
          targets: '.navbar',
          opacity: [0, 1],
          translateY: [-60, 0],
          easing: 'easeOutCirc',
          duration: 1200,
        })
    },
    jumpToAbout() {
      this.jumpto_about = true

      setTimeout(() => {
        this.$scrollTo('#about', 500)
      }, 1200)
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: $header-height;
  z-index: $header_zindex;
  background: $second-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;

  .logo {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: $primary-text-color;
    cursor: pointer;

    .text-wrapper {
      position: relative;
      display: inline-block;
    }
  }

  .navbar {
    a {
      color: #ffffff;
      text-decoration: none;
    }
    .work {
      margin-left: 40px;
    }
  }
}

.hover-link {
  position: relative;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 6px;
  overflow: hidden;
  transform: translateX(0%);
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    transition: transform 0.5s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #ffffff;
    transform: translateX(-120%);
  }
  &:hover::before {
    transform: translateX(0);
  }
  &:hover {
    transform: translateX(10%);
  }
  transition: transform 0.5s ease;
}
</style>
<style lang="scss">
.logo {
  .letter {
    display: inline-block;
  }
}
</style>