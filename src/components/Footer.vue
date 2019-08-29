<template>
  <footer>
    <div class="line"></div>
    <div class="container">
      <div class="socials">
        <a :href="'mailto:' + email + '?Subject=Say%20Hello'" target="_top" class="hover-link">Email</a>
        <a :href="github" target="_blank" class="hover-link">Github</a>
        <a :href="linkedin" target="_blank" class="hover-link">LinkedIn</a>
      </div>
      <p class="copyright">© Copyright 2015 - {{ year }} {{ company }}</p>
    </div>
  </footer>
</template>

<script>
import json from '@/portfolio.json'

export default {
  data() {
    return {
      year: '2010',
      company: '',
      email: '',
      github: '',
      linkedin: '',
    }
  },
  created() {
    this.year = new Date().getFullYear()
    this.email = json.email
    this.github = json.github
    this.linkedin = json.linkedin
  },
}
</script>

<style lang="scss" scoped>
footer {
  font-size: 1em;

  .line {
    width: 100%;
    height: 1px;
    background: #424242;
  }
  .container {
    width: 100%;
    height: 20vh;
    background-color: #000000;
    padding-top: 2vh;
    padding-bottom: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      margin-top: 0;
      margin-bottom: 0;
      text-align: center;
      font-size: 0.9em;
    }

    .socials {
      text-align: center;

      a {
        color: #ffffff;
        text-decoration: none;
        font-size: 1em;
        margin: 1.2em;
        cursor: pointer;
      }
    }
  }
}
.hover-link {
  position: relative;
  display: inline-block;
  padding-top: 1em;
  padding-bottom: 0.4em;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    transition: height 0.5s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    background: #ffffff;
  }
  &:hover::before {
    height: 10%;
  }
}
</style>