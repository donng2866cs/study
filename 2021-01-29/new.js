function create(con, ...args) {
    // 第一步
    let obj = Object.create(con.prototype);
    // 第三步
    let result = con.apply(obj, args)
    console.log('result', result)
    // 第四步
    return result instanceof Object ? result : obj
}

function Foo(name) {
    this.name = name

    return {a: 10}
}

Foo.prototype.say = function(){
    console.log('(*´▽｀)ノノ')
}

var foo = create(Foo, '小明')
var foo1 = new Foo('小红')

// foo.say()
// foo1.say()

console.log(foo, foo instanceof Foo)
console.log(foo1, foo1 instanceof Foo)
