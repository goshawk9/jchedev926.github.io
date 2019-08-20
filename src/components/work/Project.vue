<template>
  <article
    role="article"
    class="project"
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
      throttle: 300
    }"
  >
    <div class="layout">
      <div
        class="color"
        :class="{'animate': isVisible, 'from-left': index % 2 == 0, 'from-right': index % 2 == 1}"
      ></div>
      <div class="detail">
        <div class="container">
          <div class="project-thumbnail">
            <div class="container">
              <div
                class="image"
                :class="{'animate': visibleThumbnail,'from-left': index % 2 == 0, 'from-right': index % 2 == 1}"
              ></div>
            </div>
          </div>
          <div class="project-detail">
            <div class="container">
              <div class="contents" :class="{'animate': visibleProjectContents}"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'project',
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isVisible: false,
      visibleThumbnail: false,
      visibleProjectContents: false,
    }
  },
  methods: {
    visibilityChanged(isVisibile) {
      this.isVisible = isVisibile
      if (isVisibile) this.animate()
    },
    animate() {
      setTimeout(() => {
        this.visibleThumbnail = true
      }, 800)
      setTimeout(() => {
        this.visibleProjectContents = true
      }, 2000)
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped>
.from-left {
  transform: translateX(-120%);
}
.from-right {
  transform: translateX(120%);
}
.project {
  width: 100%;
  margin-bottom: 160px;

  .layout {
    position: relative;
    .color {
      height: 40vh;
      background: rgba($color: #000000, $alpha: 0.2);
      position: relative;

      &.animate {
        transform: translateX(0);
        transition: transform 1s ease-in;
      }
    }

    .detail {
      width: 48vw;
      max-width: 1280px;
      margin: auto;

      > .container {
        position: relative;
        width: 100%;
      }
    }
  }
}
.project-thumbnail {
  width: 100%;
  height: 27vw;
  position: absolute;
  left: 50%;
  top: -30vh;
  transform: translateX(-50%);

  > .container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .image {
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.9);

      &.animate {
        transform: translateX(0);
        transition: transform 1s ease;
      }
    }
  }
}
.project-detail {
  width: 100%;
  height: 40vw;
  padding-top: calc(27vw - 30vh);

  > .container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .contents {
      width: 100%;
      height: 100%;
      transform: translateY(120%);
      background-color: rgba($color: #000000, $alpha: 0.6);

      &.animate {
        transform: translateY(0);
        transition: transform 1s ease;
      }
    }
  }
}
</style>
<style language="scss">
</style>