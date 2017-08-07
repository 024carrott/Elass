<template lang="pug">
  #app
    header
      .container.mt-1
        .grid
          .col.col-d-2.col-t-2.col-m-2
            a
              img.logo-image(src="./assets/elass_logo.jpg", alt="로고 이미지")
          .col.col-d-2.col-t-2.col-m-2.col-d-push-8.col-t-push-4
            ul.site-menu
              li.login
                a.log-in(href="#") 로그인
              li
                a.sign-up(href="#") 회원가입
          .col.col-d-5.col-d-offset-3.col-t-4.col-m-4.col-d-pull-2.col-t-pull-2
            .search-wrap
              input.search(type="search" placeholder="검색어를 입력하세요")
              a.search-btn.ion-search(href="#" role="button" aria-label="검색") 
    router-view
    footer
      .container.footer.mt-2
        .grid
          .col
            p.footer1 회원이 되시면 더 많은 서비스를 이용하실 수 있습니다.
        .grid
          .col.col-d-4.col-d-offset-4.col-t-4.col-t-offset-2.col-m-4
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
  .main-banner-bottom
    position: relative
    width: 100%
    height: 231px
    background: url('assets/main/banner.jpg') 0 0/cover

</style>
