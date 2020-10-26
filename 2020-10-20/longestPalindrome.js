function longestPalindrome(s) {
  let map = new Map()
  let max = ''
  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(map.get(s[i]) + 1, j)
    }

    if (max.length < i - j + 1) {
      max = s.slice(j, i + 1)
    }
    map.set(s[i], i)
  }
  return max
}

console.log(longestPalindrome('babcd'))
