<template lang="pug">
  button(aria-label="페이지 최상단으로 이동").topbutton
    span.ion-chevron-up
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  @import '~default';
  .topbutton{
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
</style>


