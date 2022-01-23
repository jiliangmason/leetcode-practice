/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。
 * 你可以 按任意顺序 返回答案。
 * 
 * 
 *输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

  输入：nums = [0,1]
  输出：[[0,1],[1,0]]
 */
var permute = function (nums) {
  let result = [];
  let path = [];

  /**
   * used数组标识哪些数字已经用过了
   */
  let subPermute = (nums, used) => {
    /**
     * 迭代截止条件, used和nums相等说明所有数字都被用到了
     */
    if (used.length === nums.length) {
      result.push(path);
      return;
    }
    /**
     * 横向迭代
     */
    for (let i = 0; i < nums.length; i++) {
      /**
       * 剪枝如果used[i]=true说明该位置已经被占
       */
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      subPermute(nums, used);
      /**
       * 回溯
       */
      path.pop();
      used[i] = false;
    }
  };

  subPermute(nums, []);
};
