<template lang="pug">
  #app
    header
      .container.mt-1
        .grid
          .col.col-d-2.col-t-2.col-m-2
            h1
              a
                img.logo-image(src="../assets/elass_logo.jpg", alt="로고 이미지")
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
    main
      .container.mt-2
        .grid
          .col
            h2 마이페이지
        .grid
          .col.col-d-4.col-t-3.col-m-4
            .user-info
              img(src="../assets/main/user-profile.jpg")
              span dfasdf1234
              a.btn-white.is-small(role="button" href) 내 정보 수정하기
          .col.col-d-8.col-t-5.col-m-4
            .mypage-menu-group
              .mypage-menu-listener
                h3.a11y-hidden 리스너 메뉴
                .btn-group
                  a.btn-white(role="button" href) 수강신청 강의 보기
                  a.btn-white(role="button" href) 찜한 강의 보기
                  a.btn-white(role="button" href) 튜터 등록하기
              .mypage-menu-tutor
                h3.a11y-hidden 튜터 메뉴
                .btn-group
                  a.btn-white(role="button" href) 등록한 강의 보기
                  a.btn-white(role="button" href) 강의 등록하기
    footer.mt-1
      .container.copyright
        .grid
          .col.col-d-6.col-d-offset-3
            p.copyright1 Copyright since &copy; 2017 All rights reserved by Jisu Kim , Hyejin.Cha , Jina Lee              
</template>


<style lang="sass">
  @import "~default";

</style>
