<template lang="pug">
main
  .container
    .grid.mt-2
      h2 내가 등록한 강의
      p.text.mt-1 총 8개의 강의를 등록 하였습니다.
  .grid.lecture-list
    ul
      lecture-item
      lecture-item
      lecture-item
      lecture-item
      lecture-item
      lecture-item
    .grid  
      .col.col-d-2.col-d-offset-5.col-t-4.col-t-offset-2.col-m-4
        a(href role="button" aria-label="강의 리스트 더 불러오기").lecture-list-more-btn 강의 더 보기
</template>

<script>
import LectureItem from '../LectureItem'
export default {
  components: {
    LectureItem
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

