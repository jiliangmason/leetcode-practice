/**
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。
 * 不考虑答案输出的顺序。
异位词 指由相同字母重排列形成的字符串（包括相同的字符串）

输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 */
/**
 * 滑动窗口法
 */
var findAnagrams = function(s, p) {
  const sLen = s.length;
  const pLen = p.length;
  let ans = [];
  if (sLen < pLen) {
    return [];
  }
  let sStrCnt = new Array(26).fill(0);
  let pStrCnt = new Array(26).fill(0);
  for (let i = 0; i < pLen; i++) {
    // 以p的长度为主，先遍历2个字符串，形成abc => [1,1,1]记录每个字符出现数量
    // abc => [1,1,1]  bac=>[1,1,1]
    ++sStrCnt[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];
    ++pStrCnt[p[i].charCodeAt(0) - 'a'.charCodeAt(0)];
  }
  // 数组的toString是转化成逗号隔开的字符串，此时滑动窗口的leftIndex=0
  if (sStrCnt.toString() === pStrCnt.toString()) {
    ans.push(0);
  }
  for (let i=0; i<sLen - pLen; i++) {
    --sStrCnt[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]; // 窗口第一个老字符出窗口
    ++sStrCnt[s[i + pLen].charCodeAt(0) - 'a'.charCodeAt(0)]; // 窗口右侧新字符入窗口
    if (sStrCnt.toString() === pStrCnt.toString()) {
      ans.push(i+1);
    }
  }

  return ans;
};