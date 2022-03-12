/**
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。

输入：nums = [1,3,4,2,2]
输出：2

输入：nums = [3,1,3,4,2]
输出：3
 * 
 */

 /**
 * 数组元素是 1 - n 中的某一个，出现的位置不确定，但值域是确定的。

对索引二分，一般用于有序数组中找元素，因为索引的大小可以反映值的大小，因此对索引二分即可。
对值域二分。重复数落在 [1, n] ，可以对 [1, n] 这个值域二分查找。
mid = (1 + n) / 2，重复数要么落在[1, mid]，要么落在[mid + 1, n]。

遍历原数组，统计 <= mid 的元素个数，记为 k。

如果k > mid，说明有超过 mid 个数落在[1, mid]，但该区间只有 mid 个“坑”，说明重复的数落在[1, mid]。

相反，如果k <= mid，则说明重复数落在[mid + 1, n]。

对重复数所在的区间继续二分，直到区间闭合，重复数就找到了。
 * 
 */
var findDuplicate = function (nums) {
  let len = nums.length;
  let start = 1;
  let end = len;

  while (start < end) {
    let count = 0;
    let mid = (start + end) / 2;

    for (let i = 0; i < len; i++) {
      /**
       * 统计落在[1, mid]范围内的数的个数
       *
       */
      if (nums[i] < mid) {
        count++;
      }
    }
    /**
     * 说明重复数在[1, mid]的个数比mid多
     */
    if (count > mid) {
      end = mid;
    } else {
      // 说明重复数在[mid+1, len]
      start = mid + 1;
    }
  }
  return start;
};