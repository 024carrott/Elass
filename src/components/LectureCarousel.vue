<template lang="pug">
  .container.favorite-lecture-container
    .grid
      h2.col.col-d-4.col-d-push-4 오늘의 인기 강의
    transition-group(tag="ul" :name="anim_type" class="grid favorite-lecture")
      lecture-carousel-item(
        v-for="(lecture, index) in lectures"
        :key="index" :lecture="lecture"
        v-show="index >= start_index && index < end_index"
        :index="index"
        :media="media_count"
      )
    .prev-next-btns
      a(href role="button" aria-label="이전 리스트 보기" @click.prevent="prevList").prev-list-btn.ion-chevron-left
      a(href role="button" aria-label="다음 리스트 보기" @click.prevent="nextList").next-list-btn.ion-chevron-right
</template>

<script>
import LectureCarouselItem from './LectureCarouselItem';

export default {
  name: 'lecture-carousel',
  created () {
    this.$http.post(this.$store.state.lecture.list).then((response) => {
      let res_data = response.data;
      this.lectures = res_data;
      if (this.lectures.length > 9){
        this.lectures = this.lectures.slice(0, 9);
      }
    });
  },
  mounted () {
    window.addEventListener('resize', this.offsetWidth);
    window.addEventListener('resize', this.$children.resetPosition);
  },
  components: { 
    LectureCarouselItem
  },
  data () {
    return {
      direction: 'prev',
      screen_width: window.document.body.offsetWidth,
      lectures: [],
      start_index: 0,
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
    },
    end_index(){
      return this.start_index + this.media_count;
    },
    active_lecture(){
      if (this.media_count === 2){
        return this.lectures.length - 1;
      }
      return this.lectures.length;
    },
    anim_type(){
      return 'slide-' + this.direction;
    }
  },
  methods: {
    prevList(){
      this.direction = 'prev';
      this.end_index === this.media_count ? this.start_index = this.active_lecture - this.media_count : this.start_index -= this.media_count;
    },
    nextList(){
      this.direction = 'next';
      this.end_index >= this.active_lecture ? this.start_index = 0 : this.start_index += this.media_count;
    },
    offsetWidth(){
      this.screen_width = window.document.body.offsetWidth;
    },
  }
}
</script>

<style lang="scss">
  @import '~default';
  // 인기 강의 컨테이너
  .favorite-lecture-container{
    margin-top: 40px;
    height: 430px;
    position: relative;
    .favorite-lecture{
      height: 390px;
    }
  }
  // 인기 강의 이전, 다음 버튼
  .prev-next-btns{
    // margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @include breakpoint(desktop){
      width: 1150px;
    }
    @include breakpoint(tablet){
      width: 95%;
    }
    @include breakpoint(mobile){
      width: 90%;
    }
    position: absolute;
    transform: translateX(-50%);
    margin-left: 50%;
    top: 230px;
    .prev-list-btn, .next-list-btn{
      font-size: 1.8rem;
      color: #007aff;
      opacity: 0.4;
      transition: opacity 0.4s;
      &:hover{
        opacity: 1;
      }
      @include breakpoint(desktop){
        font-size: 2.8rem;
      }
      @include breakpoint(tablet){
        font-size: 3.0rem;
      }
      @include breakpoint(mobile){
        font-size: 4.0rem;
      }
    }
  }
  // 인기 강의 더 보기 버튼
  .favorite-list-more-btn{
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
