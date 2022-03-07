<template>
  <div class="m-dialog-mask">
    <div class="m-modal">
      <div class="m-modal-content">
        <div @click="onClose" class="u-close">×</div>
        <div class="m-header">
          <div class="u-head">{{ title }}</div>
        </div>
        <div class="m-modal-body">
          <p class="u-font-1">{{ content }}</p>
          <button class="u-confirm" @click="onClose" v-if="mode==='default'">{{ confirmBtnTxt }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'jun-tip',
  props: {
    title: { // 标题
      type: String,
      default: '温馨提示'
    },
    confirmBtnTxt: { // 标题
      type: String,
      default: '我知道了'
    },
    content: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    onClose () {
      this.$emit('close')
    },
    onContinue (val) {
      this.$emit('close', val)
    }
  }
}
</script>
<style lang="less" scoped>
.m-dialog-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100000;
  background: rgba(0,0,0,0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  .m-modal {
    width: 540px;
    margin: 0 auto;
    color: rgba(0,0,0,.65);
    .m-modal-content {
      position: relative;
      background: #fff;
      border-radius: 4px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,.1);
      .u-close {
        position: absolute;
        top: 20px;
        right: 24px;
        color: rgba(0,0,0,.45);
        font-size: 26.5px;
        line-height: 16px;
        cursor: pointer;
        transition: color .3s;
        &:hover {
          color: rgba(0,0,0,.75);
        }
      }
      .m-header {
        padding: 17.5px 24px;
        background: #fff;
        border-bottom: 1px solid #EDEDED;
        border-radius: 4px 4px 0 0;
        .u-head {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
          color: #444444;
          line-height: 25px;
          height: 25px;
        }
      }
      .m-modal-body {
        padding: 50px 0 40px;
        font-size: 0;
        .u-font-1 {
          margin: 0 32px 50px;
          // text-align: center;
          font-size: 18px;
          font-weight: 400;
          color: #444444;
          line-height: 25px;
        }
        .u-confirm {
          width: 140px;
          height: 42px;
          background: #0079DD;
          border-radius: 3px;
          line-height: 40px;
          font-size: 18px;
          font-weight: 400;
          color: #FFFFFF;
          border: 1px solid #0079DD;
          transition: all .3s cubic-bezier(.645,.045,.355,1);
          cursor: pointer;
          &:hover {
            opacity: 0.9;
          }
        }
        .u-cancel {
          margin-left: 10px;
          width: 130px;
          height: 42px;
          background: #FFFFFF;
          border-radius: 3px;
          border: 1px solid #487AB6;
          color: #0079DD;
          font-size: 16px;
          font-weight: 400;
          line-height: 42px;
          transition: all .3s cubic-bezier(.645,.045,.355,1);
          cursor: pointer;
          &:hover {
            color: #fff;
            background: #0079DD;
          }
        }
      }
    }
  }
}
</style>
