/**
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 输入: [3,2,1,5,6,4] 和 k = 2
输出: 5

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
 */
/**
 * 
 * [1, 2, 3, 5, 8, 4]
pivotIndex 左边都比它小
 * 
 */
function findK(nums, k) {
  const n = nums.length;
  function quick(left, right) {
    if (left > right) return;
    let pivotIndex = parition(nums, left, right);
    /**
     * n-k在pivotIndex之前，由于pivotIndex之前都是比它小的
     * 所以需要继续迭代之前的
     */
    if (n - k < pivotIndex) {
      quick(0, pivotIndex - 1);
    } else {
      quick(pivotIndex + 1, right);
    }
  }

  /**
   * n - k == pivotIndex ，此时 nums 数组被 n-k 分成两部分
   * 左边元素比 nums[n-k] 小，右边比 nums[n-k] 大，因此 nums[n-k] 就是第K大的元素
   */
  quick(0, n - 1);
  return nums[n - k];

  function parition(nums, left, right) {
    let pivot = nums[right];
    let pivotIndex = left;
    for (let i = left; i < right; i++) {
      /**
       * 如上pivot=4，1 2 3都比它小
       * pivotIndex先到3的后一位的位置，它的前面都比nums[right]小
       */
      if (nums[i] < pivot) {
        swap(nums, i, pivotIndex);
        pivotIndex++;
      }
    }
    /**
     * 交换pivotIndex的元素也就是3和4
     * 1，2，3，4，5，8
     * 此时pivotIndex为4，保证了它前面都比它小
     */
    swap(nums, pivotIndex, right);
    return pivotIndex;
  }

  function swap(nums, left, right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    return nums;
  }
}