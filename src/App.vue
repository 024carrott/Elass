<template lang="pug">
  #app
    header
    main
      .container.main-banner-bottom
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
                  span.a11y-hidden 회원 별점 5점 만점에 4점
                  span.star.star-4(aria-hidden="true") &#9733;&#9733;&#9733;&#9733;&#9734;
                span.user-id @dfsd123

          li.col.col-d-3.col-t-4.col-m-4.mt-1
            article.main-review
              h4 퍼스널 트레이닝 좋아요.
              p 레슨 시작 전부터 박주형 강사님은 제가 궁금해 
              .main-review-member
                img(src="./assets/main/user-profile.jpg" class="user-profile-img")
                .star-rate
                  span.a11y-hidden 회원 별점 5점 만점에 4점
                  span.star.star-4(aria-hidden="true") &#9733;&#9733;&#9733;&#9733;&#9734;
                span.user-id @dfsd123

          li.col.col-d-3.col-t-4.col-m-4.mt-1
            article.main-review
              h4 퍼스널 트레이닝 좋아요.
              p 레슨 시작 전부터 박주형 강사님은 제가 궁금해 하는 사항에 대해 자세히 알려주셨어요. 운동하는 것 이외에 일상생활의식습관같은 사소한 부분까지 챙겨주셔서 정말 좋았습니다!
              .main-review-member
                img(src="./assets/main/user-profile.jpg" class="user-profile-img")
                .star-rate
                  span.a11y-hidden 회원 별점 5점 만점에 4점
                  span.star.star-4(aria-hidden="true") &#9733;&#9733;&#9733;&#9733;&#9734;
                span.user-id @dfsd123

          li.col.col-d-3.col-t-4.col-m-4.mt-1
            article.main-review
              h4 퍼스널 트레이닝 좋아요.
              p 레슨 시작 전부터 박주형 강사님은 제가 궁금해 하는 사항에 대해 자세히 알려주셨어요. 운동하는 것 이외에 일상생활의식습관같은 사소한 부분까지 챙겨주셔서 정말 좋았습니다!
              .main-review-member
                img(src="./assets/main/user-profile.jpg" class="user-profile-img")
                .star-rate
                  span.a11y-hidden 회원 별점 5점 만점에 4점
                  span.star.star-4(aria-hidden="true") &#9733;&#9733;&#9733;&#9733;&#9734;
                span.user-id @dfsd123

        button.main-list-arrow.arrow-prev
        button.main-list-arrow.arrow-next


    footer
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

  body
    margin: 0
  .main-banner-bottom
    position: relative
    width: 100%
    height: 231px
    background: url('./assets/main/banner.jpg') 0 0/cover
  .main-banner-paragh
    position: relative
    top: 50%
    transform: translateY(-50%)
    p
      color: #fff
      text-align: center
      font-weight: 700
      font-size: 1.6rem
    span
      font-size: 3.3rem
      // font-weight: 700
  .main-review
    position: relative
    width: 100%
    height: 274px
    overflow: hidden
    border: 1px solid #e6e6e6
    border-radius: 10px
    padding: $leading
    padding-bottom: $leading * 6
    h4
      color: #181818
      font-size: 1.8rem
    p
      color: #363636
      margin-top: $leading
  .main-review-member
    position: absolute
    left: 0
    right: 0
    bottom: 0
    background-color: #f7f7f7
    padding-left: 100px
    padding-top: $leading /2
    padding-bottom: $leading /2
    img
      position: absolute
      left: 8px
      bottom: 5px
      box-size: border-box
      width: 80px
      height: 80px
      border-radius: 40px
      border: 2px solid #dcdcdc
    .star
      font-size: 2.1rem
    .user-id 


</style>
