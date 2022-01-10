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