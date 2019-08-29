<template>
  <article
    role="article"
    class="project"
    v-if="data.public === true"
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
                <div class="view-more" v-if="data.url.length > 0">
                  <a v-bind:href="data.url" target="_blank">
                    <div class="btn" v-bind:style="{'background-color': data.color}">view website</div>
                  </a>
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

$thumbnail-width: 16vw;
$thumbnail-height: 9vw;
.project {
  width: 100%;

  @include desktop {
    margin-bottom: 3rem;
  }

  @include tablet {
    margin-bottom: 2rem;
  }

  margin-bottom: 1rem;

  .layout {
    position: relative;

    .color {
      height: 27vw;
      position: relative;

      &.animate {
        transform: translateX(0);
        transition: transform 1s ease-in;
      }
    }

    .detail {
      width: $thumbnail-width * 5;

      @include tablet {
        width: $thumbnail-width * 4;
      }

      @include desktop {
        width: $thumbnail-width * 3;
      }
      max-width: 1280px;
      margin: auto;

      .container {
        position: relative;
        width: 100%;
      }
    }
  }
}

.project-thumbnail {
  width: 100%;
  height: $thumbnail-height * 5;
  @include tablet {
    height: $thumbnail-height * 4;
  }
  @include desktop {
    height: $thumbnail-height * 3;
  }
  position: absolute;
  left: 50%;
  top: -20vw;
  transform: translateX(-50%);
  overflow: hidden;

  > .container {
    height: 100%;
    border-width: 0.5rem;
    @include tablet {
      border-width: 1rem;
    }
    @include desktop {
      border-width: 2em;
    }
    border-style: solid;
    border-radius: 0.8em;
    border-color: $primary-color;
    background: $primary-color;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

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
  padding-top: $thumbnail-height * 5 - 20vw;
  @include tablet {
    padding-top: $thumbnail-height * 4 - 20vw;
  }
  @include desktop {
    padding-top: $thumbnail-height * 3 - 20vw;
  }

  > .container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .contents {
      width: 100%;
      height: 100%;
      opacity: 0;
      transform: translateY(3em);
      margin-top: 1rem;
      @include tablet {
        margin-top: 2rem;
      }
      @include desktop {
        margin-top: 4rem;
      }

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
  font-size: 2em;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.description {
  line-height: 1.4;
  font-size: 1em;
  margin-top: 0;
  margin-bottom: 2rem;
}

.tech-title,
.role-title {
  font-size: 1.8em;
  margin-top: 0;
  margin-bottom: 1rem;
}

.tech-content,
.role-content {
  font-size: 1em;
  margin-top: 0;
  margin-bottom: 2rem;
  max-width: 768px;
  line-height: 1.4;
}

.view-more {
  padding-top: 2rem;
  padding-bottom: 2rem;

  .btn {
    width: 100%;
    padding-top: 1.2em;
    padding-bottom: 1.2em;
    font-weight: 400;
    font-size: 1em;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
  }

  a {
    color: $second-color;
    text-decoration: none;
  }
}
</style>
<style language="scss">
</style>