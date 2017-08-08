<template lang="pug">
    main
      .container.health-image.mt-1
      .container.mt-2
        .grid
          .col
            h2 마이페이지
        .grid.mt-2
          .col.col-d-4.col-t-3.col-m-4
            .my-info
              img(src="../../assets/mypage/user-profile.jpg")
              br
              span dfasdf1234
              br
              a.btn-white.is-small(role="button" href) 내 정보 수정하기
          .col.col-d-8.col-t-5.col-m-4
            .mypage-menu-group
              .mypage-menu-listener
                h3.a11y-hidden 리스너 메뉴
                .btn-group.left
                  router-link.btn-white(to="mypage/mylecturelist" role="button" href) 내가 수강한 강의
                  router-link.btn-white(to="mypage/myfavoritelist" role="button" href) 내가 찜한 강의
              .mypage-menu-tutor
                h3.a11y-hidden 튜터 메뉴
                .btn-group.left
                  a.btn-gray(role="button" href) 튜터 등록하기
                  router-link.btn-white(to="mypage/registeredclass" role="button" href) 내가 등록한 강의
                  router-link.btn-white(to="mypage/registerclass" role="button" href) 강의 등록하기
      .modal(role="dialog")
          .modal-background
          .modal-content
              a.modal-close.ion-close(role="button" href aria-label="창 닫기")
              h4 내 정보 수정하기
              form.my-info-edit
                img.my-photo(src="../../assets/mypage/user-profile.jpg")
                br
                label.a11y-hidden(for="user-profile") 사진 등록/수정하기
                input.input-file(type="file" name="user-profile" id="user-profile")
                .input-fileds.mt-1
                  label(for="user-name") 닉네임
                  input(type="text" name="user-name" id="user-name")
                  br
                  label(for="user-email") 이메일
                  input(type="text" name="user-email" id="user-email")
                  br
                  label(for="user-password") 비밀번호
                  input(type="text" name="user-password" id="user-password")
                  //- label(for="user-re-password") 비밀번호 재입력
                  //- input(type="text" name="user-re-password" id="user-re-password")
                .btn-group.mt-1
                  a.btn-submit(role="button" href) 저장하기
                  a.btn-white(role="button" href) 취소
      .modal(role="dialog")
          .modal-background
          .modal-content
              a.modal-close.ion-close(role="button" href aria-label="창 닫기")
              h4 튜터 등록하기
              form.tutor-info-edit
                label(for="user-name") 경력사항
                textarea(placeholder="경력사항을 입력하세요." aria-label="튜터 경력사항")
                br
                label(for="user-email") 자기소개
                textarea(placeholder="자기소개를 입력하세요" aria-label="튜터 자기소개")
              .btn-group.mt-1
                a.btn-submit.is-small(role="button" href) 저장하기
                a.btn-white.is-small(role="button" href) 취소        
</template>


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
</style>
