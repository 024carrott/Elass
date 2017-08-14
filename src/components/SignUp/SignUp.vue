<template lang="pug">
    main
      .container.sign-up-container.mt-1
        .grid.mt-3
          h1.sign-up-header.col.col-d-4.col-d-push-4 엘라스 무료 회원가입
        .grid.mt-3
          form.sign-up-form.col.col-d-6.col-d-push-3
            fieldset
              legend.a11y-hidden 회원가입 입력 폼
              label(for="user-nickname" @input="nickname").col.alpha 닉네임
              input(id="user-nickname" name="user-nickname" type="text" placeholder="닉네임을 입력 해 주세요." ref="").col.alpha
              span.show(v-if="nickname.length > 12" v-show="true") * 6글자 이상, 12글자 이하로 작성해주세요.
              label(for="user-email").col.alpha 이메일
              input(id="user-email" name="user-email" type="text" placeholder="이메일을 입력 해 주세요." @input="email").col.alpha
              span.show(v-show="false").col.alpha * 올바른 이메일 형식이 아닙니다.
              label(for="user-password").col.alpha 비밀번호
              input(id="user-password" name="user-password" type="text" @input="pw" placeholder="비밀번호를 입력 해 주세요.").col.alpha
              label(for="user-password").col.alpha 비밀번호 확인
              input(id="user-password-2" name="user-password-check" type="text" @input="pw_2" placeholder="비밀번호를 한번 더 입력 해 주세요.").col.alpha
              span.show(v-show="pw_check").col.alpha * 비밀번호가 일치하지 않습니다.              
              .checkbox.col.alpha.omega
                input(id="confirm" type="checkbox" name="confirm" value="confirm" aria-label="이용약관 및 개인정보취급방침에 동의합니다.").a11y-hidden
                label(for="confirm") 이용약관 및 개인정보취급방침에 동의합니다.
              button(type="submit" class="sign-up-btn").col 회원가입 하기
        .grid.mt-2
          span.col(class="or") or
        .grid.mt-2
          a(href class="facebook-sign-up" role="button" aria-label="페이스북으로 회원가입 하기 버튼" @click="checkbox").col.col-d-6.col-d-push-3 페이스북으로 회원가입 하기
        .grid.information
          p 안심하세요!
            br
            | 유저의 허락 없이 게시물을 올리지 않습니다.    
</template>

<script>
export default {
  data(){
    return {
    }
    // var em_math = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/';
  },
  methods:{
    pw(e){
      this.password = e.target.value
    },
    pw_2(e){
      this.password_2 = e.target.value
    },
    email(e){
      this.e_mail = e.target.value
    },
    nickname(e){
      this.nick_name = e.target.value
    }

    
  
    
     
  

    // validation()
    //   // 가입 폼 유효성 검사
    // },
  },
  computed:{
    pw_check(){
      return (this.password === this.password_2) ? false : true
    },
    // em_check(){
    //   return (this.email === em_math ) ? false : true
    // },
   
    }
}
</script>

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
    }
  }

  .checkbox{
    position: relative;
    label{
      position: relative;
    padding-left: 25px;
      &::before{
        @extend %border;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: $leading;
        height: $leading;
        @extend %border;
      }
    }
    input:checked + label::before{
      background: url('../../assets/sign-up/checked.png') 0 0/cover;
    }
    input:focus + label::before{
      outline: 1px dotted #212121;
      outline: 5px auto -webkit-focus-ring-color;
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

  .show{
    color: red;
  }
</style>