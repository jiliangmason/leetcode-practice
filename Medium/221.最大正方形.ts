/**
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 * 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
  输出：4

  输入：matrix = [["0","1"],["1","0"]]
  输出：1

  参考：https://leetcode-cn.com/problems/maximal-square/solution/221-zui-da-zheng-fang-xing-tu-jie-shi-pin-yan-shi-/
 */
var maximalSquare = function (matrix) {
  let dp = new Array(matrix.length);
  let maxSquareLen = 0;
  dp[0][0] = 0;
  for (let i = 1; i < matrix.length; i++) {
    dp[i] = new Array(matrix[i].length).fill(0);
    for (let j = 1; j < matrix[i].lenth; j++) {
      if (matrix[i][j] === '1') {
        /**
         * dp[i][j]代表了以(i, j)为右下角坐标的最大边长
         * 它是由上 左 斜上方最小的 + 本身的长度1
         * 为什么是最小因为只能延伸到最小的那一个部分的边界
         */
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
        maxSquareLen = Math.max(maxSquareLen, dp[i][j]);
      }
    }
  }
  return maxSquareLen * maxSquareLen;
};

