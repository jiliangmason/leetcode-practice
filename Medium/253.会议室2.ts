/**
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
 * find the minimum number of conference rooms required.
 * 
 * [[0, 30],[5, 10],[15, 20]]
Input: [[7,10],[2,4]]
Output: 1
 * 
 */
var minMeetingRooms = function (intervals) {
  /**
   * start用来放所有的开始时间
   * end用来放所有的结束时间
   */
  let start = [];
  let end = [];
  for (let i = 0; i < intervals.length; i++) {
    start.push(intervals[i][0]);
    end.push(intervals[i][1]);
  }
  /**
   * 把start和end分别从小到大排序
   */
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  let rooms = 0;
  let endPos = 0;
  for (let i = 0; i < intervals.length; i++) {
    /**
     * 因为结束时间是从小到大排列
     * 如果此时的开始时间大于某个最小的结束时间
     * 说明此时会议室已经空出来了，最小结束时间可以换了
     * 只需要把结束时间往后移动一位，更新最小的结束时间
     */
    if (start[i] > end[endPos]) {
      endPos++;
    } else {
      /**
       * 如果开始时间比当前最小的结束时间都要小，说明会议室依旧
       * 被占用，此时会议室数加一
       */
      rooms++;
    }
  }
  return rooms;
};