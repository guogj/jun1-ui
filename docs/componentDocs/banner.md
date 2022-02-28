# Banner
banner组件

### 示例
<jun-banner :list="dataBanner"></jun-banner>
<script>
export default {
   data(){
    return {
      dataBanner: [{
        "id": 774,
        "imageUrl": "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04e0453fc7ef47ada77f1210fa5b818f~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
        "jumpDetailUrl":"https:www.baidu.com"
      },
      {
        "id": 775,
        "imageUrl": "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8859386cd1c34630bffb8d0a16b27491~tplv-k3u1fbpfcp-watermark.image?",
        "jumpDetailUrl":"http://news.baidu.com"
      }
      ]
    }
  },
}
</script>

### 代码
```html
<jun-banner :list="dataBanner"></jun-banner>
```

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | --- | ---  |   ---   |  ---  |
| list | 列表数据 | Array | true | dataBanner|
``` json
   [{
        "id": 774,
        "imageUrl": "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04e0453fc7ef47ada77f1210fa5b818f~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
        "jumpDetailUrl":"https:www.baidu.com"
      },
      {
        "id": 775,
        "imageUrl": "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8859386cd1c34630bffb8d0a16b27491~tplv-k3u1fbpfcp-watermark.image?",
        "jumpDetailUrl":"http://news.baidu.com"
      }
      ]
```
