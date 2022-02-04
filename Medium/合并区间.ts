/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * 
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);
  let result = [];
  let prev = intervals[0];
  let cur = [];
  for (let i = 1; i < intervals.length; i++) {
    /**
     * 如果前一个小区间的右边界 > 下一个小区间左边界
     * 说明有交叉部分
     * 需要合并且合并后的右边界是前一个小区间右边界与下一个小区间右边界中大的那个
     */
    cur = intervals[i];
    if (prev[1] > cur[0]) {
      prev[1] = Math.max(prev[1], cur[1]);
    } else {
      result.push(prev);
      prev = cur;
    }
  }

  /**
   * 合并完后加入result
   */
  result.push(prev);
  return result;
};

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals));

