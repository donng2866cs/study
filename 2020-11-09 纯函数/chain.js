const _ = require('lodash')

const arr = [
  {
    a: 1
  },
  {
    a: 2
  }
]

const b = _.chain(arr).keys('a').value()

console.log(b)
