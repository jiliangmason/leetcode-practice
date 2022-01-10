/**
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。

示例 1:

输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
示例 2:

输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
 */

/**
 * 解法：找规律
 * 看1 - n中有几个5，末尾就有几个0，因为5乘以2产生0
 * 
 * 另外注意像25 125这种比较特殊，那么如果n的阶乘包含这几个那么
 * 最终产生的0为：Math.floor(n / 5) + Math.floor(n / (5*5)) + ... 个0
 */
function jiechen(n) {
  let res = 0;
  let intl = 5;
  while(n / intl >= 1) {
    res += Math.floor(n / intl);
    intl *= 5;
  }
  return res;
}