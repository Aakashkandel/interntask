function longestConsecutiveChain(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longest = 0;

   
    for (let i = 0; i < nums.length; i++) {
       
        if (!numSet.has(nums[i] - 1)) {
            let currentNum = nums[i];
            let currentLength = 1;

           
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            longest = Math.max(longest, currentLength);
        }
    }

    return longest;
}


const array = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveChain(array)); 


// Explanation of Time and Space Complexity:
// Time Complexity : O(n)
// Space Complexity : O(n)
// In the above code, conversion of an array into set takes O(n) time where n is the no of elements of the array.
// Main Loop: The for loop will run once for every element in the Set. Inside the loop, the while checks for consecutive numbers. Hence, each number is processed at most twice: once in the main loop and once in the while; hence, the overall complexity remains linear.
// Space Complexity: O(n)
// Set Storage: Space used by Set for storing array elements is O(n).
// Other Variables: The space taken by other variables (such as longest, currentNum, currentLength) is constant, O(1).