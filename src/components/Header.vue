<template>
  <header class="header float" :class="{ 'animate': animate1 }">
    <div class="container">
      <a href="#" class="logo">
        <span class="text-wrapper">
          <span class="letters">Be Proactive</span>
        </span>
      </a>
    </div>
    <div class="navbar">
      <a v-on:click="jumpToAbout()">
        <span class="nav-item hover-link">About</span>
      </a>
      <a v-on:click="jumpToWork()">
        <span class="nav-item work hover-link">Work</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      animate1: false,
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
    jumpto_work: {
      get() {
        return this.$store.state.home.jumpto_work
      },
      set(value) {
        this.$store.commit('home/updateJumpToWork', value)
      },
    },
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      setTimeout(() => {
        this.animate1 = true
      }, 2800)
    },
    jumpToAbout() {
      this.jumpto_about = true

      setTimeout(() => {
        this.$scrollTo('#about', 500)
      }, 1200)
    },
    jumpToWork() {
      this.jumpto_work = true

      setTimeout(() => {
        this.$scrollTo('#my-works', 500)
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
  background: $primary-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em 10%;
  @include tablet {
    padding: 1.2em 6%;
  }
  @include desktop {
    padding: 1.2em 4%;
  }
  transform: translateY(-100%);

  &.animate {
    transform: translateY(0);
    transition: transform 1s ease-in;
  }

  .logo {
    font-weight: 400;
    font-size: 1.2em;
    color: $primary-text-color;
    cursor: pointer;

    .text-wrapper {
      position: relative;
      display: inline-block;
    }
  }

  .navbar {
    a {
      color: $primary-text-color;
      text-decoration: none;
    }
    .work {
      margin-left: 2em;
    }
  }
}

.hover-link {
  position: relative;
  display: inline-block;
  padding-top: 0.6em;
  padding-bottom: 0.4em;
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