function twoSum( numbers ,  target ) {
  // write code here
  const map = new Map()
  for (let i = 0; i < numbers.length; i++) {
    let tmp = target - numbers[i]
    console.log(tmp, numbers[i], map)
    if (map.has(tmp)) {
      return [map.get(tmp), i + 1]
    } else {
      map.set(numbers[i], i + 1)
    }
  }
}

console.log(twoSum([3, 2, 4], 6))
