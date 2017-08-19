<template lang="pug">
    main
      .container.mt-1(v-if="is_loaded").top-bd
        .grid.mt-2
          .col
            h2 마이페이지
        .grid.mt-2
          .col.col-d-4.col-t-3.col-m-4
            .my-info
              img(:src="userpic")
              br
              label.a11y-hidden(for="user-profile") 사진 등록/수정하기
              input.input-file(type="file" name="user-profile" id="user-profile")
              br
              span {{ userid }}
              br
              a.btn-white.is-small(role="button" @click.prevent="toggleEditMyInfo" href) 비밀번호 변경
          .col.col-d-8.col-t-5.col-m-4
            .mypage-menu-group
              .mypage-menu-listener
                h3.a11y-hidden 리스너 메뉴
                .btn-group.left
                  a.btn-white(href="/mypage/mylecturelist" role="button") 내가 수강한 강의
                  a.btn-white(href="/mypage/myfavoritelist" role="button") 내가 찜한 강의
              .mypage-menu-tutor
                h3.a11y-hidden 튜터 메뉴
                .btn-group.left
                  a.btn-gray(role="button" @click.prevent="toggleEnrollTutor" href) 튜터 등록하기
                  a.btn-white(href="/mypage/registeredclass" role="button") 내가 등록한 강의
                  a.btn-white(href="/mypage/registerclass" role="button") 강의 등록하기
      //- '내 정보 수정하기' 버튼 클릭시 is-active 클래스 추가
      .modal(role="dialog" :class="{'is-active':edit_modal_view}")
          .modal-background
          .modal-content
              //- 창 닫기 버튼 클릭 시 modal 각체에 is-active 클래스 제거
              a.modal-close.ion-close(role="button" href aria-label="창 닫기" @click.prevent="toggleEditMyInfo")
              h4 비밀번호 변경
              form.my-info-edit
                img.my-photo(:src="userpic")
                br
                .input-fileds.mt-1
                  label(for="user-old-password") 현재 비밀번호
                  input(type="text" name="user-old-password" id="user-old-password" v-model="oldpassword")
                  br
                  label(for="user-password") 새 비밀번호
                  input(type="text" name="user-password" id="user-password" @input="pw")
                  br
                  label(for="user-password-re") 비밀번호 확인
                  input(type="text" name="user-password-re" id="user-password-re" @input="pw_2")
                  br
                  span.show.col(v-show="pw_check") * 비밀번호가 일치하지 않습니다.
                .btn-group.mt-1
                  a.btn-submit(role="button" href) 변경하기
                  a.btn-white(role="button" @click.prevent="toggleEditMyInfo" href) 취소
      //- '튜터 등록하기' 버튼 클릭 시 is-active 클래스 추가
      .modal(role="dialog" :class="{'is-active':tutor_modal_view}")
          .modal-background
          .modal-content
              //- 창 닫기 버튼 클릭 시 modal 각체에 is-active 클래스 제거
              a.modal-close.ion-close(role="button" href aria-label="창 닫기" @click.prevent="toggleEnrollTutor")
              h4 튜터 등록하기
              form.tutor-info-edit
                label(for="user-name") 경력사항
                textarea(placeholder="경력사항을 입력하세요." aria-label="튜터 경력사항")
                br
                label(for="user-email") 자기소개
                textarea(placeholder="자기소개를 입력하세요" aria-label="튜터 자기소개")
              .btn-group.mt-1
                a.btn-submit.is-small(role="button" href) 저장하기
                a.btn-white.is-small(role="button" @click.prevent="toggleEnrollTutor" href) 취소        
</template>

<script>
export default {
  created(){
    this.$http.get(this.$store.state.member.profile, {headers:{Authorization:this.$store.getters.token}}).then((response) => {
      this.user = response.data;
      this.is_loaded = true;
      this.userid = this.user.nickname;
      this.userpic = this.user.my_photo;      
    }).catch(error=>{
      console.log(error);
      this.is_loaded = true;
    });
  },
  data(){
    return {
      user: null,
      userid: '',
      userpic:'',
      oldpassword:'',
      password: '',
      password_2: '',
      edit_modal_view: false,
      tutor_modal_view: false, 
      is_loaded: false,
    }
  },
  
  methods:{
    pw(e){
      this.password = e.target.value
    },
    pw_2(e){
      this.password_2 = e.target.value
    },
    toggleEditMyInfo(){
      this.edit_modal_view = !this.edit_modal_view
    },
    toggleEnrollTutor(){
      this.tutor_modal_view = !this.tutor_modal_view
    }
  },
  computed:{
    pw_check(){
      return (this.password === this.password_2) ? false : true
    },
  }
}
</script>


<style lang="sass">
  @import "~default";
  .my-info
    text-align: center
    img
      width: 60%
      border-radius: 50%
      margin-bottom: 5px
  .mypage-menu-group
    & > div
      margin: 30px 0
  .my-info-edit
    text-align: center
  .my-photo
    width: 250px
    border-radius: 50%
  .input-file
    width: 200px
  .input-fileds
    min-width: 500px
    max-width: 600px
    margin: $leading auto
    label
      display: inline-block
      width: 30%
      font-size: 1.8rem
      line-height: 2
      margin-bottom: $leading / 2
    input
      height: $leading * 2
      width: 66%
      border: 1px solid #dcdcdc
      margin-bottom: $leading / 2
  .tutor-info-edit
    label
      display: inline-block
      font-size: 1.6rem
      margin-top: $leading
    textarea
      width: 100%
      height: $leading * 8
  .show
    color: red
    display: inline-block
    width: 100%
    text-indent: 30%
    text-align: left
  
</style>
