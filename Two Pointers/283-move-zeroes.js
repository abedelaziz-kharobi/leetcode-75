/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order 
 * of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
  */
/**
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 1, 0, 3, 12, 0]));
console.log(moveZeroes([0, 1, 0, 3, 12, 4, 8, 0, 9, 0, 0, 0]));

