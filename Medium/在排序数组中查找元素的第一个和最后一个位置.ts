/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
 */

function searchRange(nums, target) {
  function find(isLeft) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      let mid = start + ((end - start) >> 1);
      /**
       * target比mid小
       */
      if (target < nums[mid]) {
        end = mid - 1;
      } else if (target > nums[mid]) {
        start = mid + 1;
      } else {
        /**
         * 处理边界，target = mid, 找最左边的那个数
         * 如果mid不是第一个元素并且前面一个相邻的元素也跟mid相等，则搜索区间向左缩小
         */
        if (isLeft) {
          if (nums[mid] === nums[mid - 1]) {
            /**
             * 如果mid和前一个相等
             * 收缩左侧
             */
            end = mid - 1;
          } else {
            return mid;
          }
        } else {
          /**
           * 找最右边的那个
           * 如果mid不是最后一个元素并且后面一个相邻的元素也跟mid相等，则搜索区间向右缩小
           */
          if (nums[mid] === nums[mid + 1]) {
            start = mid + 1;
          } else {
            return mid;
          }
        }
      }
    }
    /**
     * 都没有找到
     */
    return -1;
  }

  let left = find(true);
  let right = find(false);
  return [left, right];
}