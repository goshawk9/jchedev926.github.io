<template>
  <section id="about" class="section">
    <div class="container">
      <h2>
        Hi, I'm Wanhao
        <br />Full-Stack &amp; Mobile Developer
      </h2>
      <p class="about">
        I like to enjoy learning new languages, frameworks, and technologies and write clean code.
        <br />
        <br />In the past 4 years, I've worked on various freelance projects with companies and individual clients across the globe.
        <br />I've worked both as a solo developer and as a project manager, scaling up a team as needed.
        <br />You can download
        <a href="#">my resume</a> and check my experiences and skills in more detail.
        <br />
        <br />Get in touch. I'm always looking to hear about new opportunities and exciting projects.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
}
</script>

<style lang="scss" scoped>
#about {
  background-color: $primary-color;
  height: 80vh;
  min-height: 860px;
  @media screen and (max-height: 640px) {
    min-height: 980px;
  }

  > .container {
    width: 80vw;
    height: 100%;
    @include tablet {
      width: 64vw;
    }
    @include desktop {
      width: 48vw;
    }
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10vh;
    padding-bottom: 8vh;

    h2 {
      font-size: 2em;
      font-weight: 700;
      max-width: 420px;
      margin-top: 0;
      margin-bottom: 8vh;
      line-height: 1.4;
    }
    p {
      font-size: 1em;
      max-width: 90%;
      @include tablet {
        max-width: 90%;
      }
      @include desktop {
        max-width: 100%;
      }
      line-height: 1.8;
    }
    a {
      color: $primary-text-color;
    }
  }
}
</style>