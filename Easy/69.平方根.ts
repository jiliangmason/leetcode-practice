/**
 * 题目如下： 实现 int sqrt(int x) 函数。
计算并返回 x 的平方根，其中 x 是非负整数。
由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

输入: 4
输出: 2

输入: 8
输出: 2

说明: 8 的平方根是 2.82842..., 
由于返回类型是整数，小数部分将被舍去。
 */

/**
 * 解题思路：
 * 二分法
 */
function sqrt(x: number) {
  let left = 0;
  let right = x;
  let mid = -1;
  while(left <= right) {
    mid = (left + right) / 2;
    if (mid * mid > x) {
      left = mid + 1;
    }
    else if (mid * mid < x) {
      right = mid - 1;
    }
    else {
      return mid;
    }
  }
  return mid;
}