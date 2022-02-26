/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
此外，你可以假设该网格的四条边均被水包围。

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
 */
var numIslands = function (grid) {
  /**
   * 思路遍历dfs，遇到1的时候就变成0，因为如果不变
   * 那么下一个遍历到他的时候会重复加1
   */
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        isLand(i, j, grid);
        count++;
      }
    }
  }

  function isLand(row, col, grid) {
    if (row < 0 || row > grid.length || col < 0 || col > grid[0].length) {
      return;
    }
    /**
     * 上下左右递归
     */
    grid[row][col] = '0';
    isLand(row - 1, col, grid);
    isLand(row + 1, col, grid);
    isLand(row, col - 1, grid);
    isLand(row, col + 1, grid);
  }

  return count;
};