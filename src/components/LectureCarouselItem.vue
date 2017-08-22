<template lang="pug">
  li.col.col-d-4.col-t-4.col-m-4.lecture-item
    .favorite-lecture-item.mt-1
      span.favorite-lecture-tag {{koreanCategory}}
      .favorite-lecture-image
        a(:href="`lecturedetail/${class_item.id}`" :aria-label="`${class_item.title} 상세 페이지로 가기`")
          img(:src="class_item.cover_photo" :alt="`${class_item.title} 이미지`")
      dl.favorite-lecture-content
        dt.favorite-lecture-title {{class_item.title}}
        dd.favorite-lecture-user {{class_item.tutor_info.nickname}}
      a(v-if="is_like === false" href role="button" :aria-label="`${class_item.title} 좋아요`" @click.prevent="likeClass").favorite-like
        img(src="../assets/favorite-list/favorite-like-btn-off.png")
      a(v-else href role="button" :aria-label="`${class_item.title} 좋아요 취소`" @click.prevent="unlikeClass").favorite-like
        img(src="../assets/favorite-list/favorite-like-btn-on.png")
      .favorite-star(v-if="review_average")
        span.a11y-hidden {{parseInt(review_average)}}
        i(v-for="i in 5" :class="i <= parseInt(review_average) || 0 ? 'ion-ios-star': 'ion-ios-star-outline'")
      .favorite-star(v-else)
        span.a11y-hidden 평가 없음
        i.ion-ios-star-outline(v-for="i in 5")
</template>

<script>
export default {
  name: 'lecture-item',
  props: ['lecture', 'index', 'media'],
  created () {
    this.likeForm = new FormData();
  },
  mounted () {
    window.addEventListener('resize', this.resetPosition);
    let items = window.document.querySelectorAll('.lecture-item');
    if (this.media === 3){
      items[0].classList.add('alpha');
      items[1].classList.add('col-d-push-4');
      items[2].classList.add('col-d-push-8');
      items[3].classList.add('alpha');
      items[4].classList.add('col-d-push-4');
      items[5].classList.add('col-d-push-8');
      items[6].classList.add('alpha');
      items[7].classList.add('col-d-push-4');
      items[8].classList.add('col-d-push-8');
      return;
    } else if (this.media === 2){
      items[0].classList.add('alpha');
      items[1].classList.add('col-t-push-4');
      items[2].classList.add('alpha');
      items[3].classList.add('col-t-push-4');
      items[4].classList.add('alpha');
      items[5].classList.add('col-t-push-4');
      items[6].classList.add('alpha');
      items[7].classList.add('col-t-push-4');
      return;
    } else {
      for(let i = 0, l = items.length; i < l; i++){
        items[i].classList.add('alpha');
      }
      return;
    }
  },
  data(){
    return {
      lectures: this.$parent.$parent.lectures,
      class_item: this.lecture,
      active_index: this.index + 1,
      position: '',
      id: this.lecture.id,
      is_like: false,
      is_login: this.$store.getters.isLogIn,
    }
  },
  computed: {
    review_average(){
      return this.class_item.review_average.curriculum_rate || 0;
    },
    koreanCategory(){
      switch(this.class_item.category){
        case "hbn" : this.class_item.category = '헬스&뷰티';
        break;
        case "lang" : this.class_item.category = '외국어';
        break;
        case "com" : this.class_item.category = '컴퓨터';
        break;
        case "mna" : this.class_item.category = '음악/미술';
        break;
        case "sports" : this.class_item.category = '스포츠';
        break;
        case "major" : this.class_item.category = '전공/취업';
        break;
        case "hobby" : this.class_item.category = '이색취미';
        break;
      }
      return this.class_item.category;
    }
  },
  methods: {
    unlikeClass(){
      this.is_like = !this.is_like;
      window.alert('해당 강의를 찜목록에서 삭제 했습니다.')
    },
    likeClass(){
      if (!this.is_login){
        window.alert('로그인 후 이용할 수 있습니다.');
        return;
      }
      this.is_like = !this.is_like;
      if (this.is_like === true){
        this.likeForm.append('lecture_id', this.id);
        this.$http.post(this.$store.state.lecture.like, this.likeForm, {headers:{Authorization:this.$store.getters.token}})
        .then(response => {
          window.alert('해당 강의를 찜 했습니다.')
          return;
        });
      }
    },
    resetPosition(){
      let items = window.document.querySelectorAll('.lecture-item');
      if (this.media === 3){
        for(let i = 0, l = items.length; i < l; i++){
          if (items[i].classList.contains('alpha')){
            items[i].classList.remove('alpha')
          }
        }
        items[0].classList.add('alpha');
        items[1].classList.add('col-d-push-4');
        items[2].classList.add('col-d-push-8');
        items[3].classList.add('alpha');
        items[4].classList.add('col-d-push-4');
        items[5].classList.add('col-d-push-8');
        items[6].classList.add('alpha');
        items[7].classList.add('col-d-push-4');
        items[8].classList.add('col-d-push-8');
        return;
      } else if (this.media === 2){
        for(let i = 0, l = items.length; i < l; i++){
          if (items[i].classList.contains('alpha')){
            items[i].classList.remove('alpha')
          }
        }
        items[0].classList.add('alpha');
        items[1].classList.add('col-t-push-4');
        items[2].classList.add('alpha');
        items[3].classList.add('col-t-push-4');
        items[4].classList.add('alpha');
        items[5].classList.add('col-t-push-4');
        items[6].classList.add('alpha');
        items[7].classList.add('col-t-push-4');
        return;
      } else {
        for(let i = 0, l = items.length; i < l; i++){
          items[i].classList.add('alpha');
        }
        return;
      }
    }
  }
}
  
</script>

<style lang="scss">
  @import '~default';
  .favorite-lecture-item{
    overflow: hidden;
    border-radius: 10px 10px;
    border: 1px solid #e6e6e6;
    height: 370px;
    position: absolute;
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
    z-index: 1;
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    top: 190px;
    right: 50px;
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

.slide-prev-enter-active
  {animation: slide-prev-in 0.4s;}
.slide-prev-leave-active
  {animation: slide-prev-out 0.4s;}
.slide-next-enter-active
  {animation: slide-next-in 0.4s;}
.slide-next-leave-active
  {animation: slide-next-out 0.4s;}

@keyframes slide-prev-in{
  from
    {
      transform: translateX(-100%);
      opacity: 0;
    }
  to
    {
      transform: translateX(0%);
      opacity: 1;
    }
  }

@keyframes slide-prev-out{
  from
    {
      transform: translateX(0%);
      opacity: 1;
    }
  to
    {
      transform: translateX(100%);
      opacity: 0;
    }
  }

@keyframes slide-next-in{
  from
    {
      transform: translateX(100%);
      opacity: 0;
    }
  to
    {
      transform: translateX(0%);
      opacity: 1
    }
  }
    
@keyframes slide-next-out{
  from
    {
      transform: translateX(0%);
      opacity: 1;
    }
  to
    {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

</style>
