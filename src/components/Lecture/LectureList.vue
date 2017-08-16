<template lang="pug">
main
  .container.health-image.mt-1
  .container.mt-2
  .grid
    .col.col-d-2.col-t-2.col-m-1.col-d-offset-2
      .box
        select.select-box(title="search-select")
          option(value="all" selected) 전체
          option(value="lecture-name") 강의명 
          option(value="teacher-name") 강사명
          option(value="lecture-location") 지역
    .col.col-d-5.col-t-5.col-m-2
      .list-search-wrap
        input.list-search(type="search" placeholder="검색어를 입력하세요")
    .col.col-d-1.col-t-1.col-m-1
      button.list-search-btn(role="button" aria-label="검색") 검색
  .container.category-container.mt-2
    .grid
      h2.a11y-hidden 강의 카테고리
    .grid.category-btns.is-small
      a(href="all" role="button" aria-label="전체 카테고리 보기").ion-android-done-all
        br
        small 전체 보기
      a(href="hbn" role="button" aria-label="헬스 뷰티 카테고리 보기").ion-ios-pulse-strong
        br
        small 헬스&amp;뷰티
      a(href="com" role="button" aria-label="컴퓨터 카테고리 보기").ion-mouse
        br
        small 컴퓨터
      a(href="lang" role="button" aria-label="외국어 카테고리 보기").ion-earth
        br
        small 외국어
      a(href="mna" role="button" aria-label="음악 미술 카테고리 보기").ion-ios-musical-notes
        br
        small 음악&sol;미술
      a(href="sports" role="button" aria-label="스포츠 카테고리 보기").ion-ios-football
        br
        small 스포츠
      a(href="hobby" role="button" aria-label="이색취미 카테고리 보기").ion-planet
        br
        small 이색취미

  .container.mt-2
    .grid
      .col
        h2 헬스 & 뷰티
        p.text 총 {{this.lectures.length}} 개의 강의가 등록되어 있습니다.

  .container
    .grid
      .col.col-d-2.col-t-2.col-m-1.col-d-offset-10.col-t-offset-6.col-m-offset-3
        .box
          select.select-box(title="search-select")
            option(value="new" selected) 신규등록순
            option(value="average") 평점높은순
    ul.grid.lecture-list
      lecture-list-item(
        v-for="(lecture, index) in lectures"
        key="index"
        :lecture="lecture"
        :index="index"
        v-if="index < visible_item"
        ) 
  .grid
      .col.col-d-2.col-d-offset-5.col-t-4.col-t-offset-2.col-m-4
        a(
          href role="button" aria-label="강의 리스트 더 불러오기"
          @click.prevent="loadLecture"
          v-if="visible_item < lectures.length"
        ).lecture-list-more-btn 강의 더 보기
  top-button
</template>

<script>
import LectureListItem from './LectureListItem';
import TopButton from '../TopButton';
export default {
  created () {
    const data_url = 'https://elass-6ad68.firebaseio.com/elass.json';
    this.$http.get(data_url)
    .then((response) => {
      let res_data = response.data;
      this.lectures = res_data;
    });
  },
  data () {
    return {
      lectures: [],
      category : this.$route.params.category,
      visible_item: 6
    }
  },
  methods: {
    loadLecture() {
      this.visible_item += 6;
    }
  },
  components: {
    TopButton, LectureListItem
  }
}
</script>


<style lang="scss">
@import '~default';
  .container.category-container{
    .category-btns{
      display: flex;
      justify-content: space-between;
      & > a {
        border: 1px solid #bbc0d4;
        display: inline-block;
        text-align: center;
      }
      @include breakpoint(desktop){ 
        & > a {
          width: 160px;
          font-size: 3rem;
          padding: 10px 0;
          line-height: 30px;
        }
      }
      @include breakpoint(tablet){ 
        & > a {
          width: 33.33%;
          font-size: 3rem;
          padding: 50px 0;
          line-height: 35px;
        }
        &.is-small > a {
          padding: 25px 0;
        }
        & > a:first-child{
          width: 100%;
        }
        flex-wrap: wrap;
      }
      @include breakpoint(mobile){ 
        & > a {
          width: 50%;
          font-size: 3rem;
          padding: 20px 0;
          line-height: 50px;
        }
        &.is-small > a {
          padding: 10px 0;
        }
        & > a:first-child{
          width: 100%;
        }
        flex-wrap: wrap;
      }
      & > a:hover, & > a:focus {
        background-color: #007aff;
        color: #fff;
      }
      & > a > small {
        font-size: 1.8rem;
      }
    }
  }
  .lecture-list-more-btn{
    display: block;
    position: relative;
    font-size: 0;
    border: 1px solid #bbc0d4;
    line-height: 40px;
    width: 100%;
    margin-top: 30px;
    text-align: center;
    overflow: hidden;
    &::before{
      content: '';
      background-color: #007aff;
      position: absolute;
      transform: translateX(-50%);
      margin-left: 50%;
      height: 100%;
      width: 0;
      left: 0;
      transition: width 0.4s;
    }
    &::after{
      content: '강의 더 보기';
      position: absolute;
      font-size: 1.4rem;
      width: 100%;
      display: block;
      left: 0;
      top: 0;
    }
    &:hover{
      border: 1px solid #bbc0d4;
      color: #fff;
      &::before{
        width: 100%;
      }
      &::after{
        color: #fff;
      }
    }
  }
</style>
