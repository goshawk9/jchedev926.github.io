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

  > .container {
    width: 48vw;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 8vh;
    margin-bottom: 8vh;

    h2,
    p {
      font-family: 'Roboto', sans-serif;
    }

    h2 {
      font-size: 44px;
      font-weight: 700;
      max-width: 420px;
      margin-top: 0;
      margin-bottom: 8vh;
      line-height: 1.4;
    }
    p {
      font-size: 16px;
      max-width: 420px;
      line-height: 1.8;
    }
    a {
      color: $primary-text-color;
    }
  }
}
</style>