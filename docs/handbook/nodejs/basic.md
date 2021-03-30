# 常用基础知识点

## 获取启动命令参数

```javascript
process.argv.slice(2)
```

## 读写文件

```javascript
// 1. 从文件中读取到数据，返回结构为Buffer数据
const buf = fs.readFileSync(path.join(fileName));
// 2. 转换成String
const str = buf.toString('utf8');
// 3. 对String进行处理
const formatStr = JSON.parse(str);
// 4. 将修改后String转换成Buffer数据
const newBuf = Buffer.from(formatStr, 'utf8');
// 5. 写入数据到文件
fs.writeFileSync(path.join(fileName + '-format'));
```
