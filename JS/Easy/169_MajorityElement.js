// Question
/**
 * Majority Element
 * 
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 */
var majorityElement = function (nums) {
  let tracker = {};
  let majority = 0;
  let largest = 0;
  nums.forEach((i) => {
    if (!tracker.hasOwnProperty(i)) {
      tracker[i] = 1;
    } else {
      tracker[i] += 1;
    }
  });

  for (let key in tracker) {
    if (tracker[key] >= largest) {
      largest = tracker[key];
      majority = key;
    }
  }

  return parseInt(majority);
};

// Best AnswerSubmission
var majorityElement = function (nums) {
  const hash = {};
  let res = 0;
  let majority = 0;

  for (let n of nums) {
    hash[n] = 1 + (hash[n] || 0);
    if (hash[n] > majority) {
      res = n;
      majority = hash[n];
    }
  }

  return res;
};
