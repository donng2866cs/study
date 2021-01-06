const _ = require('lodash')

function abc(a, b, c) {
  return a + b + c
}

// const curry = (fn, ...args) => {
//   if (fn.length <= args.length) {
//     return fn(...args)
//   }
//
//   return (...args2) => curry(fn, ...args, ...args2)
// }
const curry = (fn, ...args) => args.length < fn.length ? (...args2) => curry(fn, ...args, ...args2) : fn(...args);

const result = curry(abc)

console.log(result(1, 2, 3, 4))
console.log(result(1)(2)(3))

// const curried = _.curry(abc)

// console.log(curried(1)(3)(2))
