<template>
  <div id="work-section">
    <div class="title">
      <h2>
        <span>My works</span>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work-section',
}
</script>

<style lang="scss" scoped>
#work-section {
  height: 1000px;
  color: $second-text-color;
  font-family: 'Roboto', sans-serif;

  .title {
    font-weight: 400;
    font-size: 2vw;
    text-align: center;
    padding-top: 40px;
  }
}
</style>