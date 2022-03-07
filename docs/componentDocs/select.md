# Select
select组件

### 示例
<jun-select :selectData="selectData" @getValue="selectValue" selValue="2" fieldName="password"></jun-select>
   <script>
export default {
   data(){
    return {
        selectData:[{
                name: '周杰伦',
                value: '1'
              },
              {
                name: '方文山',
                value: '2'
              }],
    }
  },
  methods:{
     selectValue(name, value, index,fieldName){
      console.log('selectValue', name, value, index, fieldName)
    },
  }
}
</script>


### 代码
```html
<jun-select :selectData="selectData" @getValue="selectValue" selValue="2" fieldName="password"></jun-select>
   <script>
export default {
   data(){
    return {
        selectData:[{
                name: '周杰伦',
                value: '1'
              },
              {
                name: '方文山',
                value: '2'
              }],
    }
  },
  methods:{
     selectValue(name, value, index,fieldName){
      console.log('selectValue', name, value, index, fieldName)
    },
  }
}
</script>
```
### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | --- | ---  |   ---   |  ---  |
| selectData | 数据列表  | Array | true |  |
| selValue | 设置默认选中  | String | false | '' |
| fieldName | 字段名称  | String | false |  |
| getValue | 回调方法  | Fn| false | 返回 name, value, index,fieldName |

