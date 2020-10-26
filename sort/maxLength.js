function maxLength( arr ) {
  // write code here
  let max = 0
  let map = new Map()
  for(let i = 0, j = 0;i < arr.length;i++) {
    if(map.has(arr[i])) {
      j = Math.max(map.get(arr[i]) + 1, j)
    }
    max = Math.max(max, i - j + 1)
    map.set(arr[i], i)
  }

  return max
}

console.log(maxLength([2,2,3,4,5,5,5,5,5,6,7,8,9,0,0,123,234,345]))
