<template lang="pug">
    main
      .container.sign-in-container.mt-1
        .grid.mt-3
          h1.sign-in-header.col.col-d-4.col-d-push-4 엘라스에 오신 것을 환영합니다
        .grid.mt-3
          form.sign-in-form.col.col-d-6.col-d-push-3
            fieldset
              legend.a11y-hidden 로그인 폼
              label(for="user-email").col.alpha 이메일
              input(id="user-email" name="user-email" type="text" placeholder="이메일을 입력 해 주세요.").col.alpha
              label(for="user-password").col.alpha 비밀번호
              input(id="user-password" name="user-password" type="text" placeholder="비밀번호를 입력 해 주세요.").col.alpha
              a(href class="find-password-btn").col.alpha 비밀번호 찾기
              input(id="remember" class="remember" type="checkbox" name="remember" value="remember" aria-label="다음에 방문 시 로그인 정보를 기억하기 위한 버튼")
              label(for="remember" class="remember")
                span
                | 로그인 정보 기억하기
              button(type="submit" class="sign-in-btn").col 로그인 하기
        .grid.mt-2
          span.col(class="or") or
        .grid.mt-2
          a(href class="facebook-sign-in" role="button" aria-label="페이스북으로 로그인 하기 버튼").col.col-d-6.col-d-push-3 페이스북으로 로그인 하기
</template>

<style lang="scss">  
  @import '~default';

  %border-top{
    border-top: 1px solid #bbc0d4;
  }
  %border{
    border: 1px solid #bbc0d4;
  }

  .sign-in-container{
    @extend %border-top;
    margin-bottom: $leading * 3;
    .sign-in-header{
      text-align: center;
    }
    .sign-in-form{
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
      .find-password-btn{
        color: #007aff;
        margin-bottom: 20px;
        text-decoration: underline;
      }
      .remember{
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

  .sign-in-btn{
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

  .facebook-sign-in{
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

</style>



