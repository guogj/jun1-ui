<template>
  <ul class="m-select-box">
    <li class="m-select-item">
      <input
        class="u-select-value f14"
        :class="{'s-has-error': haserror}"
        type="text"
        readonly
        :placeholder="placeholder"
        @click="openSelect"
        @blur="onBlur"
        v-model="selectName" />
      <img @click="openSelect" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAAXNSR0IArs4c6QAAADZQTFRFAAAAXV1daWlpZGRkY2NjYmJiZ2dnaGhoZ2dnZmZmZmZmZmZmZ2dnZmZmZWVlZmZmZmZmZmZmIpRFAgAAABJ0Uk5TAAsRFx8nSlZXZHOCuMbJ0NfcM6xudwAAADdJREFUCB2NwYkRABAMAMHzi1//zTJGAdlFaUS+OAg78eQdwC/hkuW53CxQpuOxvdZu+UxrBr0DW58BJASsaZgAAAAASUVORK5CYII=" :class="['u-img1',{ 'u-img2': rotate }]" />
      <div :class="['m-options-box f16', showOptions ? 'show': 'hidden']" :style="`height: ${selectData.length * 40}px;`">
        <div class="m-options-item">
          <p class="u-option" @mousedown="getValue(item.name, item.value, index)" v-for="(item, index) in selectData" :key="index">
            {{ item.name }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'jun-select',
  props: {
    selectData: {
      type: Array,
      default: () => {
        return []
      }
    },
    haserror: {
      type: Boolean,
      default: false
    },
    selValue: {
        type: String,
        default: ''
    },
    fieldName: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  computed: {
    selectName () {
      let selName
      this.selectData.forEach(item => {
        if (item.value === this.selectValue) {
          selName = item.name
        }
      })
      return selName
    },
    selectValue: {
      get () {
        return this.selV
      },
      set (newVal) {
        this.selV = newVal
      }
    }
  },
  data () {
    return {
      selV: this.selValue,
      rotate: false,
      showOptions: false
    }
  },
  methods: {
    openSelect () {
      this.showOptions = !this.showOptions
      this.rotate = !this.rotate
      this.$emit('getState', this.showOptions)
    },
    getValue (name, value, index) {
      console.log('name:', name)
      this.selectValue = value
      console.log('selectName:', this.selectName)
      this.$emit('getValue', name, value, index, this.fieldName)
    },
    onBlur () {
      this.showOptions = false
      this.rotate = false
      this.$emit('getState', this.showOptions)
    }
  }
}
</script>
<style lang="less" scoped>
.m-select-box {
  list-style: none;
  width: 520px;
  height: 50px;
  background: transparent;
  
  .m-select-item {
    width: 520px;
    height: 50px;
    position: relative;
     input::-webkit-input-placeholder {
              font-size: 14px; color: #999;
            }
            input:-moz-placeholder {
              font-size: 14px; color: #999;
            }
            input::-moz-placeholder {
              font-size: 14px; color: #999;
            }
            input:-ms-input-placeholder {
              font-size: 14px; color: #999;
            }
    .u-select-value {
        outline: none;
      font-size: 16px;
      width: 520px;
      position: relative;
      z-index: 999;
      display: inline-block;
      color: #333;
      padding-top: 20px;
      height: 30px;
      line-height: 30px;
      cursor: pointer;
      border: none;
      border-bottom: 1px solid #E3E3E3;
    }
    .s-has-error {
      border-color: #dd0028;
    }
    .u-img1 {
      width: 12px;
      height: 12px;
      cursor: pointer;
      position: absolute;
      z-index: 1000;
      top: 24px;
      right: 10px;
      transition: transform 0.3s ease-in-out;
    }
    .u-img2 {
      transform: rotate(180deg);
    }
    .m-options-box {
      width: 100%;
      position: absolute;
      background: #FFFFFF;
      border-radius: 8px;
      border: 1px solid #E3E3E3;
      top: 56px;
      left: 0;
      z-index: 999;
      color: #333;
      .m-options-item {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        .u-option {
          margin: 0;
          height: 40px;
          line-height: 40px;
          padding: 0 15px;
          cursor: pointer;
        }
        .u-option:hover {
          color: #0079DD;
          background: #F2F4F6;
        }
      }
    }
  }
}
.show {
  display: block;
}
.hidden {
  display: none;
}
</style>
