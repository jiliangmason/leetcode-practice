/**
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

示例 1：

输入：columnNumber = 1
输出："A"
示例 2：

输入：columnNumber = 28
输出："AB"
示例 3：

输入：columnNumber = 701
输出："ZY"
示例 4：

输入：columnNumber = 2147483647
输出："FXSHRXW"
 * 
 */

/**
 * 解法：这是一个26进制的题目
 * 循环遍历每个字母 (a[i] - A) + 1
 * 然后看它的位置下标  比如 123转26进制就是  1*26的2次方 + 2*26的1次方 + 2*26的零次方
 * 
 */
function excelNo(arr) {
  let ans = 0;
  for(let i=arr.length - 1; i>0; i--) {
    ans += (arr[i].charCodeAt() - 'A'.charCodeAt(1) + 1) * (Math.pow(26, arr.length - 1 - i));
  }
  return ans;
}