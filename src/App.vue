<template lang="pug">
  #app
    header
      .container.mt-1
        .grid
          .col.col-d-2.col-t-2.col-m-2
            a
              img.logo-image(src="./assets/elass_logo.jpg", alt="로고 이미지")
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
      .container.video.mt-1
        video.main-video(autoplay loop)
          //- source(src="./assets/main-video.webm" type="video/webm")
          //- source(src="./assets/main-video2.mp4" type="video/mp4")
    main
      .container.favorite-lecture-container
        .grid
          h2.col.col-d-4.col-d-push-4 오늘의 인기 강의
        .grid.favorite-lecture
          ul.favorite-lecture-items
            //- 첫번째 아이템
            li.col.col-d-4.col-4.col-t-4.col-m-4
              .favorite-lecture-item.mt-1
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
                .favorite-star
                  span.a11y-hidden 강의평가 5점 만점에 4점
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star-outline
            //- 두번째 아이템
            li.col.col-d-4.col-4.col-t-4.col-m-4
              .favorite-lecture-item.mt-1
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
                .favorite-star
                  span.a11y-hidden 강의평가 5점 만점에 4점
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star-outline
            //- 세번째 아이템
            li.col.col-d-4.col-4.col-t-4.col-m-4
              .favorite-lecture-item.mt-1
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
                .favorite-star
                  span.a11y-hidden 강의평가 5점 만점에 4점
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star-outline
        .prev-next-btns
          a(href role="button" aria-label="이전 리스트 보기").prev-list-btn.ion-chevron-left
          a(href role="button" aria-label="다음 리스트 보기").next-list-btn.ion-chevron-right
        .grid  
          .col.col-d-2.col-d-offset-5.col-t-4.col-t-offset-2.col-m-4
            a(href role="button" aria-label="인기 강의 리스트 페이지로 이동하기").favorite-list-more-btn 인기 강의 더 보기
      .container.category-container
        .grid
          h2.a11y-hidden 강의 카테고리
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

      .container.main-banner-bottom.mt-2
        .grid.main-banner-paragh
              p
                span 나에게 딱 맞는 강의를 찾아드립니다.
                br
                | 그 정도로 집에서 놀꺼면 뭐라도 배워라.
                br
                | 주변에 재능기부로 호구짓하지말고 뭐라도 가르쳐라.
      .container
        .grid
          .col.mt-2
            h2 회원님들의 생생한 후기
        ul.grid.main-review-list
          li.col.col-d-3.col-t-4.col-m-4.mt-1
            article.main-review
              h4 퍼스널 트레이닝 좋아요.
              p 레슨 시작 전부터 박주형 강사님은 제가 궁금해 하는 사항에 대해 자세히 알려주셨어요. 운동하는 것 이외에 일상생활의식습관같은이외에 일상생활의식습관이외에 일상생활의식습관이외에 일상생활의식습관이외에 일상생활의식습관 사소한 부분까지 챙겨주셔서 정말 좋았습니다!
              .main-review-member
                img(src="./assets/main/user-profile.jpg" class="user-profile-img")
                .star-rate
                  span.a11y-hidden 강의평가 5점 만점에 4점
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star-outline
                span.user-id @dfsd123

          li.col.col-d-3.col-t-4.col-m-4.mt-1
            article.main-review
              h4 퍼스널 트레이닝 좋아요.
              p 레슨 시작 전부터 박주형 강사님은 제가 궁금해 
              .main-review-member
                img(src="./assets/main/user-profile.jpg" class="user-profile-img")
                .star-rate
                  span.a11y-hidden 강의평가 5점 만점에 4점
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star-outline
                span.user-id @dfsd123

          li.col.col-d-3.col-t-4.col-m-4.mt-1
            article.main-review
              h4 퍼스널 트레이닝 좋아요.
              p 레슨 시작 전부터 박주형 강사님은 제가 궁금해 하는 사항에 대해 자세히 알려주셨어요. 운동하는 것 이외에 일상생활의식습관같은 사소한 부분까지 챙겨주셔서 정말 좋았습니다!
              .main-review-member
                img(src="./assets/main/user-profile.jpg" class="user-profile-img")
                .star-rate
                  span.a11y-hidden 강의평가 5점 만점에 2점
                  i.ion-ios-star
                  i.ion-ios-star
                  i.ion-ios-star-outline
                  i.ion-ios-star-outline
                  i.ion-ios-star-outline
                span.user-id @dfsd123

          li.col.col-d-3.col-t-4.col-m-4.mt-1
            article.main-review
              h4 퍼스널 트레이닝 좋아요.
              p 레슨 시작 전부터 박주형 강사님은 제가 궁금해 하는 사항에 대해 자세히 알려주셨어요. 운동하는 것 이외에 일상생활의식습관같은 사소한 부분까지 챙겨주셔서 정말 좋았습니다!
              .main-review-member
                img(src="./assets/main/user-profile.jpg" class="user-profile-img")
                .star-rate
                    span.a11y-hidden 강의평가 5점 만점에 3점
                    i.ion-ios-star
                    i.ion-ios-star
                    i.ion-ios-star
                    i.ion-ios-star-outline
                    i.ion-ios-star-outline
                span.user-id @dfsd123
    footer
      .container.footer.mt-2
        .grid
          .col
            p.footer1 회원이 되시면 더 많은 서비스를 이용하실 수 있습니다.
        .grid
          .col.col-d-4.col-d-offset-4.col-t-4.col-t-offset-2.col-m-4
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
 
  .main-banner-bottom
    position: relative
    width: 100%
    height: 231px
    background: url('assets/main/banner.jpg') 0 0/cover

</style>
