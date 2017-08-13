<template lang="pug">
  #app(v-cloak)
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

<style lang="scss">
  @import "~default";
  [v-cloak]{
    display: none;
  }
</style>
