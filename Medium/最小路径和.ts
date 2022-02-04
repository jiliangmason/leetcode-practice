/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
说明：每次只能向下或者向右移动一步。
 */
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = new Array(m).fill(0).map((item) => new Array(n).fill(0));
  dp[0][0] = 1;
  /**
   * dp算法赋给初始值
   */
  for (let i = 1; i < m; i++) {
    dp[i][0] += dp[i - 1][0];
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] += dp[0][i - 1];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      /**
       * （i, j）的值为左边和上边最小的哪一个
       */
      dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
};
