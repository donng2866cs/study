function selectionSort(arr) {
    let len = arr.length - 1
    let min, temp
    console.time('time')
    for (let i = 0; i < len; i++) {
        min = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }

    console.timeEnd('time')
    return arr
}

selectionSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])
