<template lang="pug">
.container.sign-up-banner.mt-2
  .grid
    .col
      p.sign-up-banner-title 회원이 되시면 더 많은 서비스를 이용하실 수 있습니다.
  .grid
    .col.col-d-4.col-d-offset-4.col-t-4.col-t-offset-2.col-m-4
      router-link.sign-up-button(to="/signup" type="button") 회원가입 하러 가기
</template>

<script>
export default {
  name: 'SignUpBanner',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  @import '~default';
  .sign-up-banner{
    background-color: #007aff;
    font-size: 2.2rem;
  }
  .sign-up-banner-title{
    text-align: center;
    margin-top: $leading * 2;
    color: #fff;
  }
  .sign-up-button{
    color: #fff;
    font-size: 1.6rem;
    display: block;
    border: 1px solid #bbc0d4;
    line-height: $leading * 2;
    margin: 30px 0 30px 0;
    text-align: center;
  }
</style>
