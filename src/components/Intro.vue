<script setup lang="ts">
</script>

<template>
  <div class="intro">
    <h2 class="intro-header">Hi, I'm Suchan</h2>
    <p class="intro-paragraph">I'm a frontend developer. currently I'm working for <a href="https://kakaowork.com">kakaowork</a>. and I am also developing a web UI Components library called <em>kompass</em>.</p>
    <p class="intro-paragraph">And I hope to be more <em>framework-agnostic</em> frontend developer. and I'm a researcher of <em>micro frontend architecture</em>. I'm using Vue, React, Solid, and other frameworks. and also some of my work is in vanilla JS. I have approximately 10 years of frontend experience. and I learned everything changes. and a software must always be up to date. Micro frontend architecture and multi-framework development are key areas of interest for me.</p>
    <p class="intro-paragraph">
      You can meet me if you live in <em>South Korea</em><br/>
      and I enjoy <em>I enjoy cooking and wine</em>.
    </p>

    <div class="intro-links">
      <a class="link -github" alt="github" target="_blank" href="https://github.com/hakoiko"></a>
      <a class="link -instagram" alg="instagram" target="_blank" href="https://instagram.com/clowleed"></a>
      <a class="link -linkedin" alg="linkedin" target="_blank" href="https://www.linkedin.com/in/suchankim/"></a>
      <a class="link -youtube" alg="마이크로 프론트엔드, 실무에 쓸만할까?" target="_blank" href="https://www.youtube.com/watch?v=DOS0YPwdnhk"></a>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.intro {
  .intro-header {
    font-size: 48px;
    font-weight: 900;
    color: #333;
  }

  .intro-paragraph {
    max-width: 760px;
    font-weight: 400;
    font-size: 22px;
    color: #555;
    a,
    em {
      font-style: normal;
      font-weight: 400;
      background-color: transparent;
      background-image: url('./sin.svg');
      background-size: 10px;
      background-position: bottom left;
      background-repeat: repeat-x;
    }
  }

  .intro-links {
    margin-top: 40px;
    display: flex;
    gap: 16px;
    .link {
      display: block;
      width: 28px;
      height: 28px;
      background-size: cover;
      &.-github { background-image: url('./github.svg') }
      &.-instagram { background-image: url('./instagram.svg') }
      &.-youtube { background-image: url('./youtube.svg') }
      &.-linkedin { background-image: url('./linkedin.svg') }
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #000;
    }
  }
}
</style>
