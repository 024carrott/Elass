<template lang="pug">
  header
    .container.mt-1
      .grid
        .col.col-d-2.col-t-2.col-m-2
          router-link(to="/")
            img.logo-image(src="../../assets/elass_logo.png", alt="로고 이미지")
        .col.col-d-2.col-t-2.col-m-2.col-d-push-8.col-t-push-4
          ul.site-menu
            li.login
              router-link.log-in(to="signin") 로그인
            li
              router-link.sign-up(to="signup") 회원가입
        SearchBar
</template>

<script>
import SearchBar from './SearchBar';
export default {
  components: {
    SearchBar: SearchBar
  },
  name: 'header',
  data () {
    return {
      
    }
  } 
}
</script>

<style lang="scss">
  @import "~default";
  header{
    position: relative;
  }
  .logo-image{
    height: 42px;
  }
  .site-menu{
    float: right;
    &::after{
      @extend %clearfix;
    }
    li {
      display: inline-block;
      text-indent: 10px;
    }
  }
  .log-in, .sign-up{
    line-height: 42px;
    height: 42px;
    padding-right: 0;
    color: #333;
  }

</style>
