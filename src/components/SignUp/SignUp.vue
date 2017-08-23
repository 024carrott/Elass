<template lang="pug">
    main
      .container.sign-up-container.mt-1
        .grid.mt-3
          h1.sign-up-header.col.col-d-4.col-d-push-4 엘라스 무료 회원가입
        .grid.mt-3
          .sign-up-form.col.col-d-6.col-d-push-3
            form
              fieldset
                legend.a11y-hidden 회원가입 입력 폼
                label(for="user-userID").col.alpha 아이디
                input(id="user-userID" name="user-userID" type="text" placeholder="아이디를 입력 해 주세요." @input="userID").col.alpha
                span.show(v-show="userID_check").col.alpha * 6글자 이상, 12글자 이하로 작성해주세요.
                label(for="user-nickname").col.alpha 닉네임
                input(id="user-nickname" name="user-nickname" type="text" placeholder="닉네임을 입력 해 주세요." @input="userNickname").col.alpha
                span.show(v-show="user_nickname_check").col.alpha * 6글자 이상, 12글자 이하로 작성해주세요.
                label(for="user-email").col.alpha 이메일
                input(id="user-email" name="user-email" type="text" placeholder="이메일을 입력 해 주세요." @input="email").col.alpha
                span.show(v-show="email_check").col.alpha * 올바른 이메일 형식이 아닙니다.
                label(for="user-password").col.alpha 비밀번호
                input(id="user-password" name="user-password" type="text" @input="pw" placeholder="비밀번호를 입력 해 주세요.").col.alpha
                label(for="user-password").col.alpha 비밀번호 확인
                input(id="user-password-2" name="user-password-check" type="text" @input="pw_2" placeholder="비밀번호를 한번 더 입력 해 주세요.").col.alpha
                span.show(v-show="pw_check").col.alpha * 비밀번호가 일치하지 않습니다.              
                .checkbox.col.alpha.omega
                  input(id="confirm" type="checkbox" name="confirm" value="confirm" aria-label="이용약관 및 개인정보취급방침에 동의합니다." @click="checkbox" :checked="check_box" ).a11y-hidden
                  label(for="confirm") 이용약관 및 개인정보취급방침에 동의합니다.
                span.show(v-show="toggle_checkbox").col.alpha * 해당 박스를 체크해주셔야 회원가입이 가능합니다. 
                button(type="submit" class="sign-up-btn" @click.prevent="submitSignup").col 회원가입 하기
        .grid.mt-2
        //-   span.col.or or
        //- .grid.mt-2
        //-   a(href class="facebook-sign-up" role="button" aria-label="페이스북으로 회원가입 하기 버튼").col.col-d-6.col-d-push-3 페이스북으로 회원가입 하기
        //- .grid.information.mt-1
        //-   p 안심하세요!
        //-     br
        //-     | 유저의 허락 없이 게시물을 올리지 않습니다.
</template>

<script>
export default {
  created(){
    this.signupFrm = new FormData();
  },
  data(){
    return {
      user_id: '',
      password: '',
      password_2: '',
      e_mail: '',
      check_box: false,
      signupFrm : null,
    }
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
    userID(e){
      this.user_id = e.target.value
    },
    checkbox(e){
      this.check_box = !this.check_box
    },
    userNickname(e){
      this.user_nickname = e.target.value
    },
    // submit

    submitSignup(){
      if(!this.user_id.length || this.userID_check === true){
        window.alert('아이디를 확인해주세요.');
        document.getElementById("user-userID").focus();
        return
      }
      if(!this.user_nickname.length || this.user_nickname_check === true){
        window.alert('닉네임을 확인해주세요.');
        document.getElementById('user-nickname').focus();
        return
      }
      if(!this.e_mail.length || this.email_check === true){
        window.alert('이메일을 확인해주세요.');
        document.getElementById("user-email").focus();
        return;
      }
      if(!this.password.length){
        window.alert('비밀번호를 확인해주세요.');
        document.getElementById("user-password").focus();
        return;
      }
      if(!this.password_2.length || this.pw_check === true){
        window.alert('비밀번호 확인란을 확인해주세요.');
        document.getElementById("user-password-2").focus();
        return;
      }
      if(this.toggle_checkbox === true){
        window.alert('체크박스를 확인해주세요.');
        document.getElementById("check_box").focus();
      }
      this.signupFrm.append('username', this.user_id);
      this.signupFrm.append('email', this.e_mail);
      this.signupFrm.append('password', this.password);
      this.signupFrm.append('confirm_password', this.password);
      this.signupFrm.append('nickname', this.user_nickname);
      this.signupSubmit();
    },
    signupSubmit(){
      this.$http.post(this.$store.state.member.signup, this.signupFrm)
      .then(response => {
        if(response.status === 201){
          this.$router.push('/signin');
        }
      })
      .catch(error => {
        console.log('회원가입 실패',error);
        switch(error.status){
          case 400:
            window.alert('회원가입이 불가 합니다.')
            break;
        }
      })
    }
  },
  computed:{
    pw_check(){
      return (this.password === this.password_2) ? false : true
    },
    user_nickname_check(){
      let pattern = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{6,12}$/;
      if(this.user_nickname === ''){
        return false
      }
      return !pattern.test(this.user_nickname);
    },
    email_check(){
      let regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if(this.e_mail === ''){
        return false
      }
      return !regex.test(this.e_mail); 
      },
    toggle_checkbox(){
      if(this.check_box === true){
        return false
      } else{
        return true
      }
    },
    userID_check(){
      let pattern = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{6,12}$/;
      if(this.user_id === ''){
        return false
      }
      return !pattern.test(this.user_id);
    }
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