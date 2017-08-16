<template lang="pug">
    main
      .container.health-image.mt-1
      .container.mt-2
        .grid
          .col.class-title
            h2 나도 바리스타 너도 바리스타 에블바디 바리스타
            p coffeecopy
        .grid.mt-1
          .col.col-d-8.col-t-5.col-m-4
            .carousel-container(role="region" aria-label="강의 이미지")
              ul.carousel-tab(role="tablist")
                li(role="presentation")
                  a.ion-record(role="tab" href="#lecture-image-0")
                li(role="presentation")
                  a.ion-ios-circle-outline(role="tab")
                li(role="presentation")
                  a.ion-ios-circle-outline(role="tab")
                li(role="presentation")
                  a.ion-ios-circle-outline(role="tab")
                li(role="presentation")
                  a.ion-ios-circle-outline(role="tab")
                li(role="presentation")
                  a.ion-ios-circle-outline(role="tab")
              .carousel-panels     
                section(id="lecture-image-0" role="tabpanel")
          .col.col-d-4.col-t-3.col-m-4
            table.class-summary(summary="해당 강의에 대한 강의명, 수강료, 강사, 장소, 일시, 인원 정보")
              tr
                th 수강료
                td 300,000 원
              tr
                th 강의명
                td 나도 바리스타 너도 바리스타 에블바디 바리스타
              tr
                th 강사
                td coffeecopy
                  a.tutor.ion-link(href="" aria-label="강사의 다른 강의 보기")
              tr
                th 강의장소
                td 서울시 강남구 테헤란로 123 오란다 빌딩 지하1층 101호
              tr
                th 강의일시
                td
                  time(datetime="2017-08-09 14:00") 2017년 8월 9일 오후 2시
              tr
                th 모집인원
                td 30명
            .btn-group.mt-1
              a.btn-submit(role="button" href="") 수강 신청하기
              a.btn-white(role="button" href="") 강의 찜하기
        .grid
          .col 
            h3.mt-2.bb 튜터 소개
            h4.mt-1 경력사항
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ab est aliquid quae tempora dolorum, magnam, vero. Odio voluptate culpa odit officiis quas, iure debitis molestias pariatur vel? Architecto, dolore.
            h4.mt-1 자기소개
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ab est aliquid quae tempora dolorum, magnam, vero. Odio voluptate culpa odit officiis quas, iure debitis molestias pariatur vel? Architecto, dolore.
            h3.mt-2.bb 상세 정보
            p.mt-1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi harum aliquam optio rem minima hic doloribus corporis, enim qui porro obcaecati, aut! Soluta iusto ipsam possimus enim! Explicabo saepe alias, tempore. Libero laudantium nesciunt corrupti tenetur, soluta blanditiis incidunt numquam!
        .grid.mt-2
          .col.col-d-2.col-d-offset-5.col-t-2.col-t-offset-3.col-m-2.col-m-offset-1
            router-link.btn-white.is-full.is-small(to="lecturelist" role="button" href) 목록으로
          a.btn-white.is-small.ion-edit(role="button" href) 강의수정
        .grid
          .col
            h3.bb.mt-2 강의 평가 
              span (총 6개의 평가가 있습니다.)
            .star-rate-average.mt-1
              .favorite-star.big
                  span.a11y-hidden 평균 평가 5점 만점에 4점
                  i.ion-ios-star(aria-hidden="true")
                  i.ion-ios-star(aria-hidden="true")
                  i.ion-ios-star(aria-hidden="true")
                  i.ion-ios-star(aria-hidden="true")
                  i.ion-ios-star-outline(aria-hidden="true")
                  span.is-small (3.9)
              a.btn-write-review.btn-white.is-small.is-right(role="button" @click.prevent="toggleReviewWrite" href) 강의 평가하기
        .grid
          .col.mt-1
            ul
              li.review-content
                dl
                  dt 
                    img(src="../../assets/main/user-profile.jpg")
                    br
                    span Daniel Cracker
                    .favorite-star
                      span.a11y-hidden 강의평가 5점 만점에 4점
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star-outline(aria-hidden="true")
                  dd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus recusandae quibusdam iste debitis exercitationem reprehenderit tempore praesentium modi illo officiis.
                  dd
                    time(datetime="2017-08-09 11:00") 2017-08-09 11:00
              li.review-content
                dl
                  dt 
                    img(src="../../assets/main/user-profile.jpg")
                    br
                    span Daniel Cracker
                    .favorite-star
                      span.a11y-hidden 강의평가 5점 만점에 4점
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star-outline(aria-hidden="true")
                  dd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus recusandae quibusdam iste debitis exercitationem reprehenderit tempore praesentium modi illo officiis.
                  dd
                    time(datetime="2017-08-09 11:00") 2017-08-09 11:00
              li.review-content
                dl
                  dt 
                    img(src="../../assets/main/user-profile.jpg")
                    br
                    span Daniel Cracker
                    .favorite-star
                      span.a11y-hidden 강의평가 5점 만점에 4점
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star-outline(aria-hidden="true")
                  dd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sunt blanditiis quia beatae perferendis perspiciatis doloribus delectus accusantium, nisi aut non atque error aliquid nesciunt consectetur laboriosam possimus hic obcaecati.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sed, ipsum quo pariatur odio harum culpa optio maiores sint velit officia dolor doloremque ex quas repellendus, iste, dolores mollitia quos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus recusandae quibusdam iste debitis exercitationem reprehenderit tempore praesentium modi illo officiis.
                  dd
                    time(datetime="2017-08-09 11:00") 2017-08-09 11:00
              li.review-content
                dl
                  dt 
                    img(src="../../assets/main/user-profile.jpg")
                    br
                    span Daniel Cracker
                    .favorite-star
                      span.a11y-hidden 강의평가 5점 만점에 4점
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star(aria-hidden="true")
                      i.ion-ios-star-outline(aria-hidden="true")
                  dd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus recusandae quibusdam iste debitis exercitationem reprehenderit tempore praesentium modi illo officiis.
                  dd
                    time(datetime="2017-08-09 11:00") 2017-08-09 11:00
        .grid.mt-1
          .col.col-d-2.col-d-offset-5.col-t-2.col-t-offset-3.col-m-2.col-m-offset-1
            a.btn-white.is-full.is-small(role="button" href) 강의 평가 더보기
        .modal(role="dialog" :class="{'is-active':modal_view}")
          .modal-background
          .modal-content
            .write-review
              a.modal-close.ion-close(@click.prevent="toggleReviewWrite" role="button" href aria-label="창 닫기")
              h4 강의 평가하기
              .favorite-star.big
                span.a11y-hidden 강의평가 별점
                //- radio 객체로 변경 https://codepen.io/chrisdpratt/pen/dmyne
                a.ion-ios-star-outline(aria-label="1점" href)
                a.ion-ios-star-outline(aria-label="2점" href)
                a.ion-ios-star-outline(aria-label="3점" href)
                a.ion-ios-star-outline(aria-label="4점" href)
                a.ion-ios-star-outline(aria-label="5점" href)
              textarea(placeholder="평가 내용을 입력하세요. (최대 300자)" aria-label="강의 평가 내용")
              .btn-group
                a.btn-submit.is-small(role="button" href) 강의 평가 등록 하기
                //- a.btn-white.is-small(role="button") 취소        
