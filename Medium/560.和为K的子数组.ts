/**
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 输入：nums = [1,1,1], k = 2
输出：2

输入：nums = [1,2,3], k = 3
输出：2
 */
const subarraySum = (nums, k) => {
  // 假设和为0的前缀和出现了1次
  // 前缀和 prefixSum[i] = num[0] + num[1] + ... + num[i]
  // 从i到j前缀和：prefixSum[j] - prefixSum[i-1] = num[i] + ... + num[j]
  // 可以通过求出 prefixSum 数组的每一项，再看哪些项相减等于k，求出count
  // 用map记录  key为和为几  val为出现了几次
  let map = { 0: 1 };
  let prefixSum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // 求每一项的前缀和
    prefixSum += nums[i];
    // 如果存在这种与当前前缀和差为k的前缀和那么就满足
    // （从i到j的和为k），他的出现次数就是有多少个满足条件和为k的子项
    // 取出现次数累加到count
    if (map[prefixSum - k]) {
      count += map[prefixSum - k];
    }

    if (map[prefixSum]) {
      map[prefixSum]++;
    } else {
      map[prefixSum] = 1;
    }
  }
  return count;
};