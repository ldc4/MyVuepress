# 基础知识

## 创建账号和密码

```bash
# 默认会创建root@%的密码，而root@localhost是空密码，即不用输入密码
# CREATE USER 'root' IDENTIFIED BY '123456';
# ALTER USER 'root'@'localhost' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY '新密码';
CREATE USER 'root'@localhost IDENTIFIED BY '123456';
# 创建完之后要授权，外网才能看到
GRANT * ON dbname.* TO 'root'@'%' 
```

## 导入导出

```bash
mysqldump -u dbuser -p dbname > dbname.sql
```

```bash
mysql -u dbuser -p dbname
# 若没有数据库，需要先创建数据库
create database dbname character set utf8 collate utf8_general_ci;
source dbname.sql
```

