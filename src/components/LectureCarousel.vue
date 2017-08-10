<template lang="pug">
  .container.favorite-lecture-container
    .grid
      h2.col.col-d-4.col-d-push-4 오늘의 인기 강의
    .grid.favorite-lecture
      ul
        lecture-carousel-item(
          v-for="(lecture, index) in lectures"
          key="index" :lecture="lecture"
          v-show="index >= start_index && index <= end_index"
          :index="index"
        )
    .prev-next-btns
      a(href role="button" aria-label="이전 리스트 보기" @click.prevent="prevList").prev-list-btn.ion-chevron-left
      a(href role="button" aria-label="다음 리스트 보기" @click.prevent="nextList").next-list-btn.ion-chevron-right
    .grid  
      .col.col-d-2.col-d-offset-5.col-t-4.col-t-offset-2.col-m-4
        router-link(to="lecturelist" role="button" aria-label="인기 강의 리스트 페이지로 이동하기").favorite-list-more-btn 인기 강의 더 보기
</template>

<script>
import LectureCarouselItem from './LectureItem';

export default {

  name: 'lecture-carousel',
  created () {
    const data_url = 'https://elass-6ad68.firebaseio.com/elass.json';
    this.$http.get(data_url)
    .then((response) => {
      let res_data = response.data;
      this.lectures = res_data;
    });
  },
  components: { LectureCarouselItem },
  data () {
    return {
      screen_width : window.document.body.offsetWidth,
      lectures: [],
      start_index: 0,
      end_index: 2,
    }
  },
  computed: {
    media_count(){
      if(this.screen_width > 1079){ // Desktop
        return 3;
      }else if(this.screen_width > 767){ // Tablet
        return 2;
      }else{  // mobile
        return 1; 
      }
    }
  },
  methods: {
    prevList(){
      this.start_index--;
      this.end_index--;
    },
    nextList(){
      this.start_index++;
      this.end_index++;
    },
  }
}
</script>

<style lang="scss">
  @import '~default';
  // 인기 강의 컨테이너
  .favorite-lecture-container{
    margin-top: 40px;
    position: relative;
  }
  // 인기 강의 이전, 다음 버튼
  .prev-next-btns{
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 1230px;
    position: absolute;
    transform: translateX(-50%);
    margin-left: 50%;
    top: 250px;
    .prev-list-btn, .next-list-btn{
      font-size: 1.8rem;
      color: #bbc0d4;
    }
  }
  // 인기 강의 더 보기 버튼
  .favorite-list-more-btn{
    display: block;
    position: relative;
    font-size: 0;
    border: 1px solid #bbc0d4;
    // padding: 10px 20px;
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
      content: '인기 강의 더 보기';
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
