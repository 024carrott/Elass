<template lang="pug">
  .col.col-d-8.col-t-5.col-m-4
    .lecture-carousel
      slot
      button(type="button" class="carousel-btn is-prev" @click="prevItem")
        img(src='https:icon.now.sh/chevron/32/007aff/left' alt='prev item')
      button(type="button" class="carousel-btn is-next" @click="nextItem")
        img(src='https:icon.now.sh/chevron/32/007aff/right' alt='next item')
      .carousel-indicators
        a(href role="tab" @click.prevent="gotoItem(n)" v-for="n in itemCount" :class="{'is-active': active_index === n-1}")
          img(:src="activeIndexSrc(n)" :alt="activeIndexAlt(n)")
</template>

<script>
export default {
  name: 'lecture-carousel',
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    this.items.forEach((item, i) => {
      item.index = i;
    })
  },
  data () {
    return {
      active_index: this.index,
      items: this.$children
    }
  },
  computed: {
    itemCount(){
      return this.items.length;
    }
  },
  methods: {
    activeIndexSrc(n){
      let path = this.active_index === n - 1 ? 'lens' : 'panorama_fish_eye'
      return `https://icon.now.sh/${path}/22/007aff`;
    },
    activeIndexAlt(n){
      let message = this.active_index === n - 1 ? `현재 이미지 ${n}번` : `${n}번 이미지 보기`
      return message;
    },
    prevItem(){
      if (--this.active_index < 0){
        this.active_index = this.itemCount - 1;
      }
    },
    nextItem(){
      if (++this.active_index >= this.itemCount){
        this.active_index = 0;
      }
    },
    gotoItem(n){
      this.active_index = n - 1;
    }
  }
}
</script>

<style lang="sass">
  @import "~default"
  .lecture-carousel
    position: relative
    height: 450px
    width: 100%
    overflow: hidden
  .carousel-btn
    top: 50%
    transform: translateY(-50%)
    position: absolute
    border: none
    background: transparent
    opacity: 0.4
    transition: opacity 0.4s
    outline: none
    border: none
    img
      outline: none
      border: 0
    &:hover
      opacity: 1
    &.is-prev
      left: 20px
    &.is-next
      right: 20px
  .carousel-indicators
    z-index: 1
    position: absolute
    left: 50%
    transform: translateX(-50%)
    bottom: 20px
    a
      margin:
        left: 4px
        right: 4px
      &.is-active
        cursor: default
</style>