</template>

<script>
export default {
  data(){
    return {
      modal_view: false,
    }
  },
  methods: {
    toggleReviewWrite(){
      this.modal_view = !this.modal_view;
    }
  }
}
</script>

<style lang="sass">
  @import "~default";
  .class-title
    p
      text-align: center
      font-size: 1.6rem
  // 강의 이미지 캐러셀
  .carousel-container
    position: relative
    width: 100%
    overflow: hidden
  .carousel-tab
    position: absolute
    z-index: 100
    bottom: $leading
    display: flex
    left: 50%
    transform: translateX(-50%)
    li
      a
        padding: 5px
        margin: 0 5px
        font-size: 1.8rem
        color: #f7f7f7
  .carousel-panels
    width: 100%
    overflow: hidden
    section
      width: 100%
      height: $leading * 20
      background: url('../../assets/lecture/600_458045023.jpg') 50% 50% /cover
  // 강의 요약 테이블
  .class-summary
    tr:not(:last-child)
      height: $leading * 2
      border-bottom: 1px  solid #dcdcdc
    th, td
      padding: $leading/2 $leading
      .tutor
        margin: 3px
        padding: 5px
    th
      width: 30%
    td
      width: 70%
      font-size: 1.6rem
  .favorite-star.big
    font-size: 3rem
  .star-rate-average
    position: relative
  .btn-write-review
    position: absolute
    top: 0
    right: 0
  .review-content
    clear: both
    border-top: 1px solid #f7f7f7
    padding: $leading
    dt
      float: left
      padding-right: $leading
      img 
        box-sizing: border-box;
        width: 80px
        height: 80px
        border-radius: 40px
        border: 2px solid #dcdcdc
    dd
      time
        color: #696969
  .write-review
    textarea
      width: 100%
      height: $leading * 5
</style>
