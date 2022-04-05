/**
 * 给你一个 只包含正整数 的 非空 数组 nums 。
 * 请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 
 * 输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。

输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
 */
const canPartition = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % 2 !== 0) return false; // 奇数
  // 2个子集和为target
  let target = sum / 2;
  const dfs = (curSum, i) => {
    if (curSum > target || i === nums.length) {
      // 结束条件
      return false;
    }
    if (curSum === target) {
      return true;
    }
    // 选择nums[i] 或者不选
    const res = dfs(curSum + nums[i], i + 1) || dfs(curSum, i + 1);
    return res;
  };

  return dfs(0, 0);
};