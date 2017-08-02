<template lang="pug">
  #app
    header
      .container
        .grid
          .col.col-d-2
            a
              img.logo-image(src="./assets/elass_logo.jpg", alt="로고 이미지")
          .col.col-d-5.col-d-offset-3
            input.search(type="search" placeholder="  검색어를 입력하세요")
            button.search-button(type="button") 검색
          .col.col-d-1
            ul
              li.login
                a.log-in(href="#") 로그인
          .col.col-d-1
            ul
              li
                a.sign-up(href="#") 회원가입
      .container.video
        video.main-video(autoplay loop)
          source(src="./assets/main-video.webm" type="video/webm")
          source(src="./assets/main-video2.mp4" type="video/mp4")
      


      
        



    main
      .container.favorite-lecture-container
        .grid
          h2.col.col-d-4.col-d-push-4.favorite-lecture-header 오늘의 인기 강의
        .grid.favorite-lecture
          ul.favorite-lecture-items
            //- 첫번째 아이템
            li.col.col-d-4.col-4
              .favorite-lecture-item
                span.favorite-lecture-tag 이색취미
                .favorite-lecture-image
                  a(href aria-label="나의 정원을 위한 가드닝 첫 걸음 상세 페이지로 가기")
                    img(src="./assets/favorite-list/favorite-list-img-01.jpg" alt="나의 정원을 위한 가드닝 첫 걸음")
                dl.favorite-lecture-content
                  dt.favorite-lecture-title 나의 정원을 위한 가드닝 첫 걸음 나의 정원을 위한 가드닝 첫 걸음
                  dd.favorite-lecture-user @김꽃잎
                a(href role="button" aria-label="나의 정원을 위한 가드닝 첫 걸음 강의 찜하기").favorite-like
                  //- 좋아요 클릭 off
                  img(src="./assets/favorite-list/favorite-like-btn-off.png")
                  //- 좋아요 클릭 on
                  //- img(src="./assets/favorite-list/favorite-like-btn-on.png")
                ul.favorite-star
                  li
                    i.ion-ios-star
                  li
                    i.ion-ios-star
                  li
                    i.ion-ios-star
                  li
                    i.ion-ios-star
                  li
                    i.ion-ios-star-outline
            //- 두번째 아이템
            li.col.col-d-4.col-4
              .favorite-lecture-item
                span.favorite-lecture-tag 헬스&amp;뷰티
                .favorite-lecture-image
                  a(href aria-label="건강한 장수를 꿈꾸는 식단 상세 페이지로 가기")
                    img(src="./assets/favorite-list/favorite-list-img-02.jpg" alt="건강한 장수를 꿈꾸는 식단")
                dl.favorite-lecture-content
                  dt.favorite-lecture-title 건강한 장수를 꿈꾸는 식단 건강한 장수를 꿈꾸는 식단
                  dd.favorite-lecture-user @나오래
                a(href role="button" aria-label="건강한 장수를 꿈꾸는 식단 강의 찜하기").favorite-like
                  //- 좋아요 클릭 off
                  img(src="./assets/favorite-list/favorite-like-btn-off.png")
                  //- 좋아요 클릭 on
                  //- img(src="./assets/favorite-list/favorite-like-btn-on.png")
                ul.favorite-star
                  li
                    i.ion-ios-star
                  li
                    i.ion-ios-star
                  li
                    i.ion-ios-star
                  li
                    i.ion-ios-star
                  li
                    i.ion-ios-star-outline
            //- 세번째 아이템
            li.col.col-d-4.col-4
              .favorite-lecture-item
                span.favorite-lecture-tag 컴퓨터
                .favorite-lecture-image
                  a(href aria-label="산으로 가지 않는 Vue.js 상세 페이지로 가기")
                    img(src="./assets/favorite-list/favorite-list-img-03.jpg" alt="산으로 가지 않는 Vue.js")
                dl.favorite-lecture-content
                  dt.favorite-lecture-title 산으로 가지 않는 Vue.js
                  dd.favorite-lecture-user @yamoo9
                a(href role="button" aria-label="산으로 가지 않는 Vue.js 강의 찜하기").favorite-like
                  //- 좋아요 클릭 off
                  //- img(src="./assets/favorite-list/favorite-like-btn-off.png")
                  //- 좋아요 클릭 on
                  img(src="./assets/favorite-list/favorite-like-btn-on.png")
                ul.favorite-star
                  li
                    i.ion-ios-star
                  li
                    i.ion-ios-star
                  li
                    i.ion-ios-star
                  li
                    i.ion-ios-star
                  li
                    i.ion-ios-star-outline
        a(href role="button" aria-label="이전 리스트 보기").prev-list-btn.ion-chevron-left
        a(href role="button" aria-label="다음 리스트 보기").next-list-btn.ion-chevron-right
        a(href role="button" aria-label="인기 강의 리스트 페이지로 이동하기").favorite-list-more-btn 인기 강의 더 보기
      .container.category-container
        .grid
          h2.col.col-d-4.col-d-push-4.category-header 강의 카테고리
        .grid.category-btns
          a(href role="button" aria-label="전체 카테고리 보기").ion-android-done-all.category-btn-all
            br
            small 전체 보기
          a(href role="button" aria-label="헬스 뷰티 카테고리 보기").ion-ios-pulse-strong.category-btn-all
            br
            small 헬스&amp;뷰티
          a(href role="button" aria-label="컴퓨터 카테고리 보기").ion-mouse.category-btn-all
            br
            small 컴퓨터
          a(href role="button" aria-label="외국어 카테고리 보기").ion-earth.category-btn-all
            br
            small 외국어
          a(href role="button" aria-label="음악 미술 카테고리 보기").ion-ios-musical-notes.category-btn-all
            br
            small 음악&sol;미술
          a(href role="button" aria-label="스포츠 카테고리 보기").ion-ios-football.category-btn-all
            br
            small 스포츠
          a(href role="button" aria-label="이색취미 카테고리 보기").ion-planet.category-btn-all
            br
            small 이색취미

          
    footer
      .container.footer
        .grid
          .col.col-d-6.col-d-offset-3
            p.footer1 회원이 되시면 더 많은 서비스를 이용하실 수 있습니다.
          .col.col-d-4.col-d-offset-4
            button.sign-up-button(type="button") 회원가입 하러 가기

          
      .container.copyright
        .grid
          .col.col-d-6.col-d-offset-3
            p.copyright1 Copyright since &copy; 2017 All rights reserved by Jisu Kim , Hyejin.Cha , Jina Lee
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
  @import "~default";
 
  .container
    margin-top: 21px

  .logo-image
    height: 42px

  .search
    width: 80%
    border: 1px solid #999
    border-radius: 15px
    height: 42px

  .search-button
    width: 42px
    height: 42px
    border: 1px solid skyblue
    border-radius: 15px
    background-color: skyblue
    color: #fff

  .log-in, .sign-up
    display: inline-block
    line-height: 42px
    height: 42px
    padding-right: 0
    color: #333
  
  .log-in
    padding-left: 20px

  .video
    height: 609px
    background-color: skyblue
  
    

  .main-video
    height: 100%
    width: 100%

  .footer
    height: 231px
    background-color: #4facfe
    font-size: 2.6rem

  .footer1
    margin-top: 63px

  .sign-up-button
    width: 90%
    height: 63px
    margin-top: 21px
    background-color: #4facfe
    border: 2px solid #fff
    border-radius: 10px
    color: #fff
    font-size: 1.6rem
    

  .copyright
    height: 231px
    background-color: black
    color: #fff
    font-size: 1.5rem

  .copyright1
    backgroud-color: red
    margin-top: 210px
    margin-left: 20px
</style>
