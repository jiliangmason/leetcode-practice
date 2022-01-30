/**
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 */
var rotate = function(matrix) {
  const n = matrix.length;
  const matrix_new = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        /**
         * 翻转后坐标的关系
         */
          matrix_new[j][n - i - 1] = matrix[i][j];
      }
  }
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          matrix[i][j] = matrix_new[i][j];
      }
  }
};