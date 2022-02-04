/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？
 */
var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(0).map((item) => new Array(n));
  /**
   * 动态规划
   *  */
  /**
   * 先横着初始化为1, 因为从(0, 0)到（i, 0） 只有1种方法
   */
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      /**
       * 对于（i， j）只有从左边和上面进入
       */
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  /**
   * 从（0，0）走到最右下角
   */
  return dp[m - 1][n - 1];
};