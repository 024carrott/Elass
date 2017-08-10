<template lang="pug">
  transition(name="fade")
    button(aria-label="페이지 최상단으로 이동" v-if="is_show" @click="goToTop").topbutton
      span.ion-chevron-up
</template>

<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.scrollPosition);
  },
  data () {
    return {
      scroll: window.scrollY,
      is_show: false
    }
  },
  methods: {
    scrollPosition(){
      this.scroll = window.scrollY;
      if (this.scroll > 700){
        this.is_show = true;
      } else {
        this.is_show = false;
      }
    },
    goToTop(){
      window.document.body.scrollTop = 0;
      window.document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style lang="scss">
  @import '~default';
  .topbutton{
    z-index: 1;
    border: 1px solid #007aff;
    background: transparent;
    position: fixed;
    bottom: 25%;
    right: 50px;
    width: 40px;
    height: 40px;
    .ion-chevron-up{
      font-size: 1.6rem;
      color: #007aff;
    }
  }

  .topbutton:hover{
    background: #007aff;
    .ion-chevron-up{
      color: #fff;
    }
  }

  .fade-enter,
  .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.4s;
  }
</style>


