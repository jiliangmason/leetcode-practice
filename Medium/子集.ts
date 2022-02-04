/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

输入：nums = [0]
输出：[[],[0]]
 */
/**
 * 回溯算法
 */
var subsets = function (nums) {
  let path = [];
  let result = [];
  /**
   * 回溯算法，startIndex标识已经用过的数，是不能再取的
   */
  function bus(startIndex) {
    /**
     * 终止条件
     */
    if (startIndex >= nums.length) {
      result.push(path.slice());
      return;
    }
    /**
     * 横向遍历，为何从startIndex开始就是因为取过的数不能重新再取
     */
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      /**
       * 纵向递归，走向下一层
       */
      bus(i + 1);
      path.pop();
    }
  }
  bus(0);
  return result;
};