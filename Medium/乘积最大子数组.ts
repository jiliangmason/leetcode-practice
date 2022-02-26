/**
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 */
/**
 * 这是个dp算法问题，
 * dp[i]最大/最小时需要依赖dp[i-1]和当前元素
 */
var maxProduct = function (nums) {
  let min = nums[0];
  let max = nums[0];
  let ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let tmp = min;
    /**
     * max * nums[i]会成为最小值是在nums[i] < 0时
     * min * nums[i]是nums[i] > 0时
     */
    min = Math.min(nums[i], Math.min(max * nums[i], min * nums[i]));
    /**
     * tmp * nums[i]会成为最大值是在nums[i] < 0时
     */
    max = Math.max(nums[i], Math.max(max * nums[i], tmp * nums[i]));
    ans = Math.max(ans, max);
    return ans;
  }
};