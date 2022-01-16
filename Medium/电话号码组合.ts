/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */

/**
 * 回溯算法
 * 
 * 回溯模型：二叉树
 * const letterCombinations = (入参, index: 层数) => {
 *    if (终止条件) {
 *      组装结果
 *      return;
 *    }
 *    
 *    for (遍历每个组合) {
 *      处理每个组合的每个子元素queue.push(xxx) （二叉树同一层横向遍历）
 *      letterCombinations(入参 层数index+1) （纵向递归）
 *      回溯退回到上一个节点queue.pop()
 *    }
 * }
 */
const letterCombinations = function (digit) {
  let len = digit.length;
  let numberMap = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  let res = [];
  /**
   * path用来保存每一个字母组合如：['a', 'b', 'c']
   */
  let path = [];
  /**
   * index表示层数, 本质上回溯是一个二叉树，横向是遍历，纵向是递归
   */
  let dfs = (digit, index) => {
    /**
     * 说明已经到达了最后一层, 终止条件
     */
    if (index > len - 1) {
      res.push(path.join('')); // ['a', 'b', 'c'] => ['abc']
      return;
    }

    /**
     * 横向遍历，比如节点 a b c
     */
    for (const letter of numberMap[digit[index]]) {
      console.log(letter)
      /**
       * numberMap[digit[index]] 为 ‘abc’
       * letter 为 'a'  'b'  'c'
       * 分别是二叉树每个节点
       */
      path.push(letter); // 同一层横向遍历
      dfs(digit, index + 1); // 向下一层纵向递归
      path.pop(); // 回溯退回到上一个节点
    }
  };

  dfs(digit, 0);
  return res;
};
