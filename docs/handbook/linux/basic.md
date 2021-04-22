# 常用命令行

## 查看端口占用

```bash
# Mac
lsof -i :8080
# Linux
netstat -lntup | grep 8080
```

## 查看磁盘使用情况

```bash
df -h
```

## 查看进程信息

```bash
ps -ef | grep node
```

## 查看yum模块列表

```bash
yum module list
yum module list nodejs
```

