/**
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
* 
 */
/**
 * 解法：二分法
 */
function searchNum(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = start + ((end - start) >> 1);
    if (target === nums[mid]) return mid;
    /**
     * 前半段都是升序
     */
    if (nums[mid] > nums[start]) {
      if (target > nums[start] && target < nums[mid]) {
        /**
         * 说明target在前半段
         */
        end = mid - 1;
      } else {
        /**
         * target在后半段
         */
        start = mid + 1;
      }
    }
    /**
     * 后半段是升序
     */
    if (nums[mid] < nums[end]) {
      if (target > nums[mid] && target < nums[end]) {
        /**
         * target在后半段
         */
        start = mid + 1;
      } else {
        /**
         * target在前半段
         */
        end = mid - 1;
      }
    }
  }

  return nums[start + 1] === target ? start + 1 : -1;
}