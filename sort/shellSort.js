function shellSort (arr) {
  if (arr.length === 0) return arr
  let d = Math.floor(arr.length / 2)
  // 分组
  for (d;d >= 1;d = Math.floor(d / 2)) {
    // 对所有的分组进行遍历
    for (let i = 0; i < d; i++) {
      // 根据分组进行插入排序
      for (let j = i + d; j < arr.length; j+=d) {
        if (arr[j] < arr[j - d]) {
          let temp = arr[j]
          // 记录当前位置
          let position = j - d
          // 循环与当前位置之前的数组进行对比， 若比当前位置的值大 ， 则进行移动，否则跳出循环
          while (position >= 0 && arr[position] > temp) {
            arr[d + position] = arr[position]
            position -= d
          }
          // 找到插入的位置，进行赋值
          arr[position + d] = temp
        }
      }
    }
  }

  return arr
}


console.log(shellSort([1,45,2,5,4,23,12,56,43,23,18,29,9,8,56,21]))