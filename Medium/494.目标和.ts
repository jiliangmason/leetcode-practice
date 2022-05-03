/**
 * 给你一个整数数组 nums 和一个整数 target 。
向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3

输入：nums = [1], target = 1
输出：1
 */
const findTargetSumWays = (nums, target) => {
  // nums的和为sum
  // 正数和为l，负数和n，l + n = target
  // l - n = sum，因此2l = target + sum 正数和l为 (target + sum) / 2
  // l不能为小数 所以 target + sum不能是奇数
  // 背包问题，本质是凑齐和为l有多少种方法
  const sum = nums.reduce((a, b) => a + b);
  const positive = (sum + target) / 2;
  if (positive % 2) {
    return 0
  }
  if (positive > sum) {
    return 0
  }
  if (target > sum) {
    return 0;
  }
  // dp[j] += dp[j - nums[i]] dp[j]为凑齐和为j有几种方法
  let dp = new Array(nums.length + 1).fill(0);
  // 和为0时只有一种方法
  dp[0] = 1;
  for (let i=0; i < nums.length; i++) {
    for (let j = positive; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }
  return dp[positive];
}