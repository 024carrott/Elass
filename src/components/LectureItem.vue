<template lang="pug">
  li.col.col-d-4.col-4.col-t-4.col-m-4
    .favorite-lecture-item.mt-1
      span.favorite-lecture-tag {{class_item.category}}
      .favorite-lecture-image
        a(href aria-label="나의 정원을 위한 가드닝 첫 걸음 상세 페이지로 가기")
          img(:src="`http://lorempicsum.com/up/627/500/` + active_index" :alt="`${class_item.title} 이미지`")
      dl.favorite-lecture-content
        dt.favorite-lecture-title {{class_item.title}}
        dd.favorite-lecture-user {{class_item.tutor_intro}}
      a(href role="button" :aria-label="`${class_item.title} 좋아요`").favorite-like
        //- 좋아요 클릭 off
        img(src="../assets/favorite-list/favorite-like-btn-off.png")
        //- 좋아요 클릭 on
        //- img(src="../assets/favorite-list/favorite-like-btn-on.png")
      .favorite-star
        span.a11y-hidden 강의평가 5점 만점에 4점
        i.ion-ios-star
        i.ion-ios-star
        i.ion-ios-star
        i.ion-ios-star
        i.ion-ios-star-outline
</template>

<script>
export default {
  name: 'lecture-item',
  data(){
    return {
      class_item : this.lecture,
      active_index: this.index + 1
    }
  },
  props: ['lecture', 'index'],
}
</script>

<style lang="scss">
  @import '~default';
  ul{
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
</style>
