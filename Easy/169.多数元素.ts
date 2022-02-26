/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

输入：[3,2,3]
输出：3

输入：[2,2,1,1,1,2,2]
输出：2
 */
var majorityElement = function (nums) {
  let map = new Map();
  let half = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    if (map.get(nums[i]) > half) {
      return nums[i];
    }
  }
  return -1;
};