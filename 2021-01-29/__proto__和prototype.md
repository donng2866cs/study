### __proto__
`__proto__`：指向当对象被实例化的时候，用作原型的对象。 就是标识当前对象原型链引用的指向

这是一个从 Web 标准中废弃的特性，不过现在一些浏览器任然支持。

在es6中标准化，用于确保 Web 浏览器的兼容性，未来也将被支持，不过不大推荐使用。

替代方案 `Object.getPrototypeOf/Reflect.getPrototypeOf`和`Object.setPrototypeOf/Reflect.setPrototypeOf`

设置对象的`[[Prototype]]`是一个缓慢的操作，如果性能是一个问题，应该避免.

```javascript
function Foo() {}
function Bar() {}
var p = {
    a: function() {
        console.log('aaa')
    }
}
var foo = new Foo()

foo.__proto__ === Foo.prototype     // true

var bar = new Bar()
bar.prototype.__proto__ = p

bar.__proto__.__proto__ === p   // true
bar.a()         // aaa

```

### 使用Object.create创建对象
```javascript
var a = {a: 1}
// a --> Object.prototype --> null
var b = Object.create(a)
// b --> a --> Object.prototype --> null
var c = Object.create(b)
// c --> b -- a --> Object.prototype --> null
var d = Object.create(null)
// d --> null
d.hasOwnProperty    // undefined 没有继承Object.prototype
```

### 性能
在原型链上查找属性比较耗时，对性能有副作用，在性能要求苛刻的情况下很重要。

另外，视图访问不存在的属性时会遍历整个原型链
