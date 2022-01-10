/**
 * 我们先看题目：
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
示例 1：
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]

示例 2：
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
 
提示：
nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109
 */

/**
 * 双指针：从正面
 * 方法一没有利用数组nums1 与 nums2
  已经被排序的性质。为了利用这一性质，我们可以使用双指针方法。
  这一方法将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中。
 */
function combine(num1: number[], m: number, num2: number[], n: number) {
  let p1 = 0;
  let p2 = 0;
  let cur = 0;
  let tmp = new Array(m + n).fill(0);
  while(p1 < m || p2 < n) {
    if (p1 === m) {
      cur = num2[p2++]; // p1到头了
    }
    else if (p2 === n) {
      cur = num1[p1++]; // p2到头了
    }
    else if (num1[p1] < num2[p2]) {
      cur = num1[p1++];
    }
    else {
      cur = num2[p2++];
    }
    tmp[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i < m + n; i++) {
    num1[i] = tmp[i];
  }

  return num1;
}
/**
 * 解释：为什么要有个cur，之所以要使用临时变量，是因为如果直接合并到数组
 * nums1中，nums1中的元素可能会在取出之前被覆盖。
 */

/**
 * 方法二：双指针从背后
 * 那么如何直接避免覆盖 nums1
​   中的元素呢？观察可知，nums1的后半部分是空的，可以直接覆盖而不会影响结果。因此可以指针设置为从后向前遍历，每次取两者之中的较大者放进nums1的最后面。
 */
function combineB(num1: number[], m: number, num2: number[], n: number) {
  let p1 = m;
  let p2 = n;
  let tail = m + n - 1;
  let cur = 0;
  while(p1 > 0 || p2 > 0) {
    if (p1 === 0) {
      cur = num2[p2--]; // p1减没了
    }
    else if (p2 === 0) {
      cur = num1[p1--]; // p2减没了
    }
    else if (num1[p1] < num2[p2]) {
      cur = num2[p2--];
    }
    else {
      cur = num1[p1--];
    }
    num1[tail--] = cur; // 每次都选大的从num1的最后往前排
  }
}
