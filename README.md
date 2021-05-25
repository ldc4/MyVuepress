# 简介

打算维护一个个人文档，用于技术学习方面的记录和查阅

## 安装

```
yarn install # 或者：npm install
```

## 本地环境

```
yarn dev # 或者：npm run dev
```

## 生成静态文件

```
yarn build # 或者：npm run build
```

## 维护

### 添加一个模块

1. 在docs下，新建一个目录
2. 补充相关的md文档，文档的链接由目录和文件的命名自动生成
3. 在.vuepress/config.js中配置你的链接导航，用于快速导航

### 部署到github-page上

1. 写好内容后，运行npm run build
2. 构建页面后，运行npm run deploy

### 文档命名建议

按照导航的层级结构组织目录
太长的名称可以使用中划线来隔开，不要用缩写

