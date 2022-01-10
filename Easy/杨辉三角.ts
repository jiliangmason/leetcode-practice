/**
 * 给定一个非负整数 numRows， 生成杨辉三角的前 numRows 行
 * 
 * 输入: 5
  输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 * 
 */
function yang(numRows) {
  let result = [];
  result = Array.from(new Array(numRows).fill([]));
  for(let i = 0; i < numRows; i++) {
    result[i][0] = result[i][i] = 1;
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }
  console.log(result);
}

yang(5);