function isPalindrome(x) {
  if (x <= 0 || x % 10 === 0) return false
  let tmp = 0
  while (x > tmp) {
    tmp = tmp * 10 + x % 10
    x = Math.floor(x / 10)
  }

  return tmp === x || x === Math.floor(tmp / 10)
}

console.log(isPalindrome(12223332221))
