/**
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
进阶：
你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?  
 * 
 */

/**
 * 解法：0到n之和减去数组的和,求和用等差数列求和公式
 */
function getNums(nums: number[], n: number) {
  let sum = (0 + n) * n / 2;
  let result;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return sum - result;
}