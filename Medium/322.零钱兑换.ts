/**
 * 
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
你可以认为每种硬币的数量是无限的。

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1

输入：coins = [2], amount = 3
输出：-1

输入：coins = [1], amount = 0
输出：0
 * 
 */
var coinChange = function (coins, amount) {
  /**
   * 完全背包问题(背包问题就是双层遍历内外)
   * 把coins看做物品
   * 把amount看做包
   */
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      /**
       * dp[j] 代表了金额为j时最小硬币数
       * dp[j - coins[i]]表示j-coins[i]金额时所需最小金额数再加一就是dp[j]了
       * 所以递推公式是：dp[j] = min(dp[j - coins[i]] + 1, dp[j])
       */
      dp[j] = Math.max(dp[j - coins[i]] + 1, dp[j]);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};