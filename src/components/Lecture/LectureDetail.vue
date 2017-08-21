<template lang="pug">
    main(v-if="is_loaded")
      .container.health-image.mt-1
      .container.mt-2
        .grid
          .col.class-title
            h2 {{lecture.title}}
            p {{koreanCategory}}
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
                  img(:src="lecture.lecture_photos[0].lecture_photo" :alt="`${lecture.title} 이미지`")
          .col.col-d-4.col-t-3.col-m-4
            table.class-summary(summary="해당 강의에 대한 강의명, 수강료, 강사, 장소, 일시, 인원 정보")
              tr
                th 수강료
                td {{`${lecture.price}원`}}
              tr
                th 강의명
                td {{lecture.title}}
              tr
                th 강사
                td {{lecture.tutor_intro}}
                  a.tutor.ion-link(href="" :aria-label="`${lecture.tutor_intro} 강사의 다른 강의 보기`")
              tr
                th 강의장소
                td {{lecturePlace}}
              tr
                th 강의일시
                td
                  time(datetime="2017-08-09 14:00")
                    | {{`매주 ${koreanDay}`}}
                    br
                    | {{lectureTime}}
              tr
                th 모집인원
                td
                  | {{`최소 ${lecture.min_member}명`}}
                  br
                  | {{`최대 ${lecture.max_member}명`}}
            .btn-group.mt-1
              a.btn-submit(role="button" href @click.prevent="registerClass") 수강 신청하기
              a.btn-white(v-if="is_like === false" role="button" href @click.prevent="likeClass") 강의 찜하기
              a.btn-white(v-else role="button" href @click.prevent="unlikeClass").unlike-class 강의 찜취소
        .grid
          .col 
            h3.mt-2.bb 상세 정보
            h4.mt-1 강의 정보
            p {{lecture.class_intro}}
            h4.mt-1 이런 분들이 들으시면 좋아요!
            p {{lecture.target_intro}}
            h3.mt-2.bb 튜터 소개
            p.mt-1 {{lecture.tutor_intro}}
        .grid.mt-2
          .col.col-d-2.col-d-offset-5.col-t-2.col-t-offset-3.col-m-2.col-m-offset-1
            a.btn-white.is-full.is-small(to="lecturelist" role="button" href="/lecturelist/all") 목록으로
          a.btn-white.is-small.ion-edit(role="button" href) 강의수정
        .grid(v-if="this.reviews.length > 0")
          h3.bb.mt-2 강의 평가 (총 {{this.reviews.length}}개의 평가가 있습니다.)
          .col
            .star-rate-average.mt-1
              .favorite-star.big
                  span.a11y-hidden 평균 평가 5점 만점에 {{averageRate}}점
                  i.ion-ios-star(v-for="(avr_star, index) in averageRate" aria-hidden="true" )
                  i.ion-ios-star-outline(v-for="empty_star in (5 - averageRate)" aria-hidden="true" )
                  span.is-small {{averageRate}}점 / 5점
              a.btn-write-review.btn-white.is-small.is-right(role="button" @click.prevent="toggleReviewWrite" href) 강의 평가하기
        .grid(v-else)
          h3.bb.mt-2 강의 평가 
          .col.empty-review.col-d-4.col-d-offset-4.mt-2 현재 등록된 강의 평가가 없습니다.
          a.col.col-d-2.col-d-offset-5.btn-write-review.btn-white.is-small.is-right(role="button" @click.prevent="toggleReviewWrite" href) 강의 평가하기
              
        .grid(v-if="this.reviews.length > 0")
          .col.mt-1
            ul
              li.review-content(v-for="(review,index) in reviews" v-if="index < visible_reviews")
                dl
                  dt 
                    //- img(:src="review.author.my_photo !== null ? review.author.my_photo : basic_my_photo")
                    img(v-if="review.author.my_photo !== null" :src="review.author.my_photo")
                    img(v-else src="../../assets/lecture/personal.png").basic-my-photo
                    br
                    span {{review.author.username}}
                    .favorite-star
                      span.a11y-hidden 5점 만점에 {{review.curriculum_rate}}점
                      i.ion-ios-star(v-for="(star, index) in review.curriculum_rate" aria-hidden="true")
                      i.ion-ios-star-outline(v-for="empty_star in (5 - review.curriculum_rate)" aria-hidden="true")
                  dd {{review.content}}
                  dd
                    time(datetime="2017-08-09 11:00") {{reviewYear[index]}} {{reviewDate[index]}}
              
        .grid.mt-1(v-if="this.reviews.length > 0")
          .col.col-d-2.col-d-offset-5.col-t-2.col-t-offset-3.col-m-2.col-m-offset-1
            a.btn-white.is-full.is-small(href role="button" v-if="visible_reviews < this.reviews.length" @click.prevent="viewReviewMore") 강의 평가 더보기

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

              textarea(placeholder="평가 내용을 입력하세요. (최대 300자)" aria-label="강의 평가 내용" v-model="review_content" @input="content")
              .btn-group
                a.btn-submit.is-small(href role="button" aria-label="강의 평가 등록 하기" @click.prevent="registerReview") 강의 평가 등록 하기
                //- a.btn-white.is-small(role="button") 취소
</template>

