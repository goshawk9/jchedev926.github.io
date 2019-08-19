<template>
  <header class="header">
    <div>
      <h1 class="logo">
        <span class="text-wrapper">
          <span class="letters">Hi I am Wan Hao Gui</span>
        </span>
      </h1>
    </div>
    <div class="navbar">
      <span class="nav-item hover-link">About</span>
      <span class="nav-item work hover-link">Work</span>
    </div>
  </header>
</template>

<script>
export default {
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
  },
}
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: $header_zindex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;

  .logo {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    .text-wrapper {
      position: relative;
      display: inline-block;
    }
  }
  .work {
    margin-left: 40px;
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