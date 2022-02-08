/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 */
var longestConsecutive = function (nums) {
  let s = new Set(nums);
  let max = 0;
  for (let it of s) {
    /**
     * 说明没有比它小1的左邻居
     * 可以作为起点
     */
    if (!s.has(it - 1)) {
      let count = 1;
      let cur = it;
      /**
       * 说明数组中一直存在连续的数
       */
      while (s.has(cur + 1)) {
        cur++;
        count++;
      }
      max = Math.max(max, count);
    }
  }
  return max;
};