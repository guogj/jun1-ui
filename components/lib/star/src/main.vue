<template>
  <div>
    <div
      v-for="index in maxValue"
      :key="index"
      @click="chooseHandle($event, index)"
      class="iconfont icon-star star-item star-placeholder"
    >
      <div
        class="iconfont icon-star star-item star-active"
        :style="{ width: getWidth(index), color: activeColor }"
      />
    </div>
    <span class="star-value" :style="{ color: activeColor }">
      {{ starValue }}
    </span>
  </div>
</template>

<script>

export default {
  name: "jun-star",
  data() {
    return {
      value: this.defaultValue || 0,
    };
  },
  props: {
    defaultValue:{
      type: Number,
      default: 5,
    },
    maxValue: {
      type: Number,
      default: 5,
    },
    activeColor: {
      type: String,
      default: "#ff7e28",
    },
  },
  computed: {
    starValue() {
      return this.value.toFixed(1);
    },
  },
  methods: {
    getWidth(index) {
      const gap = (this.value - index + 1).toFixed(1);
        if(gap >= 1) {
        return "100%";
      } else if (gap <= 0) {
        return 0;
      } else if(gap > 0 && gap <0.4) {
          return (Number(gap)+0.1) * 100 + "%";
      }else if(gap >= 0.8 && gap <=0.9) {
          return (Number(gap)-0.1) * 100 + "%";
      }else  {
        return gap * 100 + "%";
      }
    },
    chooseHandle(e, index) {
       const width = e.currentTarget.offsetWidth;
       this.value = index + e.offsetX / width - 1;
       this.$emit('getValue',this.value.toFixed(1))
    },
    mousemoveStarItem(e, index) {
      console.log(e, index)
      const width = e.currentTarget.offsetWidth;
      this.value = index + e.offsetX / width - 1;
    },
  },
};
</script>
