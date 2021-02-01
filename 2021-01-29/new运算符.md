### new 运算符
创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

```javascript
new constructor[([arguments])]
```

`constructor`: 一个指定对象实例的类型的类或者函数

`arguments`: 用于被 `constructor` 调用的参数列表

#### 具体操作

1. 创建一个空的简单的对象({});
2. 链接该对象（设置该对象的constructor）到另一个对象
3. 将步骤1新创建的对象作为`this`的上下文
4. 如果该函数没有返回对象，则返回 `this`

```javascript
function create(con, ...args) {
    // 第一步
    let obj = {}
    // 第二步
    Object.setPrototypeOf(obj, con.prototype)
    // 第三步
    let result = con.apply(obj, ...args)
    // 第四步
    return result instanceof Object ? result : obj
}
```
