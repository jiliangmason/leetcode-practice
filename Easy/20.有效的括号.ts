/**
 * 左括号必须用相同类型的右括号闭合。 左括号必须以正确的顺序闭合
 *
 * 示例 1：
输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
 */

/**
 * 解法：思路： 这道题有一规律：
右括号前面，必须是相对应的左括号，才能抵消！
右括号前面，不是对应的左括号，那么该字符串，一定不是有效的括号！
 *
 */

const isValide = (s: string) => {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let str of s) {
    if (map[str]) {
      stack.push(str); // stack = [ ( ]
    } else {
      // str = ")" stack[stack.length - 1] = "("
      if (map[stack[stack.length - 1]] === str) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return true;
};
