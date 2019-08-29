<template>
  <section role="region" id="my-works" class="section">
    <h2 class="title">
      <span>Featured works</span>
    </h2>
    <project
      v-for="(item, index) in activeProjects"
      :key="index"
      v-bind:index="parseInt(index)"
      :data="item"
    ></project>
  </section>
</template>

<script>
import Project from './Project'
import json from '../../portfolio.json'

export default {
  name: 'my-works',
  components: {
    Project,
  },
  data() {
    return {
      myWorks: json.works,
    }
  },
  computed: {
    activeProjects() {
      return this.myWorks.filter(function(project) {
        return project.public
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#my-works {
  color: $second-text-color;
  background-color: $second-color;
  overflow: hidden;

  .title {
    font-size: 2em;
    @include tablet {
      font-size: 2em;
    }
    @include desktop {
      font-size: 3em;
    }

    font-weight: 700;
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 3rem;

    span {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -0.4rem;
        width: 90%;
        height: 2px;
        background: $primary-color;
        transform: translate(-50%);
      }
    }
  }
}
</style>