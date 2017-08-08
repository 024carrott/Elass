<template lang="pug">
  main
    h1.slogan 새로운거 배울땐 엘라스!
    h2.sub-text 나에게 딱! 맞는 강의를 찾아보세요.
      
    .container.video-img.mt-1
      video(autoplay loop muted width="100%")
        source(src="../../assets/main-video.mp4" type="video/mp4")
        source(src="../../assets/main-video.webm" type="video/webm")

    //- 인기 강의
    lecture-carousel
    //- 카테고리
    .container.category-container.mt-2
      .grid
        h2.a11y-hidden 강의 카테고리
      .grid.category-btns
        a(href role="button" aria-label="전체 카테고리 보기").ion-android-done-all
          br
          small 전체 보기
        a(href role="button" aria-label="헬스 뷰티 카테고리 보기").ion-ios-pulse-strong
          br
          small 헬스&amp;뷰티
        a(href role="button" aria-label="컴퓨터 카테고리 보기").ion-mouse
          br
          small 컴퓨터
        a(href role="button" aria-label="외국어 카테고리 보기").ion-earth
          br
          small 외국어
        a(href role="button" aria-label="음악 미술 카테고리 보기").ion-ios-musical-notes
          br
          small 음악&sol;미술
        a(href role="button" aria-label="스포츠 카테고리 보기").ion-ios-football
          br
          small 스포츠
        a(href role="button" aria-label="이색취미 카테고리 보기").ion-planet
          br
          small 이색취미

    .container.main-banner-bottom.mt-2
      .grid.main-banner-paragh
            p
              span 나에게 딱 맞는 강의를 찾아드립니다.
              br
              | 그 정도로 집에서 놀꺼면 뭐라도 배워라.
              br
              | 주변에 재능기부로 호구짓하지말고 뭐라도 가르쳐라.
   
    //- 수강생 리뷰
    reviews

</template>

<script>
import LectureCarousel from '../LectureCarousel';
import Reviews from './Reviews';
export default {
  components: {
    LectureCarousel: LectureCarousel,
    Reviews: Reviews
  },
  name: 'main'
}
</script>

<style lang="scss">
  @import "~default";
  
  .slogan,
  .sub-text{
    text-align: center;
    display: inline-block;
    width: 100%;
    position: absolute;
    color: #fff;
  }
  .slogan{
    top: 40%;
    font-size: 5.5rem;
    font-weight: 700;
  }
  .sub-text{
    top: 49%;
    font-size: 2.0rem;
    font-weight: 200;
  }
  
  .video-img{
    height: 600px;
    width: 100%;
    min-width: 1200px;
    overflow: hidden;
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
    height: 231px;
    background: url('../../assets/main/banner.jpg') 0 0/cover;
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
    }
  }
</style>
