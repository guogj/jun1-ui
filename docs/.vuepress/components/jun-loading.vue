<template>
  <div class="m-loading-box">
    <div class="first-loading-wrp">
        <div class="loading-wrp">
          <span class="dot dot-spin"><i></i><i></i><i></i><i></i></span>
        </div>
        <div>{{title}}</div>
        <div style="display: flex; justify-content: center; align-items: center;"></div>
      </div>
      
  </div>
</template>
<script>
export default {
  name: 'jun-loading',
  props:{
      title: {
          type: String,
          default: '加载中.....'
      }
  }
}
</script>
<style lang="scss">
@import './css/loading.scss';
</style>
