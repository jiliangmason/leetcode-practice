/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 */
/**
 * 滑动窗口，右指针不断向右移动对同一个i，左指针i从0开始
 */
function lengthOfLongestSubstring(str: string) {
  let n = str.length;
  let ans = 0;
  /**
   * 用来存字符串，不重复
   */
  let set = new Set();
  /**
   * 右指针
   */
  let rk = -1;
  for (let i = 0; i < n; i++) {
    /**
     * 左边指针向右移动，因为从第i到rk都不重复的话，那么从i+1到rk肯定也不重复
     * 所以这里把i先从set里面删了，从下一位开始右移
     */
    if (i > 0) {
      set.delete(str.charAt(i - 1));
    }
    /**
     * rk不断右移动,直到有重复元素出现
     */
    while (rk + 1 < n && !set.has(str.charAt(rk + 1))) {
      set.add(str.charAt(rk + 1));
      rk++;
    }
    ans = Math.max(ans, rk - i + 1);
  }

  return ans;
}