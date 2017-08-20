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
              //- br
              //- label.a11y-hidden(for="user-profile") 사진 등록/수정하기
              //- input.input-file(type="file" name="user-profile" id="user-profile")
              br
              span {{ userid }} 
                a(href aria-label="내정보 수정하기" role="button" @click.prevent="")
                  i.fa.fa-edit 
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
                .input-fileds.mt-1
                  label(for="cert_type") 인증 타입
                  select.select-box-tutor(title="cert_type" id="type" @change="type" :value="tutor_type")
                    option(value="university" selected) 대학 인증
                    option(value="graduate-school") 대학원 인증
                    option(value="identity") 신분증 인증
                  label(for="school") 학교 이름
                  input(type="text" name="school" id="school" @input="school" :value="tutor_school")
                  br
                  label(for="major") 전공
                  input(type="text" name="major" id="major" @input="major" :value="tutor_major")
                  br
                  label(for="status_type") 상태
                  select.select-box-tutor(title="status" @change="status" :value="tutor_status")
                    option(value="nothing" selected) ------
                    option(value="ing") 재학
                    option(value="graduate") 졸업
                    option(value="complet") 수료
                  br
                  label(for="my_photo") 프로필 사진
                  input(type="file" name="my_photo" id="my_photo" @change="photo")
                  br
                  label(for="nickname") 닉네임
                  input(type="text" name="nickname" id="nickname" @input="nick_name" :value="tutor_nick_name")
                  br
                  label(for="phone") 핸드폰 번호
                  input(type="text" name="phone" id="phone" @input="phone" :value="tutor_phone")
              .btn-group.mt-1
                a.btn-submit.is-small(role="button" href @click.prevent="submitTutor") 저장하기
                a.btn-white.is-small(role="button" @click.prevent="toggleEnrollTutor" href) 취소        
</template>

<script>
export default {
  created(){
    this.$http.get(this.$store.state.member.profile+this.$store.state.userInfo+'/', {headers:{Authorization:this.$store.getters.token}}).then((response) => {
      this.user = response.data;
      this.is_loaded = true;
      this.userid = this.user.nickname;
      this.userpic = this.user.my_photo;
      this.mypageFrm.append('Authorization', '5c2f739fb5f30eb3de8078434192de391b316595')           
    }).catch(error=>{
      console.log(error);
      this.is_loaded = true;
    });
    this.mypageFrm = new FormData();
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
      tutor_type: '',
      tutor_school: '',
      tutor_major: '',
      tutor_status: '',
      tutor_photo: '',
      tutor_nick_name: '',
      tutor_phone: '',
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
    },

    // tutor
    type(e){
      this.tutor_type = e.target.value
    },
    school(e){
      this.tutor_school = e.target.value
    },
    major(e){
      this.tutor_major = e.target.value
    },
    status(e){
      this.tutor_status = e.target.value
      
    },
    photo(e){
      this.tutor_photo = e.target.files
    },
    nick_name(e){
      this.tutor_nick_name = e.target.value
    },
    phone(e){
      this.tutor_phone = e.target.value
    },

    // submit

    submitTutor(){
      if(!this.tutor_type.length){
        window.alert('인증 타입을 확안해주세요');
        document.getElementById("type").focus();
        return
      }
      if(!this.tutor_major.length){
        window.alert('전공을 확인해주세요');
        document.getElementById("major").focus();
        return
      }
      if(!this.tutor_status.length){
        window.alert('상태를 확인해주세요');
        document.getElementById("status").focus();
        return
      }
      if(!this.tutor_photo.length){
        window.alert('프로필 사진을 확인해주세요');
        document.getElementById("my_photo").focus();
        return
      }
      if(!this.tutor_nick_name.length){
        window.alert('닉네임을 확인해주세요');
        document.getElementById("nickname").focus();
        return
      }
      if(!this.tutor_phone.length){
        window.alert('핸드폰 번호를 확인해주세요');
        document.getElementById("phone").focus();
        return
      }
      this.mypageFrm.append('cert_type', this.tutor_type);
      this.mypageFrm.append('major', this.tutor_major);
      this.mypageFrm.append('status_type', this.tutor_status);
      this.mypageFrm.append('my_photo', this.tutor_photo);
      this.mypageFrm.append('nickname', this.tutor_nick_name);
      this.mypageFrm.append('phone', this.tutor_phone);
      this.mypageSubmit();
    },
    mypageSubmit(){
      this.$http.post(this.$store.state.lecture.regist, this.mypageFrm)
      .then(response => {
        if(response.status === 200){
          this.$router.push('/');
        }
      })
      .catch(error => {
        console.log('튜터등록 실패', error);
        switch(error.status){
          case 400:
            window.alert('튜터등록이 불가 합니다.')
            break;
        }
      })
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

  .select-box-tutor
    width: 66%
    height: $leading * 2
    padding-left: 10px
    font-size: 1.4rem
    color: #181818
    border: 1px solid #dcdcdc
    background-color: #fff

  
</style>
