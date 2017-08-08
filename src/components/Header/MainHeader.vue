<template lang="pug">
  header
    .container.mt-1
      .grid
        .col.col-d-2.col-t-2.col-m-2
          a(href)
            img.logo-image(src="../../assets/elass_logo.png", alt="로고 이미지")
        .col.col-d-2.col-t-2.col-m-2.col-d-push-8.col-t-push-4
          ul.site-menu
            li.login
              a.log-in(href="#") 로그인
            li
              a.sign-up(href="#") 회원가입
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
  .log-in{
    padding-left: 20px
  }
  .health-image {
    height: 200px;
    background-color: skyblue;
  }
  .footer{
    background-color: #0081ff;
    font-size: 2.6rem;
  }
  .footer1{
    text-align: center;
    margin-top: $leading * 2;
    color: #fff;
  }
  .sign-up-button{
    width: 100%;
    height: 63px;
    margin-top: $leading;
    margin-bottom: $leading * 2;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 10px;
    color: #fff;
    font-size: 1.6rem;
  }
  .copyright{
    background-color: #363636;
  }
  .copyright1{
    color: #f7f7f7;
    margin-top: 210px;
    margin-left: 20px;
  }
</style>
