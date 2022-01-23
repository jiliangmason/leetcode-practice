/**
 * 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 
对于给定的输入，保证和为 target 的不同组合数少于 150 个。
 *
 输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。

输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]] 
 */
var combinationSum = function (candidates, target) {
  let result = [];
  let path = [];
  candidates.sort();
  
  let subCombine = (index, sum) => {
    /**
     * 终止条件
     */
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push(path);
      return;
    }
    /**
     * 横向遍历
     */
    for (let i = index; i < candidates.length; i++) {
      let n = candidates[i];
      /**
       * 剪纸：如果满足sum和当前数加起来大于target就没必要往下层树继续迭代了
       */
      if (sum + n > target) continue;
      sum += n;
      path.push(n);
      /**
       * 为何不是i+1,因为可以是重复的数
       * 纵向递归
       */
      subCombine(i, sum);
      /**
       * 回溯退回上一个节点
       */
      path.pop();
      sum -= n;
    }
  };
  subCombine(0, 0);
  return result;
};

