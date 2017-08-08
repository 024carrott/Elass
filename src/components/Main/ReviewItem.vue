<template lang="pug">
  li.col.col-d-3.col-t-4.col-m-4.mt-1
    article.main-review
      h4 퍼스널 트레이닝 좋아요.
      p 레슨 시작 전부터 박주형 강사님은 제가 궁금해 하는 사항에 대해 자세히 알려주셨어요. 운동하는 것 이외에 일상생활의식습관같은이외에 일상생활의식습관이외에 일상생활의식습관이외에 일상생활의식습관이외에 일상생활의식습관 사소한 부분까지 챙겨주셔서 정말 좋았습니다!
      .main-review-member
        img(src="../../assets/main/user-profile.jpg" class="user-profile-img")
        .star-rate
          span.a11y-hidden 강의평가 5점 만점에 4점
          i.ion-ios-star
          i.ion-ios-star
          i.ion-ios-star
          i.ion-ios-star
          i.ion-ios-star-outline
        span.user-id @dfsd123
</template>

<script>
export default {
  name: 'review-item',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  @import '~default';
  .main-review{
    position: relative;
    width: 100%;
    height: 274px;
    overflow: hidden;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    padding: $leading;
    padding-bottom: $leading * 6;
    p{
      color: #363636;
      margin-top: $leading;
    }
  }
  .main-review-member{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f7f7f7;
    padding-left: 100px;
    padding-top: $leading /2;
    padding-bottom: $leading /2;
    img{
      position: absolute;
      left: 8px;
      bottom: 5px;
      box-sizing: border-box;
      width: 80px;
      height: 80px;
      border-radius: 40px;
      border: 2px solid #dcdcdc;
    }
  }
</style>
