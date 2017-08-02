<template lang="pug">
  #app
    header
      .container
        .grid
          .col.col-d-2
            a
              img.logo-image(src="./assets/elass_logo.jpg", alt="로고 이미지")
          .col.col-d-5.col-d-offset-3
            input.search(type="search" placeholder="  검색어를 입력하세요")
            button.search-button(type="button") 검색
          .col.col-d-1
            ul
              li.login
                a.log-in(href="#") 로그인
          .col.col-d-1
            ul
              li
                a.sign-up(href="#") 회원가입
      .container.video
        video.main-video(autoplay loop)
          source(src="./assets/main-video.webm" type="video/webm")
          source(src="./assets/main-video2.mp4" type="video/mp4")
      


      
        



    main
    footer
      .container.footer
        .grid
          .col.col-d-6.col-d-offset-3
            p.footer1 회원이 되시면 더 많은 서비스를 이용하실 수 있습니다.
          .col.col-d-4.col-d-offset-4
            button.sign-up-button(type="button") 회원가입 하러 가기

          
      .container.copyright
        .grid
          .col.col-d-6.col-d-offset-3
            p.copyright1 Copyright since &copy; 2017 All rights reserved by Jisu Kim , Hyejin.Cha , Jina Lee
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
  @import "~default";
 
  .container
    margin-top: 21px

  .logo-image
    height: 42px

  .search
    width: 80%
    border: 1px solid #999
    border-radius: 15px
    height: 42px

  .search-button
    width: 42px
    height: 42px
    border: 1px solid skyblue
    border-radius: 15px
    background-color: skyblue
    color: #fff

  .log-in, .sign-up
    display: inline-block
    line-height: 42px
    height: 42px
    padding-right: 0
    color: #333
  
  .log-in
    padding-left: 20px

  .video
    height: 609px
    background-color: skyblue
  
    

  .main-video
    height: 100%
    width: 100%

  .footer
    height: 231px
    background-color: #4facfe
    font-size: 2.6rem

  .footer1
    margin-top: 63px

  .sign-up-button
    width: 90%
    height: 63px
    margin-top: 21px
    background-color: #4facfe
    border: 2px solid #fff
    border-radius: 10px
    color: #fff
    font-size: 1.6rem
    

  .copyright
    height: 231px
    background-color: black
    color: #fff
    font-size: 1.5rem

  .copyright1
    backgroud-color: red
    margin-top: 210px
    margin-left: 20px
</style>
