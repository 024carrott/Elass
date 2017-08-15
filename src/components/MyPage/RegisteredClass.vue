<template lang="pug">
main
  .container
    .grid.mt-2
      h2 내가 등록한 강의
      p.text.mt-1 총 {{this.lectures.length}}개의 강의를 등록 하였습니다.
    ul.grid.lecture-list
      lecture-list-item(
        v-for="(lecture, index) in lectures"
        key="index"
        :lecture="lecture"
        :index="index"
        v-if="index < 9"
        )
    .grid  
      .col.col-d-2.col-d-offset-5.col-t-4.col-t-offset-2.col-m-4
        a(href role="button" aria-label="강의 리스트 더 불러오기").lecture-list-more-btn 강의 더 보기
    top-button
</template>

<script>
import LectureListItem from '../Lecture/LectureListItem';
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
    }
  },
  components: {
    TopButton, LectureListItem
  }
}
</script>

<style lang="scss">
 @import '~default';
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

