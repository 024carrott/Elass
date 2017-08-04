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
      .container.sign-up-container.mt-1
        .grid.mt-3
          h1.sign-up-header.col.col-d-4.col-d-push-4 엘라스 무료 회원가입
        .grid.mt-3
          form.sign-up-form.col.col-d-6.col-d-push-3
            fieldset
              legend.a11y-hidden 회원가입 입력 폼
              label(for="user-nickname").col.alpha 닉네임
              input(id="user-nickname" name="user-nickname" type="text" placeholder="닉네임을 입력 해 주세요.").col.alpha
              label(for="user-email").col.alpha 이메일
              input(id="user-email" name="user-email" type="text" placeholder="이메일을 입력 해 주세요.").col.alpha
              label(for="user-password").col.alpha 비밀번호
              input(id="user-password" name="user-password" type="text" placeholder="비밀번호를 입력 해 주세요.").col.alpha
              input(id="confirm" class="confirm" type="checkbox" name="confirm" value="confirm" aria-label="이용약관 및 개인정보취급방침에 동의합니다.")
              label(for="confirm" class="confirm")
                span(tabindex="0")
                | 이용약관 및 개인정보취급방침에 동의합니다.
              button(type="submit" class="sign-up-btn").col 회원가입 하기
        .grid.mt-2
          span.col(class="or") or
        .grid.mt-2
          a(href class="facebook-sign-up" role="button" aria-label="페이스북으로 회원가입 하기 버튼").col.col-d-6.col-d-push-3 페이스북으로 회원가입 하기
        .grid.information
          p 안심하세요!
            br
            | 유저의 허락 없이 게시물을 올리지 않습니다.    
            
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

  .sign-up-container{
    @extend %border-top;
    margin-bottom: $leading * 3;
    .sign-up-header{
      text-align: center;
    }
    .sign-up-form{
      @extend %border;
      padding: 20px;
      label{
        font-size: 1.6rem;
      }
      input[type="text"]{
        @extend %border;
        margin: 10px 0 20px 0;
        padding-left: 5px;
        height: $leading * 2;
      }
      .confirm{
        font-size: 1.6rem;
        font-weight: 200;
        color: #656565;
      }
      input[type="checkbox"]{
        display: none;
        &+label span {
          @extend %border;
          position: relative;
          top: -1px;
          vertical-align: middle;
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 5px;
          cursor: pointer;
        }
        &:checked+label span{
          background: url('../assets/sign-up/checked.png') 0 0/cover;
        }
      }
    }
  }

  .sign-up-btn{
    border: none;
    background: #007aff;
    color: #fff;
    margin: 20px 0 0 0;
    padding: 0;
    line-height: $leading * 2;
    font-size: 1.5rem;
    font-weight: 200;
    &:hover, &:focus{
      background: #016adc;
    }
  }

  .or{
    text-align: center;
    font-size: 1.6rem;
    color: #656565;
    font-size: 200;
  }

  .facebook-sign-up{
    text-align: center;
    background: #3b5998;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 200;
    line-height: $leading * 2;
    &:hover, &:focus{
      background: #334c80;
    }
  }

  .information{
    margin-top: 10px;
    text-align: center;
    line-height: 1.8rem;
  }

</style>



