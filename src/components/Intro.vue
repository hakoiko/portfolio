<script setup lang="ts">
</script>

<template>
  <div class="intro">
    <h2 class="intro-header">
      Hi, I'm Suchan
    </h2>
    <p class="intro-paragraph">
      I'm a frontend developer with 10+ years of experience. currently I'm developing <a href="https://agit.io/">Agit</a> at <a href="https://www.kakaocorp.com/">Kakao</a>.
    </p>
    <p class="intro-paragraph">
      I hope to be more framework-agnostic frontend developer. I'm using <a href="https://vuejs.org/">Vue</a>, <a href="https://react.dev/">React</a>, <a href="https://www.solidjs.com/">Solid</a>, and other frameworks. of course, <a href="https://astro.build/">Astro</a> is my favorite SSR Framework. Throughout my career, I have learned that everything changes. Time makes all my codes into the legacy codes. I believe that <a href="https://jasonformat.com/islands-architecture/">Island Architecture</a> and <em>Sandboxed apps</em> can be a solution to make codes that never getting old.
    </p>
    <p class="intro-paragraph">
      You can meet me if you live in <a href="https://maps.app.goo.gl/jssor4hGR9heuxF46">South Korea</a><br/>
      and I enjoy <a href="https://instagram.com/clowleed">cooking and wine</a>.
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
@import '../variables.scss';

.intro {
  .intro-header {
    font-size: 48px;
    font-weight: 900;
    color: #333;
    @media (max-width: $breakpoint-mobile) {
      font-size: 32px;
    }
  }

  .intro-paragraph {
    max-width: 768px;
    font-weight: 400;
    font-size: 24px;
    color: #555;
    @media (max-width: $breakpoint-mobile) {
      font-size: 16px;
    }
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
    > .link {
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
