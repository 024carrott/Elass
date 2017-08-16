<template lang="pug">
    main(
      v-if="this.id === this.compareId"
    )
      .container.health-image.mt-1
      .container.mt-2
        .grid
          .col.class-title
            h2 {{this.showItem.title}}
            p {{this.showItem.category}}
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
                  img(:src="`http://lorempicsum.com/up/800/600/` + lecture_index" :alt="`${this.showItem.title} 이미지`")
          .col.col-d-4.col-t-3.col-m-4
            table.class-summary(summary="해당 강의에 대한 강의명, 수강료, 강사, 장소, 일시, 인원 정보")
              tr
                th 수강료
                td {{this.showItem.price}}
              tr
                th 강의명
                td {{this.showItem.title}}
              tr
                th 강사
                td {{this.showItem.tutor_intro}}
                  a.tutor.ion-link(href="" :aria-label="`${this.showItem.tutor_intro} 강사의 다른 강의 보기`")
              tr
                th 강의장소
                td {{lecturePlace}}
              tr
                th 강의일시
                td
                  time(datetime="2017-08-09 14:00")
                    | {{`매주 ${this.koreanDay}`}}
                    br
                    | {{lectureTime}}
              tr
                th 모집인원
                td
                  | {{`최소 ${this.showItem.min_member}명`}}
                  br
                  | {{`최대 ${this.showItem.max_member}명`}}
            .btn-group.mt-1
              a.btn-submit(role="button" href="") 수강 신청하기
              a.btn-white(role="button" href="") 강의 찜하기
        .grid
          .col 
            h3.mt-2.bb 상세 정보
            h4.mt-1 강의 정보
            p {{this.showItem.class_intro}}
            h4.mt-1 이런 분들이 들으시면 좋아요!
            p {{this.showItem.target_intro}}
            h3.mt-2.bb 튜터 소개
            p.mt-1 {{this.showItem.tutor_intro}}
        .grid.mt-2
          .col.col-d-2.col-d-offset-5.col-t-2.col-t-offset-3.col-m-2.col-m-offset-1
            a.btn-white.is-full.is-small(to="lecturelist" role="button" href="/lecturelist/all") 목록으로
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
                .star-rating
                  label(v-for="star_index in star_rating").star-rating-label
                    input(type="radio" name="star_rating" :value="star_index" :title="star_index" :aria-label="`${star_index}점`" @click.prevent="setRating(star_index, $event)")

              textarea(placeholder="평가 내용을 입력하세요. (최대 300자)" aria-label="강의 평가 내용")
              .btn-group
                a.btn-submit.is-small(role="button" href) 강의 평가 등록 하기
                //- a.btn-white.is-small(role="button") 취소        
</template>

<script>
export default {
  created () {
    const data_url = 'https://elass-6ad68.firebaseio.com/elass.json';
    this.$http.get(data_url)
    .then((response) => {
      let res_data = response.data;
      this.lectures = res_data;
      let title = [];
      let day = [];
      for (var i = 0, l = this.lectures.length; i < l; i++){
        title.push(this.lectures[i].title);
        day.push(this.lectures[i].locations[0].class_weekday);
      }
      this.lecture_day = day;
      this.lecture_title = title;
    });
  },
  data(){
    return {
      lectures: [],
      lecture: {},
      lecture_index: 0,
      lecture_title: [],
      lecture_day: [],
      id: this.$route.params.id,
      modal_view: false,
      star_rating: [5, 4, 3, 2, 1],
      selected_rating: 0
    }
  },
  methods: {
    setRating(index, e){
      this.selected_rating = index;
      let rating_btns = window.document.querySelectorAll('.star-rating-label');
      for (var i = 0, l = rating_btns.length; i < l; i++){
        if (rating_btns[i].classList.contains('selected') === true){
          rating_btns[i].classList.remove('selected');
        }
      }
      e.target.parentNode.classList.add('selected');
    },
    toggleReviewWrite(){
      this.modal_view = !this.modal_view;
      this.selected_rating = 0;
      let rating_btns = window.document.querySelectorAll('.star-rating-label');
      for (var i = 0, l = rating_btns.length; i < l; i++){
        if (rating_btns[i].classList.contains('selected') === true){
          rating_btns[i].classList.remove('selected');
        }
      }
    }
  },
  computed: {
    compareId(){
      for (var i = 0, l = this.lecture_title.length; i < l; i++){
        if (this.lecture_title[i] === this.id){
          return this.id;
        }
      }
    },
    koreanDay(){
      for (var i = 0, l = this.lecture_day.length; i < l; i++){
        switch(this.lecture_day[i]){
          case "sun" : this.lecture_day = "일요일";
          break;
          case "mon" : this.lecture_day = "월요일";
          break;
          case "tue" : this.lecture_day = "화요일";
          break;
          case "wed" : this.lecture_day = "수요일";
          break;
          case "thu" : this.lecture_day = "목요일";
          break;
          case "fri" : this.lecture_day = "금요일";
          break;
          case "sat" : this.lecture_day = "토요일";
          break;
        }
        return this.lecture_day
      }
    },
    lecturePlace(){
      let state = this.showItem.locations[0].location1;
      let city = this.showItem.locations[0].location2;
      let detail_location = this.showItem.locations[0].location_option;
      return `${state}시 ${city}구 ${detail_location}`;
    },
    lectureTime(){
      let start_time = '';
      let end_time = '';
      let time = this.showItem.locations[0].class_time.split('-');
      start_time = time[0];
      end_time = time[1];
      return `오전 ${start_time}시 ~ 오후 ${end_time}시`;
    },
    showItem(){
      for (var i = 0, l = this.lectures.length; i < l; i++){
        if (this.lectures[i].title === this.id){
          this.lecture = this.lectures[i];
          this.lecture_index = i + 1;
          return this.lecture;
        }
      }
    }
  }
}
</script>

<style lang="sass">
  @import "~default";

  .star-rating
    unicode-bidi: bidi-override
    direction: rtl
    width: 4em
    text-align: left
    input
      position: absolute
      left: -999999px
    label
      display: inline-block
      font-size: 0
      cursor: pointer
    > label:before
      position: relative
      display: block
      content: "\f005"
      font: 24px/1 FontAwesome
      color: #ccc
      background: -webkit-linear-gradient(-45deg, #d9d9d9 0%, #b3b3b3 100%)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
    > label:hover::before,
    > label:hover ~ label::before,
    > label.selected::before,
    > label.selected ~ label::before
      color: #f0ad4e
      background: -webkit-linear-gradient(-45deg, #007aff 0%, #007aff 100%)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
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
