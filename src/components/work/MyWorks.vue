<template>
  <section role="region" id="my-works" class="section">
    <div class="title">
      <h2>
        <span class="my-works">Featured works</span>
      </h2>
    </div>
    <project
      v-for="(item, index) in myWorks"
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
}
</script>

<style lang="scss" scoped>
#my-works {
  color: $second-text-color;
  background-color: $second-color;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  margin: auto;
  overflow: hidden;

  .title {
    font-weight: 400;
    font-size: 2vw;
    text-align: center;
    padding-top: 80px;
    margin-bottom: 80px;

    .my-works {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -12px;
        width: 40%;
        height: 2px;
        background: $primary-color;
        transform: translate(-50%);
      }
    }
  }
}
</style>