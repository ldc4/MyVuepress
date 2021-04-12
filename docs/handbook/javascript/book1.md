# 《JavaScript高级程序指南》

## JavaScript简介

Netscape公司开发一种名为LiveScript的脚本语言，为了炒热度，改名为JavaScript

1997年，以JavaScript 1.1为蓝本，提交给ECMA，指定TC39来指定标准ECMA-262

[ECMA-262](https://github.com/tc39/ecma262): 定义一种名为ECMAScript(ek-ma-script)的新脚本语言的标准

JS = ES + BOM + DOM

DOM（文档对象模型）: 针对XML但经过扩展用于HTML的应用程序编程接口

BOM（浏览器对象模型）: 支持可以访问和操作浏览器窗口


## 在HTML中使用JavaScript

`<script>`

|属性|必填|说明|默认值|
|---|---|---|---|
|async|否|表示应该立即下载脚本，但不应妨碍页面中的其他操作，比如下载器他资源或等待加载其他脚本（只对外部脚本文件有效）|-|
|charset|否|表示通过src属性指定的代码的字符集（由于大多数浏览器会忽略它的值，因此这个属性很少有人用）|-|
|defer|否|表示脚本可以延迟到文档完全被解析和显示之后再执行（只对外部脚本文件有效）|-|
|language|已废弃|原来用于表示编写代码使用的脚本语言（如JavaScript、JavaScript1.2或VBScript）|-|
|src|否|表示要执行代码的外部文件|-|
|type|否|表示编写代码使用的脚本语言的内容类型(可以看成是language的替代属性)|text/javascript|

一般来说，用到的就是src，然后为了性能可能会用到defer和async

或者在`<script>code</script>`之间直接写代码

在有src的情况，直接在标签内写代码是没有用的


defer脚本最好只加载一个：虽然规范是要求按顺序，并在DOMContentLoaded之前，但浏览器实现不一定。

IE4、Firefox 3.5、Safari 5 和 Chrome是最早支持defer属性的浏览器。其他浏览器会忽略这个属性，像平常一样处理脚本。
为此，把延迟脚本放在页面底部依然是最佳选择。

异步脚本一定会在页面的load事件前执行，但可能会在DOMContentLoaded之前或之后执行。


## 基本概念

### 语法

ECMAScript中的一切都区分大小写

标识符：变量、函数、属性的名字，或者函数的参数。
- 第一个字符必须是一个字母、下划线(_)或一个美元符号($)
- 其他字符可以是字母、下划线、美元符号或数字

注释

严格模式: "use strict"

语句

### 关键字和保留字

ECMA-262定义的全部关键字：（带*号是第5版新增的）

|-|-|-|-|
|-|-|-|-|
|break|do|instanceof|typeof|
|case|else|new|var|
|catch|finally|return|void|
|continue|for|switch|while|
|debugger*|function|this|with|
|default|if|throw||
|delte|in|try||

<!--
ECMA-262第三版的保留字：(没啥参考意义了)

|-|-|-|-|
|-|-|-|-|
|abstract|enum|int|short|
|boolean|export|interface|static|
|byte|extends|long|super|
|char|final|native|synchronized|
|class|float|package|throws|
|const|goto|private|transient|
|debugger|implements|protected|volatile|
|double|import|public||
-->

第5版把非严格模式下运行时的保留字缩减为：

|-|-|-|-|
|-|-|-|-|
|class|enum|extends|super|
|const|export|import||

在严格模式下，第5版还对以下保留字施加了限制：

|-|-|-|
|-|-|-|
|implements|package|public|
|interface|private|static|
|let|protected|yield|

### 变量

定义变量，在ES6中推荐使用const和let来替代var

可以忽略书上讲的

### 数据类型

5种基本数据类型：`Undefined` `Null` `Boolean` `Number` `String`

1种复杂数据类型：`Object`

ECMAScript不支持任何创建自定义类型的机制

typeof操作符：用于检测变量的数据类型

返回结果有：
|-|-|
|-|-|
|"undefined"|如果这个值未定义|
|"boolean"|如果这个值是布尔值|
|"string"|如果这个值是字符串|
|"number"|如果这个值是数值|
|"object"|如果这个值是对象或null|
|"function"|如果这个值是函数|

> 从技术角度将，函数在ECMAScript中是对象，不是一种数据类型。
> 然而，函数也确实有一些特殊的属性，因此通过typeof操作符来区分函数和其他对象是有必要的

#### Undefined

声明但未初始化

对于未声明的变量只能执行typeof
> 对未声明的变量调用delete，不会报错，但是没有意义。在严格模式会报错

> 即便未初始化的变量会自动被赋值为undefined值，但显式地初始化变量依然是明智的选择。  
> 如果能够做到这一点，那么当typeof操作符返回“undefined”值时，我们就知道被检查的变量还没有被声明，而不是尚未初始化。

#### Null类型

表示一个空对象指针

> 如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为null而不是其他值。  
> 这样一来，只要直接检查null值就可以知道相应的变量是否已经保存了一个对象的引用。

undefined值是派生自null值，所以 null == undefined

#### Boolean类型

转换规则：
|数据类型|转换为true|转换为false|
|-|-|-|
|Boolean|true|false|
|String|非空字符串|""(空字符串)|
|Number|非零数字值(包括Infinity)|0和NaN|
|Object|任何对象|null|
|Undefined|-|undefined|

#### Number类型

使用IEEE754格式来表示整数和浮点数值

##### 整数

十进制: 55  
八进制: 070 (严格模式下无效)  
十六进制: 0xA  

> +0 和 -0 相等

##### 浮点数

浮点数值：该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。
> 虽然小数点前面可以没有整数，但不推荐这种写法

由于保存浮点数值需要的内存空间是保存整数值的两倍，因此ECMAScript会不失时机地将浮点数值转换为整数值
- 如果小数点后面没有跟任何数字（1.）
- 如果浮点数值本身表示的就是一个整数（10.0）

可以用e表示法：3.125e7 == 31250000

默认会将小数点后面带有6个0以上的浮点数值转换为e表示法

0.1 + 0.2 != 0.3

##### 数值范围

`Number.MIN_VALUE` == 5e-324  
`Number.MAX_VALUE` == 1.7976931348623157e+308  
`Number.POSITIVE_INFINITY` == Infinity  
`Number.NEGATIVE_INFINITY` == -Infinity  

超过`Number.MAX_VALUE`，则为`Infinity`或`-Infinity`

通过`isFinite()`来判断


##### NaN

Not a Number，表示一个本要返回数值的操作数未返回数值的情况

除以0，不会报错，会得到NaN

特点：
- 任何涉及NaN的操作都会返回NaN
- NaN与任何值都不相等，包括NaN本身

通过`isNaN()`来判断，在接收到一个值之后，会尝试将这个值转换为数值


##### 数值转换

有3个函数可以把非数值转换为数值：`Number()`、`parseInt()`、`parseFloat()`

`Number()`的转换规则：
- 如果是Boolean值，true和false将分别被转换为1和0
- 如果是null值，返回0
- 如果是undefined，返回NaN
- 如果是字符串，遵循下列规则：
  - 如果字符串中只包含数字（包含正负号），将转换为十进制数值，前导0会被忽略
  - 如果字符串中包含有效的浮点格式，将转换为对应的浮点数值，前导0会被忽略
  - 如果字符串中包含有效的十六进制格式（例如0xf）,将转换为相同大小的十进制整数值
  - 如果字符串是空的，将转换为0
  - 如果字符串中包含除上述格式之外的字符，将转换为NaN
- 如果是对象，则调用valueOf()方法，然后按照前面的规则进行转换。如果转换为NaN，则调用toString()方法，然后再按照前的规则进行转换

`parseInt()`的转换规则：
> [MDN说得很详细](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

在使用 parseInt 时，一定要指定一个 radix。

parseInt不能解析出Infinity

```javascript
filterInt = function (value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}
```

`parseFloat()`的转换规则：
> [MDN说得很详细](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

与parseInt的区别在于始终会忽略前导0

如果字符串包含的是一个可解析为整数的数（没有小数点，或者小数点后都是0），parseFloat会返回整数。

#### String类型

表示由0或多个16位Unicode字符组成的字符序列，即字符串。

字符串可以由双引号("")或单引号('')表示。

##### 字符字面量

String数据类型包含一些特殊的字符字面量，也叫转义序列，用于表示非打印字符，或者具有其他用途的字符。

|字面量|含义|
|-|-|
|\0|空字符|
|\'|单引号|
|\"|双引号|
|\\|反斜杠|
|\n|换行|
|\r|回车|
|\v|垂直制表符|
|\t|水平制表符|
|\b|退格|
|\f|换页|
|\uXXXX|unicode码|
|\xXX|Latin-1 字符(x小写)|

length只返回字符数

##### 字符串的特点

字符串是不可变的，一旦创建，值就不能改变。

要改变某个变量保存的字符串，需要先销毁再创建。

##### 转换为字符串

item.toString()

String(item)

item + ""

#### Object类型

对象是一组数组和功能的集合。可以通过执行new操作符后跟要创建的对象类型的名称来创建。

创建Object类型的实例并为其添加属性或方法，就可以创建自定义对象

```javascript
const o1 = new Object();
const o2 = new Object;  // 没构造参数的时候，可以省略括号（），但不推荐。
```

Object的每个实例都具有下列属性和方法：  
constructor  
hasOwnProperty(propertyName)  
isPrototypeOf(object)  
propertyIsEnumerable(propertyName)  
toLocalString()  
toString()  
valueOf()  

### 操作符

ECMA-262描述了一组用于操作数据值的操作符

#### 一元操作符

++item  
--item  
item++  
item--  
+item  
-item  

#### 位操作符

二进制  
符号位  
二进制补码  

补码 = 反码 + 1

取反：~item  
按位与：itemA & itemB  
按位或：itemA | itemB  
按位异或：itemA ^ itemB  
左移：item << num  
有符号右移：item >> num  
无符号右移：item >>> num  
> 左移不会影响操作数的符号位

#### 布尔操作符

逻辑非：!item  
逻辑与：itemA && itemB  
逻辑或：itemA || itemB  

#### 乘性操作符

乘法：itemA * itemB  
除法：itemA / itemB  
求模：itemA % itemB  

#### 加性操作符

加法：itemA + itemB  
减法：itemA - itemB  

#### 关系操作符

小于：itemA < itemB  
大于：itemA > itemB  
小于等于：itemA <= itemB  
大于等于：itemA >= itemB  

#### 相等操作符

相等：itemA == itemB  
不相等：itemA != itemB  
全等：itemA === itemB  
不全等：itemA !== itemB  

#### 条件操作符

三元操作符  
booleanExpression ? itemA : itemB

#### 赋值操作符

const a = 1;

*=  
/=  
%=  
+=  
-=  
<<=  
\>>=  
\>>>=  


#### 逗号操作符

const num1 = 1, num2 = 2, num3 = 3;

const num = (1, 2, 3)

返回逗号表达式中的最后一项


### 语句

这些都是基础中的基础，是常识

#### if语句

#### do-while语句

#### while语句

#### for语句

#### for-in语句

#### label语句

#### break和continue语句

#### with语句

#### switch语句


### 函数

```javascript
function name(a, b) {
  const something = a + b;
  // statements
  console.log(arguments);
  return something;
}

const name = (a, b) => {
  const something = a + b;
  // statements
  console.log(arguments);
  return something;
}
```

#### 理解参数

在函数体内可以通过arguments对象来访问这个参数数组，从而获取传递给函数的每一个参数

arguments对象是类数组，不是Array的实例

arguments对象中的值会自动反映到对应的命名参数，他们的内存空间是独立的，但他们的值是同步的

没有传递值的命名参数将自动被赋予undefined值

严格模式下，对arguments赋值无效

#### 没有重载

通过检查传入函数中参数的类型和数量并作出不同的反应，可以模仿方法的重载。
