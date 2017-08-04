<template lang="pug">
  #app
    //- 헤더영역
    header
      .container.mt-1
        .grid
          .col.col-d-2.col-t-2.col-m-2
            a(href role="button" aria-label="엘라스 메인페이지로 이동하기 버튼")
              img.logo-image(src="../assets/elass_logo.jpg", alt="로고 이미지")
          .col.col-d-2.col-t-2.col-m-1.col-d-push-8.col-t-push-4.col-m-push-1
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
      .container.sign-up-complete-container.mt-1
        .grid.mt-3
          h1.sign-up-header.col.col-d-4.col-d-push-4 엘라스 무료 회원가입
        .grid.mt-3.sign-up-complete-content
          p.col 회원가입이 완료되었습니다.
            br
            | 엘라스의 회원이 되신 것을 진심으로 환영합니다. &colon;-&rpar;
          a(href).go-to-main-btn.col.col-d-2.col-t-4.col-t-push-2.col-d-push-5 메인으로
        
    //- 푸터영역
    footer
      .container.copyright
        .grid
          .col.col-d-6.col-d-offset-3
            p.copyright1 Copyright since &copy; 2017 All rights reserved by Jisu Kim , Hyejin.Cha , Jina Lee
</template>

<style lang="scss">  
  @import '~default';

  %border-top{
    border-top: 1px solid #bbc0d4;
  }
  %border{
    border: 1px solid #bbc0d4;
  }

  .sign-up-complete-container{
    @extend %border-top;
    margin-bottom: $leading * 3;
    .sign-up-header{
      text-align: center;
    }
    .sign-up-complete-content{
      @extend %border;
      text-align: center;
      padding: 70px 100px 70px 100px;
      font-size: 2.4rem;
      color: #181818;
      .go-to-main-btn{
        color: #fff;
        font-size: 1.5rem;
        font-weight: 200;
        line-height: $leading * 2;
        background: #007aff;
        margin-top: 50px;
        &:hover, &:focus{
          background: #016adc;
        }
      }
    }
  }

</style>



