function twoSum( numbers ,  target ) {
  const map = new Map()

  for (let i = 0; i < numbers.length; i++) {
    let tmp = target - numbers[i]
    if (map.has(tmp)) {
      return [map.get(tmp), i]
    }
    map.set(numbers[i], i)
  }
}

console.log(twoSum([2,7,11,15], 9))
