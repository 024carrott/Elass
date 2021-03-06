<template lang="pug">
main
  .container.mt-2
  .grid
    .col.col-d-5.col-d-offset-3.col-t-7.col-m-3
      .list-search-wrap
        input.list-search(type="search" placeholder="검색어를 입력하세요" v-model="search_query")
    .col.col-d-1.col-t-1.col-m-1
      button.list-search-btn(role="button" @click.prevent="search" aria-label="검색") 검색
  .container.category-container.mt-2
    .grid
      h2.a11y-hidden 강의 카테고리
    .grid.category-btns.is-small
      a(
        href="all"
        role="button"
        aria-label="전체 카테고리 보기"
        :class="[category === 'all' ? 'selected-category' : '']"
        ).ion-android-done-all
        br
        small 전체 보기
      a(
        href="hbn"
        role="button"
        aria-label="헬스 뷰티 카테고리 보기"
        :class="[category === 'hbn' ? 'selected-category' : '']"
        ).ion-ios-pulse-strong
        br
        small 헬스&amp;뷰티
      a(
        href="com"
        role="button"
        aria-label="컴퓨터 카테고리 보기"
        :class="[category === 'com' ? 'selected-category' : '']"
        @click="sortLectures(category)"
        ).ion-mouse
        br
        small 컴퓨터
      a(
        href="lang"
        role="button"
        aria-label="외국어 카테고리 보기"
        :class="[category === 'lang' ? 'selected-category' : '']"
        ).ion-earth
        br
        small 외국어
      a(
        href="mna"
        role="button"
        aria-label="음악 미술 카테고리 보기"
        :class="[category === 'mna'? 'selected-category' : '']"
        ).ion-ios-musical-notes
        br
        small 음악&sol;미술
      a(
        href="sports"
        role="button"
        aria-label="스포츠 카테고리 보기"
        :class="[category === 'sports' ? 'selected-category' : '']"
        ).ion-ios-football
        br
        small 스포츠
      a(
        href="hobby"
        role="button"
        aria-label="이색취미 카테고리 보기"
        :class="[category === 'hobby' ? 'selected-category' : '']"
        ).ion-planet
        br
        small 이색취미

  .container.mt-2
    .grid
      .col
        h2 {{setCategory}}
        p.text 총 {{lectures.length}} 개의 강의가 등록되어 있습니다.

  .container
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
    if(this.search_query.length){
      this.listFrm = new FormData();
      this.listFrm.append('search_text', this.search_query);
    }
    this.$http.post(this.$store.state.lecture.list, this.listFrm).then((response) => {
      let filteredLectures = [];
      let res_data = response.data;
      this.lectures = res_data;
      if (this.category !== 'all'){
        for (let i = 0, l = this.lectures.length; i < l; i++){
          if (this.lectures[i].category === this.category){
            filteredLectures.push(this.lectures[i]);
          }
        }
        this.lectures = filteredLectures;
      }
    });
  },
  data () {
    return {
      lectures: [],
      category : this.$route.params.category,
      set_category: '',
      search_query: this.$route.query.q || '',
      visible_item: 6,
      is_selected: false,
      listFrm: null,
    }
  },
  methods: {
    loadLecture() {
      this.visible_item += 6;
    },
    search(){
      window.location.replace('/lecturelist/'+ this.category+'?q='+ this.search_query);

    }
  },
  components: {
    TopButton, LectureListItem
  },
  computed: {
    setCategory(){
      switch (this.category){
        case "all" : this.set_category = '전체 보기';
        break;
        case "hbn" : this.set_category = '헬스&뷰티';
        break;
        case "lang" : this.set_category = '외국어';
        break;
        case "com" : this.set_category = '컴퓨터';
        break;
        case "mna": this.set_category = '음악/미술';
        break;
        case "sports" : this.set_category = '스포츠';
        break;
        case "major" : this.set_category = '전공/취업';
        break;
        case "hobby" : this.set_category = '이색취미';
        break;
      }
      return this.set_category;
    }
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
  .selected-category{
    background: #007aff;
    color: #fff;
  }
</style>
