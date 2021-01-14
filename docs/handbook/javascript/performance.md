# 性能分析

执行时间、占用内存


## 计算执行耗时

```javascript
console.time('label')
// your code
console.timeEnd('label')
```

## 异步耗时统计

```javascript
// 在类或对象中，通过this.openCostTime来开关
async costTime(key, fn) {
    if (this.openCostTime) {
        console.time(key)
    }
    const result = await fn()
    if (this.openCostTime) {
        console.timeEnd(key)
    }
    return result
}


async someAsyncFunc() {
  // some async func
}
// 在异步函数中
const result = await Promise.all([
  this.costTime(
    'someAsyncFunc',  // 打印的key
    () => someAsyncFunc()
  )
])
```