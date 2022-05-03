/**
 * 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，
如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
请你找出符合题意的 最短 子数组，并输出它的长度。
 */
var findUnsortedSubarray = function (nums) {
  // 如果已经排好了序，那么久不存在需要排序的子数组
  if (isSort(nums)) {
    return 0;
  }
  let left = 0;
  let right = nums.length;
  // 排序数组与原数组的差异数组，右边界 - 左边界的长度
  let arrSort = nums.sort((a, b) => a - b);
  while (nums[left] === arrSort[left]) {
    left++;
  }

  while (arrSort[right] === nums[right]) {
    right--;
  }
  return right - left + 1;
};

function isSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }
  return true;
}