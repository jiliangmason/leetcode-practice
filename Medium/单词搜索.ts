/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
输出：true

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
输出：false
 */
function exist(board, word) {
  let m = board.length;
  let n = board[0].length;
  /**
   * used代表了使用过的字符组成的数组
   */
  let used = new Array(m).fill(0).map((item) => new Array(n));
  /**
   * 需要判断是否可以找到的行、列、以及i是word的下标
   */
  function canReach(row, col, i) {
    /**
     * 递归终结的条件
     */
    if (i === word.length) {
      return true;
    }
    /**
     * 某个点已经越界了
     */
    if (row < 0 || row >= m || col < 0 || col >= n) {
      return false;
    }
    /**
     * 某个点不等于word中对应的值或者
     * 已经用过了的值返回false
     */
    if (board[row][col] !== word[i] || used[row][col]) {
      return false;
    }
    /**
     * 如果都没问题就先放到used数组表示使用过
     */
    used[row][col] = true;
    /**
     * 某个点的上下左右, 只要有一个为true说明找到了就不用再找了
     * 注意这里的i+1，让迭代继续往下走
     */
    let flag =
      canReach(row - 1, col, i + 1) ||
      canReach(row + 1, col, i + 1) ||
      canReach(row, col - 1, i + 1) ||
      canReach(row, col + 1, i + 1);
    /**
     * 如果没有找到需要退回之前使用过的数字，
     * 所以used把数字退了
     */
    if (!flag) {
      used[row][col] = false;
      return false;
    }
    /**
     * 否则就算是找到了
     */
    return true;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      /**
       * 找到起点且递归结果为真
       */
      if (board[i][j] === word[0] || canReach(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}