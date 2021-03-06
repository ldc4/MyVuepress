# axios

## 说明

一般用于前端页面的http请求

npm主页：[https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)

## 实践指南

### baseURL

通过配置baseURL，可以只写相对路径

```javascript
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

另外，vue项目中如果没有设置baseURL，vue.config.js中配置的devServer代理是无效的。

### 拦截请求和响应

可以针对请求和响应做一些协议规范的事情以及日志统一上报。

```javascript
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
```

### query string params

axios针对数组参数的解析，key是带`[]`后缀的（[参考代码](https://github.com/axios/axios/blob/f2057f77b231d88ea94ad88e84e4fd9f99506880/lib/helpers/buildURL.js#L42)）

也就是qs库中的brakets模式，且不支持嵌套

```javascript
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'indices' })
// 'a[0]=b&a[1]=c'
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'brackets' })
// 'a[]=b&a[]=c'
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'repeat' })
// 'a=b&a=c'
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'comma' })
// 'a=b,c'
```

最好是前端统一使用qs组件

axios中配置：
```javascript
import qs from 'qs';

const result = await axios.request({
  url: '/some-url',
  method: '/get',
  params: {
    test: [111, 222, 333]
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  },
});
```

koa2中有koa-qs中间件

前端如果不想使用自定义paramsSerializer，则不支持嵌套

后端如果不想使用qs，有两种应对办法：
  1. 接口协议保持最普通的对象，值都用JSON.stringify序列化为字符串
  2. 不要使用get的url来传参，全都用post方法，走bodyParse逻辑来解析为对象

### 取消重复请求

参考：[https://juejin.cn/post/6955610207036801031](https://juejin.cn/post/6955610207036801031)

```javascript
// 生成请求Key
function generateReqKey(config) {
  const { method, url, params, data } = config;
  return [method, url, Qs.stringify(params), Qs.stringify(data)].join("&");
}
// 记录请求对象
const pendingRequest = new Map();
function addPendingRequest(config) {
  const requestKey = generateReqKey(config);
  config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
    if (!pendingRequest.has(requestKey)) {
      pendingRequest.set(requestKey, cancel);
    }
  });
}
// 检查是否重复请求
function removePendingRequest(config) {
  const requestKey = generateReqKey(config);
  if (pendingRequest.has(requestKey)) {
    const cancelToken = pendingRequest.get(requestKey);
    cancelToken(requestKey);
    pendingRequest.delete(requestKey);
  }
}
// 拦截请求
axios.interceptors.request.use(
  function (config) {
    // 检查是否存在重复请求，若存在则取消已发的请求
    removePendingRequest(config);
    // 把当前请求信息添加到pendingRequest对象中
    addPendingRequest(config);
    return config;
  },
  (error) => {
     return Promise.reject(error);
  }
);
// 拦截响应
axios.interceptors.response.use(
  (response) => {
    // 从pendingRequest对象中移除请求
    removePendingRequest(response.config);
    return response;
  },
  (error) => {
    // 从pendingRequest对象中移除请求
    removePendingRequest(error.config || {});
    if (axios.isCancel(error)) {
      console.log("已取消的重复请求：" + error.message);
    } else {
      // 添加异常处理
    }
    return Promise.reject(error);
  }
);
```
