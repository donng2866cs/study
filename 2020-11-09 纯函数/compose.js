const _ = require('ramda')
const compose = (f, g) => x => f(g(x))

const toUpperCase = x => x.toUpperCase()
const exclaim = x => x + '!'
const shout = compose(toUpperCase, exclaim)

console.log(shout('sen in the clowns'))

const head = x => x[0]
const reverse = arr => arr.reduce((acc, x) => [x].concat(acc), [])
const last = compose(head, reverse)

module.exports = {
  compose
}
