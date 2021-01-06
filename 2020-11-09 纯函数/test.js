const _ = require('ramda')

// 示例数据
const CARS = [
  {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
  {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
  {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
  {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
  {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
  {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
];

// const isLastInStock = function(cars) {
//   const last_car = _.last(cars);
//   return _.prop('in_stock', last_car);
// };
_.curry()
const isLastInStock = _.compose(cars => _.prop('in_stock', cars), _.last)
const isHeadInStock = _.compose(cars => _.prop('in_stock', cars), _.head)

const _underscore = _.replace(/\W+/g, '_');
const sanitizeNames = _.compose(_underscore, _.toLower)

console.log(isLastInStock(CARS))
console.log(isHeadInStock(CARS))
console.log(sanitizeNames('Hello World'))
