# 基础知识

## 启动服务

```bash
mongod --fork --auth --bind_ip_all --logpath /usr/local/mongodb/mongod.log
```

## 增删改查

[https://docs.mongodb.com/manual/crud/](https://docs.mongodb.com/manual/crud/)

### 新建
```bash
db.collection.insertOne()
db.collection.insertMany()
```

### 删除
```bash
db.collection.deleteOne()
db.collection.deleteMany()
```

### 修改
```bash
db.collection.updateOne(<filter>, <update>, <options>)
db.collection.updateMany(<filter>, <update>, <options>)
# 替换除id之外的全部内容
db.collection.replaceOne(<filter>, <update>, <options>)
```

### 查看
```bash
db.collection.find().pretty()
```


## 设置账号和密码

在非鉴权模式下启动mongod服务

```bash
# 创建Admin账号
db.createUser({
  user: "admin",
  pwd: "password",
  roles: [
    {
      role: "userAdminAnyDatabase",
      db: "admin"
    }
  ]
})

# 创建数据库操作账号
use yourdatabase
db.createUser({
  user: "user",
  pwd: "password",
  roles: [
    {
      role: "dbOwner",
      db: "yourdatabase"
    }
  ]
})
```

[MongoDB role 类型](https://docs.mongodb.com/manual/reference/built-in-roles/)


- 数据库用户角色（Database User Roles）
  - read：授予User只读数据的权限
  - readWrite：授予User读写数据的权限

- 数据库管理角色（Database Administration Roles）：
  - dbAdmin：在当前dB中执行管理操作
  - dbOwner：在当前DB中执行任意操作
  - userAdmin：在当前DB中管理User

- 备份和还原角色（Backup and Restoration Roles）：
  - backup
  - restore

- 跨库角色（All-Database Roles）：
  - readAnyDatabase：授予在所有数据库上读取数据的权限
  - readWriteAnyDatabase：授予在所有数据库上读写数据的权限
  - userAdminAnyDatabase：授予在所有数据库上管理User的权限
  - dbAdminAnyDatabase：授予管理所有数据库的权限

- 集群管理角色（Cluster Administration Roles）：
  - clusterAdmin：授予管理集群的最高权限
  - clusterManager：授予管理和监控集群的权限
  - clusterMonitor：授予监控集群的权限，对监控工具具有readonly的权限
  - hostManager：管理Server

## 备份与还原

```bash
mongodump -u usename -p password -d dbname -o <path>
```

```
mongorestore -u usename -p password -d dbname <path>
```

