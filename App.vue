<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Demo></Demo>
    <jun-card></jun-card>
    <star :defaultValue="2.1" @getValue="getValueHandle">
      星星
    </star> -->
    <jun-banner :list="dataBanner"></jun-banner>
    <jun-loading title="请稍等..."/>
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
