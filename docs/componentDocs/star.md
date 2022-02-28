# Star
Star组件

### 示例
<jun-star :defaultValue="2.4" />

### 代码
```html
<jun-star :defaultValue="2.1" @getValue="getValueHandle">
```
### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | --- | ---  |   ---   |  ---  |
| defaultValue | 数量  | Number | false | 0 |
| getValue | 获取选中值回调函数  | Fn | false | 0 |
| maxValue | 最大数量  | Number | false | 5 |
| activeColor | 默认颜色  | String| false | #ff7e28 |

