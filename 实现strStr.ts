/**
 * 题目如下：
实现 strStr() 函数。
给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。
如果不存在，则返回  -1 。

示例 1：
输入：haystack = "hello", needle = "ll"
输出：2

示例 2：
输入：haystack = "aaaaa", needle = "bba"
输出：-1

示例 3：
输入：haystack = "", needle = ""
输出：0
 
提示：
0 <= haystack.length, needle.length <= 5 * 104
haystack 和 needle 仅由小写英文字符组成
 * 
 */
function strStr(haystack: string, needle: string) {
  let lenH = haystack.length;
  let lenN = needle.length;
  /**
   * 这里为什么是lenH - lenN
   * 因为haystack只能往后移动lenH - lenN位
   */
  for (let i=0; i <= lenH - lenN; i++) {
    let flag = false;
    for (let j=0; j<lenN; j++) {
      if (needle[j] !== haystack[i]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return i;
    }
  }
  return -1;
}