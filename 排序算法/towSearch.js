function twoSearch(nums, target) {
    if (nums.length === 0) return nums
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}

console.log(twoSearch([1,2,3,4,5,6,7,8,9], 3))
