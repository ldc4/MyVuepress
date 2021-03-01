# MongoDB

官方文档：[https://docs.mongodb.com/manual/](https://docs.mongodb.com/manual/)


## 增删改查

[https://docs.mongodb.com/manual/crud/](https://docs.mongodb.com/manual/crud/)

### 新建
```
db.collection.insertOne()
db.collection.insertMany()
```

### 删除
```
db.collection.deleteOne()
db.collection.deleteMany()
```

### 修改
```
db.collection.updateOne(<filter>, <update>, <options>)
db.collection.updateMany(<filter>, <update>, <options>)
// 替换除id之外的全部内容
db.collection.replaceOne(<filter>, <update>, <options>)
```

### 查看
```
db.collection.find().pretty()
```

