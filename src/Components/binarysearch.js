function countSmaller(nums) {
    const sortedList = [];
    const counts = new Array(nums.length).fill(0);

    function binarySearch(arr, target) {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        const position = binarySearch(sortedList, num);
        counts[i] = position;
        sortedList.splice(position, 0, num);
    }

    return counts;
}


const nums = [5, 2, 6, 1];
console.log(countSmaller(nums));  
