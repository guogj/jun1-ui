<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
     <jun-select :selectData="selectData" @getValue="selectValue" selValue="2" fieldName="jjj"></jun-select>
    <!-- <Demo></Demo> -->
    <!-- <jun-card></jun-card>
    <star :defaultValue="2.1" @getValue="getValueHandle">
      星星
    </star> -->
    <!-- <jun-tip @close="closeHandle" title="我都好得很" content="杀菌的故事" confirmBtnTxt="确认" v-if="show"/> -->
    <!-- <jun-banner :list="dataBanner"></jun-banner> -->
    <!-- <jun-loading title="请稍等..."/> -->
    <!-- <div class="u-big">
    
    <div class="u-loading">
      <loading/>
    </div>
    </div> -->
 
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      show: true,
      selectData:[{
                name: 'zhang',
                value: '1'
              },
              {
                name: 'liu',
                value: '2'
              }],
      dataBanner: [{
        "id": 774,
        "imageUrl": "https://ali.jinhui365.cn/group5/M00/00/8A/CgAAcmHxA_WAQW9XAAdg_cwucaY310.jpg",
        "jumpDetailUrl":"https:www.baidu.com"
      },
      {
        "id": 775,
        "imageUrl": "https://ali.jinhui365.cn/group5/M00/00/88/CgAAcmHefYiAcsNKAAHfcI_kegY897.jpg",
        "jumpDetailUrl":"http://news.baidu.com"
      }
      ]
    }
  },
  methods:{
    selectValue(name, value, index,fieldName){
      console.log('selectValue', name, value, index, fieldName)
    },
    closeHandle(mode){
      console.log('closeHandle', mode)
      this.show  = false
    },
    getValueHandle(val){
      console.log('xin', val)
    }
  }
}
</script>

<style>
.u-big{
  display: flex;
  flex-direction: row;
}
.u-loading{
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
 align-items: center;
  width: 300px;
  height: 300px;
  border: 1px solid red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
