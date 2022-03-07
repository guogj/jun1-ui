# Tip
tip组件

### 示例
  <jun-tip @close="closeHandle" title="我是标题" content="我是内容" confirmBtnTxt="确认" v-if="show"/>
   <script>
export default {
   data(){
    return {
        show:true,
    }
  },
  methods:{
      closeHandle(){
      this.show  = false
    },
  }
}
</script>


### 代码
```html
<jun-tip @close="closeHandle" v-if="show"/>
<script>
export default {
   data(){
    return {
        show:true,
    }
  },
  methods:{
      closeHandle(){
      this.show  = false
    },
  }
}
</script>
```
### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | --- | ---  |   ---   |  ---  |
| title | 标题  | String | false | 温馨提示 |
| content | 内容  | String | false | '' |
| confirmBtnTxt | 按钮文案  | String | false | 知道了 |
| close | 回调方法  | Fn| false |  |

