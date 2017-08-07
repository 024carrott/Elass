<template lang="pug">
    main
      .container.sign-up-complete-container.mt-1
        .grid.mt-3
          h1.sign-up-header.col.col-d-4.col-d-push-4 엘라스 무료 회원가입
        .grid.mt-3.sign-up-complete-content
          p.col 회원가입이 완료되었습니다.
            br
            | 엘라스의 회원이 되신 것을 진심으로 환영합니다. &colon;-&rpar;
          a(href).go-to-main-btn.col.col-d-2.col-t-4.col-t-push-2.col-d-push-5 메인으로
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



