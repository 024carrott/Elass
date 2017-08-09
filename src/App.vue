<template lang="pug">
  #app
    main-header
    router-view
    main-footer
</template>

<script>
import MainHeader from './components/Header/MainHeader';
import MainFooter from './components/Footer/MainFooter';

export default {
  components: {
    MainHeader, MainFooter
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
  @import "~default";

</style>
