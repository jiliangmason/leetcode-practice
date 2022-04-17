/**
 * 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
给你两个整数 x 和 y，计算并返回它们之间的汉明距离。

输入：x = 1, y = 4
输出：2
解释：
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。

输入：x = 3, y = 1
输出：1
 */
var hammingDistance = function(x, y) {
  let x1 = x.toString(2); // 转化为字符串形式的2进制
  let x2 = y.toString(2);
  let maxLen = Math.max(x.length, y.length);
  x1 = x1.padStart(maxLen, 0); // 补0
  x2 = x2.padStart(maxLen, 0);
  let ans = 0;
  for (let i = 0; i < maxLen; i++) {
    if (x1[i] !== x2[i]) {
      ans++
    }
  }
  return ans;
};
