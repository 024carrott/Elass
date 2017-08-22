<template lang="pug">
  .container
    .grid
      .col.mt-2
        h2 회원님들의 생생한 후기
    ul.grid.main-review-list
      review-item(v-for="(review, index) in filtered_reviews" key="index" :review="review")
</template>

<script>
import ReviewItem from './ReviewItem';
export default {
  components: {
    ReviewItem: ReviewItem
  },
  name: 'reviews',
  created () {
    this.$http.post(this.$store.state.lecture.list).then((response) => {
      let recent_reviews = [];
      let res_data = response.data;
      for (let i = 0, l = res_data.length; i < l; i++){
        if (res_data[i].reviews.length > 0){
          for (let idx = 0, len = res_data[i].reviews.length; idx < len; idx++){
            recent_reviews.push(res_data[i].reviews[idx])
          }
        }
      }
      recent_reviews.sort(function(a, b){
        return b.id- a.id;
      });
      this.filtered_reviews = recent_reviews.splice(0, 4);
    });
  },
  data () {
    return {
      filtered_reviews: []
    }
  }
}
</script>

<style lang="scss">
  @import '~default';
  
</style>
