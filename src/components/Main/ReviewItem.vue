<template lang="pug">
  li.col.col-d-3.col-t-4.col-m-4.mt-1
    article.main-review
      h4 {{review.author.nickname}}님의 리얼 후기
      p {{review.content}}
      .main-review-member
        img(v-if="review.author.my_photo !== null" :src="review.author.my_photo")
        img(v-else src="../../assets/lecture/personal.jpg")
        .star-rate
        .star-rate
          span.a11y-hidden 5점 만점에 {{review.curriculum_rate}}점
          i.ion-ios-star(v-for="(star, index) in review.curriculum_rate" aria-hidden="true")
          i.ion-ios-star-outline(v-for="empty_star in (5 - review.curriculum_rate)" aria-hidden="true")
        span.user-id {{review.author.nickname}}
</template>

<script>
export default {
  name: 'review-item',
  props: ['review'],
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
      border: 2px solid #aeaeae
    }
  }
</style>
