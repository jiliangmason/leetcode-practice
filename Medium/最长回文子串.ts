/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案
 */

/**
 * 思路：
 * 依次将每个数作为回文子串的中心，向两边扩散，若左/右的值和中心的值相等，则中心可能为多个相同的数(例如："abccccba"，回文中心为"cccc")，
 * 提前移动左/右到它与中心值不相等为止，然后再看是否还是回文串。
 */

function longestPalindrome(str) {
  let len = str.len;
  /**
   * 从0开始，每个i就是一个中心
   */
  let i = 1;
  let left = i - 1;
  let right = i + 1;
  let maxLen = 0;
  let leftRes, rightRes = 0;
  while (i < len) {
    /**
     * 当中心在c时，ccc(中心)cc
     */
    while(str[i] === str[left] && left >= 0) {
      left--;
    }
    while (str[i] === str[right] && right < len) {
      right++;
    }
    /**
     * 中心下次直接移动到tmp
     */
    let tmp = right;
    /**
     *  bccccb left=b  right=b 都不等于中心c了
     * 但整体还是回文
     */
    while(str[left] == str[right] && left >=0 && right < len) {
      left--;
      right++;
    }
    if (right - left - 1 > maxLen) {
      maxLen = right - left - 1;
      leftRes = left + 1;
      rightRes = right - 1;
    } 
    i = tmp;
  }

  return str.substring(leftRes, rightRes + 1);
}