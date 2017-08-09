<template lang="pug">
  footer.mt-3
    SignUpBanner
    .container.footer
      .grid
        .col.col-d-6.col-d-offset-3
          p.copyright Copyright since &copy; 2017 All rights reserved by Jisu Kim , Hyejin.Cha , Jina Lee
</template>

<script>
import SignUpBanner from './SignUpBanner';
export default {
  components: {
    SignUpBanner
  },
  name: 'footer',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  @import '~default';
  .footer{
    background-color: #363636;
  }
  .copyright{
    font-weight: 200;
    color: #f7f7f7;
    line-height: 300px;
    text-align: center;
  }
</style>
