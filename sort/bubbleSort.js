function bubbleSort(arr) {
  console.time('time1');
  let start = 0
  let end = arr.length
  let temp

  while (start < end) {
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = temp
      }
      end--
      for (let j = end; j > start ; j--) {
        if (arr[j] < arr[j - 1]) {
          temp = arr[j - 1]
          arr[j - 1] = arr[j]
          arr[j] = temp
        }
      }
      start++
    }
  }

  console.timeEnd('time1');
  return arr;
}

//
// function bubbleSort(arr) {
//     let start = 0
//     let end = arr.length - 1
//     let temp, j
//     console.time('time2')
//     while (start < end) {
//         for (j = start;j < end;j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j + 1]
//                 arr[j + 1] = arr[j]
//                 arr[j] = temp
//             }
//         }
//         end--
//         for (j = end;j > start;j--) {
//             if (arr[j] < arr[j - 1]) {
//                 temp = arr[j - 1]
//                 arr[j - 1] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     start++
//     console.timeEnd('time2')
//     return arr
// }

console.log(
    bubbleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));
