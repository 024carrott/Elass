<template lang="pug">
  .col.col-d-5.col-d-offset-3.col-t-4.col-m-4.col-d-pull-2.col-t-pull-2
    .search-wrap
      input.search(type="search" placeholder="검색어를 입력하세요")
      a.search-btn.ion-search(href="#" role="button" aria-label="검색")
</template>

<script>
export default {
  name: 'search-bar',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  @import "~default";
  .search-wrap{
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 5px;
    position: relative;
  }
  .search{
    width: 90%;
    height: 42px;
    padding-left: 10px;
  }
  .search-btn{
    font-size: 3rem;
    color: #bbc0d4;
    position: absolute;
    bottom: -5px;
    right: 5px;
  }
</style>
