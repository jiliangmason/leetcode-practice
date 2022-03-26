/**
 * 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 */

var maxProfit = function (prices) {
  /**
   * 动规：
   * dp[i][j] 代表了第i天的第j种状态下的收益
   * j一共有4种状态：
   * 0：买入态
   * 1：卖出态（已经过了冷冻期）
   * 2：今天卖出
   * 3：冷冻期中
   *
   * 1、买入态 (包含了今天买入和前几天买入)
   * dp[i][0] = dp[i-1][0] （前几天买入）
   * dp[i][0] = dp[i-1][1]-prices[i] （今天买入，此前是卖出态）
   * dp[i][0] = dp[i-1][3]-prices[i] (前一天是冷冻期)
   *
   * 2、卖出态（包含了前几天就卖出以及上一天刚好是冷冻期）
   * dp[i][1] = dp[i-1][1]
   * dp[i][1] = dp[i-1][3]
   *
   * 3、今天卖出 (只可能之前是买入)
   * dp[i][2] = dp[i-1][0] + prices[i]
   *
   * 4、冷冻期（只可能是昨天卖了股票）
   * dp[i][3] = dp[i-1][2]
   */
  if (prices.length === 1) {
    return 0;
  }
  if (prices.length < 3) {
    return Math.max(0, prices[0] - prices[1]);
  }
  let dp = Array.from(Array(prices.length), () => Array(4).fill(0)); // i为天  j为状态
  dp[0][0] = 0;
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = Math.max(
      dp[i - 1][0],
      Math.max(dp[i - 1][1] - prices[i], dp[i - 1][3] - prices[i])
    );
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3]);
    dp[i][2] = dp[i - 1][0] + prices[i];
    dp[i][3] = dp[i - 1][2];
  }
  /**
   * 最后比较第i天处于状态1 2 3时赚的钱
   * 为什么没有状态0 因为状态0是买入 此时手里还有股票没有换成钱
   */
  return Math.max(
    dp[prices.length - 1][1],
    Math.max(dp[prices.length - 1][2], dp[prices.length - 1][3])
  );
};