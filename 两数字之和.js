/**
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出 和为目标值target的那两个整数，并返回它们的数组下标。
示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例 2：
输入：nums = [3,2,4], target = 6
输出：[1,2]

示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]
 */

function getSum(arr, target) {
  let map = new Map();
  for(let i=0; i<arr.length; i++) {
    if (map.get(arr[i]) === 'undefined') {
      // 这一步设置target-arr[i],假如后面有一个满足的可以马上返回下标
      // 这里的i是arr[i]的下标
      map.set(target - arr[i], i);
    }
    else { 
      // 如果arr[i]有值那么一定是之前被设置过，所以直接返回下标
      // 注意这里的arr[i]=target - arr[之前的i]
      return [i, map.get(arr[i])]
    }
  }
  return []
}

/**
 * 哈希表 + 映射功能
 * 
 */