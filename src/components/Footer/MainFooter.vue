<template lang="pug">
  footer
    .container.footer.mt-2
      SignUpBanner
      .grid
        .col.col-d-4.col-d-offset-4.col-t-4.col-t-offset-2.col-m-4
          button.sign-up-button(type="button") 회원가입 하러 가기
    .container.copyright
      .grid
        .col.col-d-6.col-d-offset-3
          p.copyright1 Copyright since &copy; 2017 All rights reserved by Jisu Kim , Hyejin.Cha , Jina Lee
</template>

<script>
import SignUpBanner from './SignUpBanner';
export default {
  components: {
    SignUpBanner: SignUpBanner
  },
  name: 'footer',
  data () {
    return {
      
    }
  }
}
</script>
