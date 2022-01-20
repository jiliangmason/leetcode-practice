/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

输入：n = 1
输出：["()"]
 */
function generateParenthesis(n) {
  let res = [];
  let dfs = (str, leftRest, rightRest) => {
    if (str.length === n * 2) {
      res.push(str);
      return;
    }
    /**
     * leftRes为左括号剩下的个数
     * 只要(有剩，就可以选(。 (((((这么选，都还不能判定为非法。
     */
    if (leftRest > 0) {
      dfs(str + '(', leftRest - 1, rightRest);
    }
    /**
     * rightRest为有括号剩下的个数
     * 右括号只有比左括号剩下的多，才说明剩下的右括号可以和已经有的左括号进行配队
     * 否则 ()) 这种情况右括号剩下的比左括号少，下一个肯定非法
     */
    if (leftRest < rightRest) {
      dfs(str + ')', leftRest, rightRest - 1);
    }
  };

  dfs('', 3, 3);
  return res;
}