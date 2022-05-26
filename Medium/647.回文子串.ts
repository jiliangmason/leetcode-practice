/**
 * 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

回文字符串 是正着读和倒过来读一样的字符串。

子字符串 是字符串中的由连续字符组成的一个序列。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"

输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 * 
 */
/**
 * 中心扩散法
 */
function countSubstrings(str) {
  /**
   * 找规律：
   * 中心扩散法
   * 长度为 n 的字符串会生成 2n-1 组回文中心[li, ri]
   * 其中li = i/2  ri = i/2 + i%2
   * 从中心朝两边扩散
   */
  const n = str.length;
  let ans = 0;
  for (let i = 0; i < 2 * n - 1; i++) {
    let l = i / 2;
    let r = i / 2 + (i % 2);
    while (l >= 0 && r < n && str.charAt(l) === str.charAt(r)) {
      l--;
      r++;
      ans++;
    }
  }
  return ans;
}

/**
 * 双指针法
 * 遍历每一个字符，以每个字符为中心朝两边扩散检测是否为回文
 * 因为中点存在两种可能，奇数与偶数，奇数的中心为i，偶数为i+1
 */
let countSubstrings1 = function(s) {
  // 判断空串情况
  if (s == null || !s.length) {
    return 0;
  }
  const countPalindrome = (s, start, end) => {
    let count = 0;
    // 从字符串的中心开始向两端延伸
    // 如果存在一个长度为m的回文子字符串，则分别再向该回文的两端延伸一个字符，并判断回文前后的字符是否相同
    while (start >= 0 && end < s.length && s.charAt(start) == s.charAt(end)) {
      count++;
      start++;
      end--;
    }
    return count;
  };

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // 回文的长度既可以是奇数，也可以是偶数
    // 长度为奇数的回文的对称中心只有一个字符
    // 第i个字符本身可以成为长度为奇数的回文子字符串的对称中心
    count += countPalindrome(s, i, i);
    // 长度为偶数的回文的对称中心只有两个字符
    // 第i个字符和第i+1个字符可以一起成为长度为偶数的回文子字符串的对称中心
    count += countPalindrome(s, i, i + 1);
  }
  return count;
};