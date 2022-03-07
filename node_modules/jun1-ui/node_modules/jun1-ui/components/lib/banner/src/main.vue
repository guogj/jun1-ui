<template>
  <div class="g-global-banner" v-if="list.length">
    <ul class="m-banner-list">
      <li class="m-banner-item" v-for="(item, index) in list" :key="index" v-show="index===currentPageIndex" :class="list.length > 1 ? 'a-fadein' : ''"  :style="`background: url(${item.imageUrl}) no-repeat center;`">
        <a  v-if="item.jumpDetailUrl" :href="`${item.jumpDetailUrl}`" target="_blank" @mouseover="handleHover" @mouseout="handleOut"></a>
        <a  v-else href="javascript:;" @mouseover="handleHover" @mouseout="handleOut"></a>
      </li>
    </ul>
    <!-- banner只有1个时不显示小圆点 -->
    <ul class="m-dot-ul" v-if="list.length>1">
      <li v-for="(item, index) in list" :key="item.id" :class="{'m-dot-li': index !== currentPageIndex, 'm-dot-li-active': index === currentPageIndex}" @mouseenter="handleIn(index)" @mouseleave="handleOver">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'jun-banner',
  props: {
    list: Array,
    loop: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data () {
    return {
      currentPageIndex: 0,
      timer: null
    }
  },
  methods: {
    handleIn (index) {
      this.currentPageIndex = index
      clearInterval(this.timer)
    },
    handleOver () {
      this._initSlider()
    },
    _initSlider () {
      clearInterval(this.timer)
      // console.log(this.list)
      if (this.list && this.list.length > 1) {
        this.timer = setInterval(this._play, this.interval)
      }
    },
    _play () {
      this.currentPageIndex++
      if (this.currentPageIndex === this.list.length) {
        this.currentPageIndex = 0
      }
    },
    handleHover () {
      clearInterval(this.timer)
    },
    handleOut () {
      this._initSlider()
    }
  },
  mounted () {
    setTimeout(() => {
      this._initSlider()
    }, 1000)
  },
  beforeDestroy () {
    this.timer = null
  }
}
</script>

