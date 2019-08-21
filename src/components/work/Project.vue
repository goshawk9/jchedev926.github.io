<template>
  <article
    role="article"
    class="project"
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
    }"
  >
    <div class="layout">
      <div
        class="color"
        v-bind:style="{ 'background-color': data.color}"
        :class="{'animate': isVisible, 'from-left': index % 2 == 0, 'from-right': index % 2 == 1}"
      ></div>
      <div class="detail">
        <div class="container">
          <div class="project-thumbnail">
            <div
              class="container"
              :class="{'animate': visibleThumbnail,'from-left': index % 2 == 0, 'from-right': index % 2 == 1}"
            >
              <img :src="imageUrl" class="image" alt="project's thumbnail" />
            </div>
          </div>
          <div class="project-detail">
            <div class="container">
              <div class="contents" :class="{'animate': visibleProjectContents}">
                <h3 class="app-name">{{ data.name }}</h3>
                <p class="description" v-html="data.description"></p>
                <h4 class="tech-title">Technologies</h4>
                <p class="tech-content">{{ data.technologies }}</p>
                <h4 class="role-title">My role</h4>
                <p class="role-content" v-html="data.role"></p>
                <div class="btn" v-bind:style="{'background-color': data.color}">
                  <a v-bind:href="data.url" target="_blank">view website</a>
                </div>
              </div>
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
      required: true,
    },
    data: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data() {
    return {
      isVisible: false,
      visibleThumbnail: false,
      visibleProjectContents: false,
    }
  },
  computed: {
    imageUrl() {
      return require('@/assets/' + this.data.thumbnail)
    },
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
  margin-bottom: 80px;

  .layout {
    position: relative;
    .color {
      height: 40vh;
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
  overflow: hidden;

  > .container {
    width: 100%;
    height: 100%;
    border-width: 30px;
    border-style: solid;
    border-radius: 20px;
    border-color: $primary-color;
    box-sizing: border-box;
    background: $primary-color;
    text-align: center;

    &.animate {
      transform: translateX(0);
      transition: transform 1s ease;
    }

    .image {
      max-height: 100%;
      max-width: 100%;
    }
  }
}
.project-detail {
  width: 100%;
  // height: 40vw;
  padding-top: calc(27vw - 30vh);

  > .container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .contents {
      width: 100%;
      height: 100%;
      opacity: 0;
      transform: translateY(40px);
      margin-top: 60px;
      font-family: 'Roboto', sans-serif;

      &.animate {
        transform: translateY(0);
        opacity: 1;
        transition: opacity, transform 1s ease;
      }
    }
  }
}

.app-name {
  font-weight: 700;
  font-size: 1.2vw;
  margin-top: 2vw;
  margin-bottom: 1vw;
}
.description {
  line-height: 1.4;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 2vw;
}

.tech-title,
.role-title {
  font-size: 1.2vw;
  margin-top: 0;
  margin-bottom: 1vw;
}

.tech-content,
.role-content {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 2vw;
  max-width: 768px;
  line-height: 1.4;
}

.btn {
  width: 100%;
  margin-top: 3vw;
  margin-bottom: 3vw;
  padding-top: 1vw;
  padding-bottom: 1vw;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  a {
    color: $primary-color;
    text-decoration: none;
  }
}
</style>
<style language="scss">
</style>