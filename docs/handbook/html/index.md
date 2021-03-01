# HTML

## 表单

### 阻止表单提交

1. 设置action为javascript返回空

action: 接收请求的URL  
The URL that processes the form submission. This value can be overridden by a formaction attribute on a `<button>`, `<input type="submit">`, or `<input type="image">` element.

```html
<form action="javascript:;">
  ...
</form>
```

2. 设置onsubmit事件，返回false

```html
<form onsubmit="return false">
  ...
</form>
```

3. 在JS中监听submit事件，阻止事件默认行为

```javascript
const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit',function(e) {
    e.preventDefault();
});
```