<script>
export default {
  created () {
    // 강의 데이터
    this.lectureDetailFrm = new FormData();
    this.lectureDetailFrm.append('lecture_id', this.id);
    this.lectureDetailFrm.append('state', 'activity');
    this.$http.post(this.$store.state.lecture.detail, this.lectureDetailFrm).then((response) => {
      this.lecture = response.data;
      this.is_loaded = true;
      if (this.lecture.reviews.length > 0){
        for (let i = 0, l = this.lecture.reviews.length; i < l; i++){
          this.reviews.push(this.lecture.reviews[i]);
        }
      }
    });
    this.reviewForm = new FormData();
    this.likeForm = new FormData();
  },
  data(){
    return {
      reviewForm: '',
      likeForm: '',
      is_loaded: false,
      lectureDetailFrm: null,
      lecture: {},
      lecture_day: '',
      id: this.$route.params.id,
      modal_view: false,
      star_rating: [5, 4, 3, 2, 1],
      selected_rating: 0,
      reviews: [],
      visible_reviews: 4,
      review_content: '',
      is_login: this.$store.getters.isLogIn,
      is_like: false,
    }
  },
  methods: {
    unlikeClass(){
      this.is_like = !this.is_like;
      window.alert('해당 강의를 찜목록에서 삭제 했습니다.')
    },
    likeClass(){
      if (!this.is_login){
        window.alert('로그인 후 이용할 수 있습니다.');
        return;
      }
      this.is_like = !this.is_like;
      if (this.is_like === true){
        this.likeForm.append('lecture_id', this.id);
        this.$http.post(this.$store.state.lecture.like, this.likeForm, {headers:{Authorization:this.$store.getters.token}})
        .then(response => {
          window.alert('해당 강의를 찜 했습니다.')
          return;
        });
      }
    },
    registerClass(){
      if (!this.is_login){
        window.alert('로그인 후 이용할 수 있습니다.');
        return;
      }
    },
    viewReviewMore(){
      this.visible_reviews += 4;
    },
    content(e){
      this.review_content = e.target.value;
    },
    registerReview(){
      this.reviewForm.append('lecture_id', this.id);
      this.reviewForm.append('curriculum_rate', this.selected_rating);
      this.reviewForm.append('delivery_rate', 1);
      this.reviewForm.append('preparation_rate', 1);
      this.reviewForm.append('kindness_rate', 1);
      this.reviewForm.append('punctually_rate', 1);
      this.reviewForm.append('content', this.review_content);
      this.sendReview();
    },
    sendReview(){
      this.$http.post(this.$store.state.lecture.review, this.reviewForm, {headers:{Authorization:this.$store.getters.token}})
      .then(response => {
        this.reviews.push({
          'curriculum_rate': this.selected_rating,
          'delivery_rate': 1,
          'preparation_rate': 1,
          'kindness_rate': 1,
          'punctually_rate': 1,
          'content': this.review_content
        });
        this.lectureDetailFrm.append('lecture_id', this.id);
        this.lectureDetailFrm.append('state', 'activity');
        this.$http.post(this.$store.state.lecture.detail, this.lectureDetailFrm).then((response) => {
          this.lecture = response.data;
          this.is_loaded = true;
          if (this.lecture.reviews.length > 0){
            this.reviews = this.lecture.reviews; 
          }
        });
        this.selected_rating = 0;
        this.review_content = '';
        this.modal_view = false;
      });
    },
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
      if (!this.is_login){
        window.alert('로그인 후 이용할 수 있습니다.');
        return;
      }
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
    averageRate(){
      let sum = 0;
      for (let i = 0, l = this.reviews.length; i < l; i++){
        sum += this.reviews[i].curriculum_rate;
      };
      return parseInt(sum / this.reviews.length);
    },
    reviewYear(){
      let convert_date = [], convert_years = [];
      for (let i = 0, l = this.reviews.length; i < l; i++){
        convert_date.push(this.reviews[i].modify_date);
      };
      for (let i = 0, l = this.reviews.length; i < l; i++){
        convert_years.push(convert_date[i].split('T')[0]);
      };
      return convert_years;
    },
    reviewDate(){
      let convert_date = [], convert_dates = [];
      for (let i = 0, l = this.reviews.length; i < l; i++){
        convert_date.push(this.reviews[i].modify_date);
      };
      for (let i = 0, l = this.reviews.length; i < l; i++){
        convert_dates.push(convert_date[i].split('T')[1].split('.')[0]);
      };
      return convert_dates;
    },
    koreanDay(){
      switch(this.lecture.locations[0].class_weekday){
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
    },
    koreanCategory(){
      switch(this.lecture.category){
        case "hbn" : this.lecture.category = '헬스&뷰티';
        break;
        case "lang" : this.lecture.category = '외국어';
        break;
        case "com" : this.lecture.category = '컴퓨터';
        break;
        case "mna" : this.lecture.category = '음악/미술';
        break;
        case "sports" : this.lecture.category = '스포츠';
        break;
        case "major" : this.lecture.category = '전공/취업';
        break;
        case "hobby" : this.lecture.category = '이색취미';
        break;
      }
      return this.lecture.category;
    },
    lecturePlace(){
      let state = this.lecture.locations[0].location1;
      let city = this.lecture.locations[0].location2;
      let detail_location = this.lecture.locations[0].location_option;
      return `${state}시 ${city}구 ${detail_location}`;
    },
    lectureTime(){
      let start_time = '';
      let end_time = '';
      let time = this.lecture.locations[0].class_time.split('-');
      start_time = time[0];
      end_time = time[1];
      return `오전 ${start_time}시 ~ 오후 ${end_time}시`;
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
    text-align: center
  .review-content
    clear: both
    border-top: 1px solid #f7f7f7
    padding: $leading
    dt
      float: left
      padding-right: $leading
      text-align: center
      img 
        box-sizing: border-box
        width: 80px
        height: 80px
        border-radius: 40px
        border: 2px solid #dcdcdc
      img.basic-my-photo
        box-sizing: border-box
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
  .empty-review
    font-weight: 200
    margin-bottom: 40px
    text-align: center
    font-size: 2.4rem
  .ion-ios-star
    color: #007aff
  a.unlike-class
    color: #007aff
    border: 1px solid #007aff
</style>
