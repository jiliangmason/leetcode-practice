/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

输入：nums = [1]
输出：1
 */

/**
 * 解法：动态规划
 * 思路和算法
f(i)表示了第i项的和，f(i-1)表示之前的项和，f(i)=max(f(i-1), num[i])
再用一个tmp临时变量来记录一下，最大的子项和，max(f(i), tmp)
 *
 */

function maxSub(arr) {
  let tmp = arr[0]; // 记录最大子项和
  let pre = 0;
  for (let i = 0; i < arr.length; i++) {
    pre = Math.max(pre + arr[i], arr[i]);
    tmp = Math.max(pre, tmp);
  }

  return tmp;
}
