/**
 * 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列（即，组合出下一个更大的整数）。
如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
必须 原地 修改，只允许使用额外常数空间。
 */
/**
 * 
输入：nums = [1,2,3]
输出：[1,3,2]

输入：nums = [3,2,1]
输出：[1,2,3]
 * 
 */
function nextPermutation(nums) {
  let len = nums.length - 2;
  let i = len;
  let j = len;
  /**
   * 先从右往左 找出第一个左边比右边小的数
   */
  while (i >= 0) {
    nums[i] > nums[i + 1];
    i--;
  }
  /**
   * 从后面找出第一个比上一步找到的i大的数
   * 交换
   */
  while (j >= 0 && nums[j] <= nums[i]) {
    j--;
  }
  [nums[j], nums[i]] = [nums[i], nums[j]];
  /**
   * 交换完以后i后面就是一个递减的关系
   * 把前面大的数和后面小的数一一交换
   */
  let left = i;
  let right = len + 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums;
}
