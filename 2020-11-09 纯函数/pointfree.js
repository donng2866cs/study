const { compose } = require('./compose')

// 非 pointfree , 因为提到了数据 name
const snakeCase = word => word.toLowerCase().replace(/\s+/ig, '_')
// pointfree
const snakeCarePointFree = compose(String.prototype.replace.call(/\s+/ig, '_'), String.prototype.toLowerCase)

const name = snakeCarePointFree('abc')
console.log(name)
