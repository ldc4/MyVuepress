# 常用基础知识点

## 判断是否是数组

```javascript
Array.isArray(arr) // 支持到IE9+
```

## 数组操作函数splice和slice对比

splice方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。

**此方法会<span style="color: red">改变</span>原数组**

```javascript
splice(start, deleteCount, item1, item2, ...)
```

slice方法返回一个新的数组对象，这一对象是一个由begin和end决定的原数组的浅拷贝（包括begin，不包括end）。

**原始数组不会被改变**

```javascript
slice(begin, end)
```
