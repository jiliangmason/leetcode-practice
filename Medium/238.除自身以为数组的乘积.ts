/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
请不要使用除法，且在 O(n) 时间复杂度内完成此题。

输入: nums = [1,2,3,4]
输出: [24,12,8,6]

输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
 * 
 */
var productExceptSelf = function (nums) {
  /**
   * output先装nums[i]左边乘积
   * 比如nums=[1,2,3,4]
   * output=[1,1,2,6]
   */
  let output = [];
  let n = nums.length;
  output[0] = 1;
  for (let i = 1; i < n; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }
  /**
   * 用一个变量记录nums[i]右边乘积为rightMulti
   * 然后让他和对应的左边乘积output[i]相乘，然后替换output[i]
   * rightMulti: 24 <= 12 <= 4 <= 1
   */
  let rightMulti = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] = output[i] * rightMulti;
    rightMulti = nums[i] * rightMulti;
  }
  return output;
};