<template lang="pug">
    #list
        header
            .container.mt-1
                .grid
                    .col.col-d-2.col-t-2.col-m-2
                        a
                            img.logo-image(src="/src/assets/elass_logo.jpg" alt="로고 이미지")
                    .col.col-d-2.col-t-2.col-m-1.col-d-push-8.col-t-push-4.col-m-push-1
                        ul.site-menu
                            li.login
                                a.log-in(href="#") 로그인
                            li
                                a.sign-up(href="#") 회원가입
                    .col.col-d-5.col-d-offset-3.col-t-4.col-m-4.col-d-pull-2.col-t-pull-2
                        .search-wrap
                            input.search(type="search" placeholder="검색어를 입력하세요")
                            a.search-btn.ion-search(href="#" role="button" aria-label="검색")
            .container.health-image.mt-1

        main
            .container.category-container.mt-2
                .grid
                    h2.a11y-hidden 강의 카테고리
                .grid.category-btns.is-small
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

            .container.mt-2
                .grid
                    .col.col-d-2.col-t-2.col-m-1.col-d-offset-2
                        .box
                            select.select-box(title="search-select")
                                option(selected) 강의명 
                                option 1
                                option 2
                                option 3
                                    
                    .col.col-d-5.col-t-5.col-m-2
                        .list-search-wrap
                            input.list-search(type="search" placeholder="검색어를 입력하세요")
                    .col.col-d-1.col-t-1.col-m-1
                        button.list-search-btn(role="button" aria-label="검색") 검색

            .container.mt-2
                .grid
                    .col
                        h2 헬스 & 뷰티
                        p.text 총 12,931 개의 강의가 등록되어 있습니다.

            .container
                .grid
                    .col.col-d-2.col-t-2.col-m-1.col-d-offset-10.col-t-offset-6.col-m-offset-3
                        .box
                            select.select-box(title="search-select")
                                option(selected) 신규등록순
                                option 인기순
                                option 이름순

            .container.category-list-container
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
                    a(href role="button" aria-label="헬스&뷰티 리스트 페이지로 이동하기").category-list-more-btn 강의 더 보기
        footer
            .container.copyright.category-copyright
                .grid
                    .col.col-d-6.col-d-offset-3
                        p.copyright1 Copyright since &copy; 2017 All rights reserved by Jisu Kim , Hyejin.Cha , Jina Lee        
</template>

<style lang="sass">
@import '~default';

.health-image
    height: 200px
    background-color: skyblue

.search-box
    width: 100px
    -webkit-appearance: none
    -moz-appearance: none
    appearance: none






</style>