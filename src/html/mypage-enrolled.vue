<template lang="pug">
.container.category-list-container.mt-2
    .grid
        h2 내가 등록한 강의
        p.text.mt-1 총 3개의 강의를 등록 하였습니다.
    .grid.favorite-lecture
        ul.favorite-lecture-items
            li.col.col-d-4.col-4.col-t-4.col-m-4
                .favorite-lecture-item.mt-1
                    span.favorite-lecture-tag 이색취미
                    .favorite-lecture-image
                        a(href aria-label="나의 정원을 위한 가드닝 첫 걸음 상세 페이지로 가기")
                            img(src="../assets/favorite-list/favorite-list-img-01.jpg" alt="나의 정원을 위한 가드닝 첫 걸음")
                    dl.favorite-lecture-content
                        dt.favorite-lecture-title 나의 정원을 위한 가드닝 첫 걸음 나의 정원을 위한 가드닝 첫 걸음
                        dd.favorite-lecture-user @김꽃잎
                    a(href role="button" aria-label="나의 정원을 위한 가드닝 첫 걸음 강의 찜하기")
                    .favorite-like
                        //- 좋아요 클릭 off
                            img(src="../assets/favorite-list/favorite-like-btn-off.png")
                        //- 좋아요 클릭 on
                        img(src="../assets/favorite-list/favorite-like-btn-on.png")
                    .favorite-star
                        span.a11y-hidden 강의평가 5점 만점에 4점
                        i.ion-ios-star
                        i.ion-ios-star
                        i.ion-ios-star
                        i.ion-ios-star
                        i.ion-ios-star-outline
            li.col.col-d-4.col-4.col-t-4.col-m-4
                .favorite-lecture-item.mt-1
                    span.favorite-lecture-tag 헬스&amp;뷰티
                    .favorite-lecture-image
                        a(href aria-label="건강한 장수를 꿈꾸는 식단 상세 페이지로 가기")
                            img(src="../assets/favorite-list/favorite-list-img-02.jpg" alt="건강한 장수를 꿈꾸는 식단")
                    dl.favorite-lecture-content
                        dt.favorite-lecture-title 건강한 장수를 꿈꾸는 식단 건강한 장수를 꿈꾸는 식단
                        dd.favorite-lecture-user @나오래
                    a(href role="button" aria-label="건강한 장수를 꿈꾸는 식단 강의 찜하기")
                    .favorite-like
                        //- 좋아요 클릭 off
                                img(src="../assets/favorite-list/favorite-like-btn-off.png")
                        //- 좋아요 클릭 on
                        img(src="../assets/favorite-list/favorite-like-btn-on.png")
                    .favorite-star
                        span.a11y-hidden 강의평가 5점 만점에 4점
                        i.ion-ios-star
                        i.ion-ios-star
                        i.ion-ios-star
                        i.ion-ios-star
                        i.ion-ios-star-outline
            li.col.col-d-4.col-4.col-t-4.col-m-4
                .favorite-lecture-item.mt-1
                    span.favorite-lecture-tag 컴퓨터
                    .favorite-lecture-image
                        a(href aria-label="산으로 가지 않는 Vue.js 상세 페이지로 가기")
                            img(src="../assets/favorite-list/favorite-list-img-03.jpg" alt="산으로 가지 않는 Vue.js")
                    dl.favorite-lecture-content
                        dt.favorite-lecture-title 산으로 가지 않는 Vue.js
                        dd.favorite-lecture-user @yamoo9
                    a(href role="button" aria-label="산으로 가지 않는 Vue.js 강의 찜하기")
                    .favorite-like
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

    .grid  
        .col.col-d-2.col-d-offset-5.col-t-4.col-t-offset-2.col-m-4
            a(href role="button" aria-label="내가 등록한 강의 리스트 페이지로 이동하기").category-list-more-btn 강의 더 보기            
</template>

<style lang="sass">
@import '~default';

</style>