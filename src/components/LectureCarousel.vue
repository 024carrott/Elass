<template lang="pug">
  .container.favorite-lecture-container
    .grid
      h2.col.col-d-4.col-d-push-4 오늘의 인기 강의
    .grid.favorite-lecture
      ul.favorite-lecture-items
        lecture-item
        lecture-item
        lecture-item
    .prev-next-btns
      a(href role="button" aria-label="이전 리스트 보기").prev-list-btn.ion-chevron-left
      a(href role="button" aria-label="다음 리스트 보기").next-list-btn.ion-chevron-right
    .grid  
      .col.col-d-2.col-d-offset-5.col-t-4.col-t-offset-2.col-m-4
        a(href role="button" aria-label="인기 강의 리스트 페이지로 이동하기").favorite-list-more-btn 인기 강의 더 보기
</template>

<script>
import LectureItem from './LectureItem';
export default {
  components: {
    LectureItem: LectureItem
  },
  name: 'lecture-carousel',
  data () {
    return {
      
    }
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
  .favorite-lecture-items{
    @extend %clearfix;
    .favorite-lecture-item{
      overflow: hidden;
      border-radius: 10px 10px;
      border: 1px solid #e6e6e6;
      height: 370px;
      position: relative;
    }
    .favorite-lecture-tag{
      display: inline-block;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 15px;
      text-align: center;
      position: absolute;
      color: #fff;
      top: 30px;
      left: 30px;
      line-height: 25px;
      width: 70px;
    }
    .favorite-lecture-image{
      a{
        display: block;
        height: 230px;
        width: 100%;
        overflow: hidden;
        img{
          height: auto;
          width: 100%;
        }
      }
    }
  }
  // 인기 강의 텍스트 컨텐츠
  .favorite-lecture-content{
    margin: 30px auto 0;
    width: 100%;
    padding: 0 32px;
    height: 72px;
    .favorite-lecture-title{
      height: 48px;
      font-size: 1.6rem;
    }
    .favorite-lecture-user{
      margin-top: 5px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
  // 인기 강의 좋아요 아이콘
  .favorite-like{
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    top: 190px;
    right: 32px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  }
  // 인기 강의 별점
  .star-rate{
    font-size: 2.2rem;
    .ion-ios-star{
      color: #f8d64e;

    }
    .ion-ios-star-outline{
      color: #bbc0d4;
    }
  }
  .favorite-star{
    @extend .star-rate;
    position: relative;
    display: flex;
    width: 70px;
    justify-content: space-around;
    margin: 0 auto;
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
