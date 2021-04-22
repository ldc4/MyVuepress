# 环境变量

## 查看环境变量

`export` 命令显示当前系统定义的所有环境变量

`echo $PATH` 命令输出当前的PATH环境变量的值

## 配置环境变量

`export PATH=$PATH:/home/test`

> 生效时间：立即生效  
> 生效期限：当前终端有效，窗口关闭后无效  
> 生效范围：仅对当前用户有效  

`vim ~/.bashrc`

> 生效时间：使用相同的用户打开新的终端时生效，或者手动source ~/.bashrc生效  
> 生效期限：永久有效  
> 生效范围：仅对当前用户有效  

`vim ~/.bash_profile`

> 生效时间：使用相同的用户打开新的终端时生效，或者手动source ~/.bash_profile生效  
> 生效期限：永久有效  
> 生效范围：仅对当前用户有效  

`vim /etc/bashrc`

> 生效时间：新开终端生效，或者手动source /etc/bashrc生效  
> 生效期限：永久有效  
> 生效范围：对所有用户有效  

`vim /etc/profile`

> 生效时间：新开终端生效，或者手动source /etc/profile生效  
> 生效期限：永久有效  
> 生效范围：对所有用户有效  

`vim /etc/environment`

> 生效时间：新开终端生效，或者手动source /etc/environment生效  
> 生效期限：永久有效  
> 生效范围：对所有用户有效  

## bash中的环境变量加载文件

用户级别环境变量定义文件：

`~/.bashrc`

`~/.profile`（部分系统为：`~/.bash_profile`）

系统级别环境变量定义文件：

`/etc/bashrc`

`/etc/profile`（部分系统为：`/etc/bash_profile`）

我的云服务器，读取顺序：

```
/etc/profile  
/etc/bashrc  
~/.bash_profile (主动加载了~/.bashrc)  
~/.bashrc  
```

鸟哥书上讲：  
no-login shell才会加载：`~/.bashrc`  
所以在`~/.bash_profile`加载`~/.bashrc`，然后添加环境变量，可以直接添加在`~/.bashrc`中  







