/**
 * 题目如下：
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
 * 
示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 

提示：

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成
 */

function getCommonStr(strs: string[]): string {
  function compare(a: string, b: string): string {
    let str = '';
    let len = Math.min(a.length, b.length);
    for(let i=0; i<len; i++) {
      if (a[i] === b[i]) {
        str += a[i];
      }
      else {
        return str;
      }
    }

    return str;
  }

  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  return strs.reduce(compare, strs[0]);
}