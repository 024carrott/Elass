<template lang="pug">
  .container
    .grid
      .col.mt-2
        h2 회원님들의 생생한 후기
    ul.grid.main-review-list
      review-item
      review-item
      review-item
      review-item
</template>

<script>
import ReviewItem from './ReviewItem';
export default {
  components: {
    ReviewItem: ReviewItem
  },
  name: 'reviews',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  @import '~default';
  
</style>
