/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
 
输入：nums = []
输出：[]
 */
/**
 * 双指针法
 */
function threeSum(nums) {
  let ans = [];
  let len = nums.length;
  if (nums === null || nums.length < 3) {
    return ans;
  }
  /**
   * 从大到小进行排序
   */
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    /**
     * 左右两个指针，左指针指向i+1, 右指针指向len - 1
     *
     */
    let left = i + 1;
    let right = len - 1;
    /**
     * 去重，这种情况下i直接向后移动一位
     */
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    /**
     * nums[i] > 0说明了他之后的left和right都比他大，sum肯定大于0
     */
    if (nums[i] > 0) {
      break;
    }
    while (left < right) {
      let sum = 0;
      sum = nums[left] + nums[i] + nums[right];
      /**
       * 因为是从小到大排序，sum>0 只能减少right
       */
      if (sum > 0) {
        right--;
      }
      /**
       * 同上
       */
      if (sum < 0) {
        left++;
      }
      if (sum === 0) {
        ans.push([nums[left], nums[i], nums[right]]);
        /**
         * left去除重复
         */
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        /**
         * right去除重复
         */
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }

  return ans;
}