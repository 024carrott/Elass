<template lang="pug">
  li.col.col-d-4.col-4.col-t-4.col-m-4
    .favorite-lecture-item.mt-1
      span.favorite-lecture-tag 이색취미
      .favorite-lecture-image
        a(href aria-label="나의 정원을 위한 가드닝 첫 걸음 상세 페이지로 가기")
          img(src="../assets/favorite-list/favorite-list-img-01.jpg" alt="나의 정원을 위한 가드닝 첫 걸음")
      dl.favorite-lecture-content
        dt.favorite-lecture-title 나의 정원을 위한 가드닝 첫 걸음 나의 정원을 위한 가드닝 첫 걸음
        dd.favorite-lecture-user @김꽃잎
      a(href role="button" aria-label="나의 정원을 위한 가드닝 첫 걸음 강의 찜하기").favorite-like
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
  data () {
    return {
      
    }
  }
}
</script>
