<template lang="pug">
  main
    .slogan-container
      h1.slogan 새로운거 배울땐 엘라스!
      h2.sub-text 나에게 딱! 맞는 강의를 찾아보세요.
      
    .container.video-img.mt-1
      video(autoplay loop muted)
        source(src="../../assets/main-video.mp4" type="video/mp4")
        source(src="../../assets/main-video.webm" type="video/webm")

    //- 인기 강의
    lecture-carousel
    
    .container
      .grid  
        .col.col-d-2.col-d-offset-5.col-t-4.col-t-offset-2.col-m-4
          a(href="lecturelist/all" role="button" aria-label="인기 강의 리스트 페이지로 이동하기").favorite-list-more-btn 강의 더 보기
    //- 카테고리
    .container.category-container.mt-2
      .grid
        h2.a11y-hidden 강의 카테고리
      .grid.category-btns
        a(href="lecturelist/all" role="button" aria-label="전체 카테고리 보기").ion-android-done-all
          br
          small 전체 보기
        a(href="lecturelist/hbn" role="button" aria-label="헬스 뷰티 카테고리 보기").ion-ios-pulse-strong
          br
          small 헬스&amp;뷰티
        a(href="lecturelist/com" role="button" aria-label="컴퓨터 카테고리 보기").ion-mouse
          br
          small 컴퓨터
        a(href="lecturelist/lang" role="button" aria-label="외국어 카테고리 보기").ion-earth
          br
          small 외국어
        a(href="lecturelist/mna" role="button" aria-label="음악 미술 카테고리 보기").ion-ios-musical-notes
          br
          small 음악&sol;미술
        a(href="lecturelist/sports" role="button" aria-label="스포츠 카테고리 보기").ion-ios-football
          br
          small 스포츠
        a(href="lecturelist/hobby" role="button" aria-label="이색취미 카테고리 보기").ion-planet
          br
          small 이색취미

    .container.main-banner-bottom.mt-2
      .grid.main-banner-paragh
            p
              span 당신이 배우고 싶은것, 무엇이든 
                strong 엘라스
                | 에 있습니다.
    //- 수강생 리뷰
    reviews
    //- 탑버튼
    top-button
</template>

<script>
import LectureCarousel from '../LectureCarousel';
import Reviews from './Reviews';
import TopButton from '../TopButton'
export default {
  name: 'main',
  components: {
    LectureCarousel,  Reviews, TopButton
  },
}
</script>

<style lang="scss">
  @import "~default";
  
  .slogan-container{
    height: auto;
    position: absolute;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;
    margin-left: 50%;
    top: 340px;
    @include breakpoint(tablet){
      top: 8%;
    };
    @include breakpoint(mobile){
      top: 5%;
    };
    left: 0;
    .slogan{
      @include breakpoint(desktop){
        font-size: 5.5rem
      };
      @include breakpoint(tablet){
        font-size: 4.2rem
      };
      @include breakpoint(mobile){
        font-size: 2.4rem
      };
    }
    .sub-text{
    @include breakpoint(desktop){
      font-size: 2.0rem;
      }
    @include breakpoint(tablet){
      font-size: 1.6rem;
      }
    @include breakpoint(mobile){
      font-size: 1.4rem;
      }
    }
  }
  
  .video-img{
    max-height: 580px;
    overflow: hidden;
    video{
      width: 100%;
    }
  }
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
  .main-banner-bottom{
    position: relative;
    width: 100%;
    height: 450px;
    background: url('../../assets/main/banner.jpg') 0 0/cover;
    background-position: 0 10%;
  }
  .main-banner-paragh{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    p{
      color: #fff;
      text-align: center;
      font-weight: 700;
      font-size: 1.6rem;
    }
    span{
      font-size: 3.3rem;
      strong{
        color: #99ccff;
      }
    }
  }
</style>
