/**
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

输入：height = [1,1]
输出：1

输入：height = [4,3,2,1,4]
输出：16
 */

/**
 * 思路：用双指针i，j循环height数，i，j对应高度较小的那个先向内移动，不断计算面积，更新最大面积
复杂度：时间复杂度O(n)，n是数组height的长度，遍历一次。空间复杂度O(1)

链接：https://leetcode-cn.com/problems/container-with-most-water/solution/11-sheng-zui-duo-shui-de-rong-qi-shuang-fi2zm/
 */
function maxArea(height) {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;
  while(i < j) {
    let minHeight = height[i] < height[j] ? height[i++] : height[j--];
    maxArea = Math.max(minHeight * (j - i), maxArea);
  }
  return maxArea;
}