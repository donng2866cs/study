function reverse(x) {
  console.log(x.toString().length)
  let flag = true
  if (x < 0) {
    flag = false
  }
  let resource = Math.abs(x)
  let result = 0
  while (resource > 0) {
    let pop = resource % 10
    resource = Math.floor(resource / 10)
    result = pop + result * 10
  }
Number.MAX_SAFE_INTEGER
  return flag ? result : -result
}

console.log(reverse(-123))
