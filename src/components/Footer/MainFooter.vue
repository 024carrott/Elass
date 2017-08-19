<template lang="pug">
  footer.mt-3
    SignUpBanner
    .container.footer
      .grid
        .col.col-d-6.col-d-push-3.col-t-6.col-t-push-1.mt-2.github-link-btns
          .btns-group.col-d-2.col-t-2
            a(href="https://github.com/chaaucindy" target="_blank" aria-label="차혜진의 깃헙 방문하기").github-link-btn.fa-github
            .github-name Cha Hye Jin
          .btns-group.col-d-2.col-t-2
            a(href="https://github.com/jayshooo" target="_blank" aria-label="김지수의 깃헙 방문하기").github-link-btn.fa-github
            .github-name Kim Ji Su
          .btns-group.col-d-2.col-t-2
            a(href="https://github.com/024carrott" target="_blank" aria-label="이진아의 깃헙 방문하기").github-link-btn.fa-github
            .github-name Lee Jin A
          
      .grid
        .col.col-d-6.col-d-offset-3.mt-2
          p.copyright Copyright since &copy; 2017 All rights reserved by Cha Hye Jin, Kim Ji Su, Lee Jin A
</template>

<script>
import SignUpBanner from './SignUpBanner';
export default {
  components: {
    SignUpBanner
  },
  name: 'footer',
}
</script>

<style lang="scss">
  @import '~default';
  .footer{
    background-color: #fff;
    border-top: 1px solid #181818;
  }
  .github-link-btns{
    display: flex;
    justify-content: space-around;
  }
  .btns-group{
    text-align: center;
  }
  .github-link-btn{
    font: 45px/1 FontAwesome;
    text-align: center;
    &:hover{
      color: #007aff;
    }
  }
  .copyright{
    font-weight: 200;
    color: #181818;
    text-align: center;
  }
</style>
