/**
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
每行的元素从左到右升序排列。
每列的元素从上到下升序排列。

输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true

输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
输出：false
 */
var searchMatrix = function (matrix, target) {
  /**
   * 对于m * n的搜索矩阵，他是按照每一行从小到大排序起来的
   * 下一行的第一个比上一行最后一个要大
   * 因此解这个题目的思路是: 先找到最左下角的数
   * 如果target大于它，那么列坐标往后移动，因为它的右边都比它大
   * 如果target小于它，那么行坐标减一向上移动，因为它的上面都比它小
   */
  let m = matrix.length; // 行数
  let n = matrix[0].length; // 列数
  let row = m - 1;
  let col = 0; // 这是左下角的那个数的坐标
  while (row >= 0 && col < n) {
    if (matrix[row][col] === target) return true;
    if (matrix[row][col] > target) {
      row--;
    } else {
      col++;
    }
  }
  return false;
};
