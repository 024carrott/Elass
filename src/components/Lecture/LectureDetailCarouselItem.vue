<template lang="pug">
  transition(name="fade")
    .lecture-carousel-item(v-show="isVisible")
      slot
</template>

<script>
export default {
  name: 'lecture-carousel-item',
  data () {
    return {
      index: 0
    }
  },
  computed: {
    isVisible(){
      return this.$parent.active_index === this.index;
    }
  }
}
</script>

<style lang="sass">
  @import '~default'
  .lecture-carousel-item
    position: absolute
  .fade-enter,
  .fade-leave-to
    opacity: 0
  .fade-enter-active,
  .fade-leave-active
    transition: opacity 0.4s
</style>