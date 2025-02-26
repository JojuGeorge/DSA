// Question
/**
 * Two Sum
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 */

// Answer
var twoSum = function (nums, target) {
  let op = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        op = [i, j];
      }
    }
  }
  return op;
};
let result = twoSum([2, 7, 11, 15], 9);
console.log(result);

// Best Answer - Sub
var twoSum = function (nums, target) {
  const pairIdx = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (target - num in pairIdx) {
      return [i, pairIdx[target - num]];
    }
    pairIdx[num] = i;
  }
};
