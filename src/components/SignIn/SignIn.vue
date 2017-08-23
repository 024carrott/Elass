<template lang="pug">
    main
      .container.sign-in-container.mt-1
        .grid.mt-3
          h1.sign-in-header.col.col-d-4.col-d-push-4 엘라스에 오신 것을 환영합니다
        .grid.mt-3
          form#login.sign-in-form.col.col-d-6.col-d-push-3
            fieldset
              legend.a11y-hidden 로그인 폼
              label(for="user-id").col.alpha 아이디
              input(id="user-id" name="user-id" type="text" placeholder="아이디를 입력 해주세요." v-model="userID").col.alpha
              label(for="user-password").col.alpha 비밀번호
              input.password(id="user-password" name="user-password" type="password" placeholder="비밀번호를 입력 해주세요." v-model="userPwd").col.alpha
              //- a(href class="find-password-btn").col.alpha 비밀번호 찾기
              .checkbox.col.alpha.omega
                input(id="confirm" type="checkbox" name="confirm" aria-label="다음에 방문 시 로그인 정보를 기억하기" v-model="signinBox").a11y-hidden
                label(for="confirm") 아이디 기억하기
              button(type="submit" class="sign-in-btn" @click.prevent="submitLogin").col 로그인 하기
        .grid.mt-2
        //-   span.col(class="or") or
        //- .grid.mt-2
        //-   a(href class="facebook-sign-in" role="button" aria-label="페이스북으로 로그인 하기 버튼").col.col-d-6.col-d-push-3 페이스북으로 로그인 하기
</template>

<script>
export default {
  created(){
    this.loginFrm = new FormData();
  },
  data(){
    return{
      loginFrm : null,
      userID: localStorage.getItem('login_remember_id'),
      userPwd : '',
      signinBox: localStorage.getItem('login_remember_id')
    }
  },
  methods :{
    submitLogin(){
      if(!this.userID.length ){ 
        window.alert('아이디를 입력하세요.');
        document.getElementById("user-id").focus();
        return;
      }
      if(!this.userPwd.length){
        window.alert('비밀번호를 입력하세요.');
        document.getElementById("user-password").focus();
        return;
      }
      this.loginFrm.append('username', this.userID);
      this.loginFrm.append('password', this.userPwd);
      this.signinSubmit();
    },
    signinSubmit(){
      this.$http.post(this.$store.state.member.signin, this.loginFrm)
      .then(response => {
        if(response.status===200 && response.data.token.length){
          // console.log(response.data);
          // return;
          this.$store.dispatch('login', {token:response.data.token, userid:response.data.user.user_pk, tutorid:response.data.user.tutor_pk || 0});
          // 체크박스가 체크 됐을 경우
          if( this.signinBox === true ){
            localStorage.setItem("login_remember_id", this.userID);
          }else{
            localStorage.setItem("login_remember_id", '');
          }
          this.$router.push('/');
        }
      })
      .catch(error => {
        switch(error.status){
          case 400:
            window.alert('아이디와 비밀번호가 일치하지 않습니다/\n 확인 후 다시 로그인 해주세요.');
            break;
          case 500:
            window.alert('존재하지 않는 사용자입니다. 회원가입 후 이용해주세요.');
            break;
          default:
            window.alert('로그인 정보가 바르지 않습니다.');
        }
      })
    },
  },
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
      input[type="text"],input[type="password"]{
        @extend %border;
        margin: 10px 0 20px 0;
        padding-left: 5px;
        height: $leading * 2;
        // -webkit-text-security: disc;
        font: large Verdana,sans-serif;
        // letter-spacing: 1px;
      }
      .find-password-btn{
        color: #007aff;
        margin-bottom: 20px;
        text-decoration: underline;
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
  .show{
    color: red;
    display: inline;
  }


</style>



