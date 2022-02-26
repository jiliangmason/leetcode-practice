/**
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，
表示如果要学习课程 ai 则 必须 先学习课程  bi 。
例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。

输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。

解析：https://leetcode-cn.com/problems/course-schedule/solution/bao-mu-shi-ti-jie-shou-ba-shou-da-tong-tuo-bu-pai-/
 */
/**
 * 有向图  数组[1,0] [果，因]
 */
const canFinish = (numCourses, prerequisites) => {
  /**
   * numCourses = 6为例
   * prerequisites=[[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]]
   * [果, 因]
   */
  let inDegree = new Array(numCourses).fill(0);
  let map = {};

  /**
   * 初始入度值，放入所有的‘果’，如果一个果有不同的因构成那就加1
   * 记录一个果有多少个因
   * inDegree[3] = 2 (0和1)
   */
  for (let i = 0; i < inDegree.length; i++) {
    inDegree[prerequisites[i][0]]++;
    /**
     * map用来记录一个因可以有多少个果
     * map[因] = [果1, 果2, ...]
     * map[0] = [3]
     * map[1] = [3, 4]
     * map[2] = [4]
     * map[3] = [5]
     * map[4] = [5]
     */
    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0]);
    } else {
      map[prerequisites[i][1]] = prerequisites[i][0];
    }
  }
  /**
   * 记录入度为0的点 也就是没有因的果
   */
  let queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  /**
   * queue = [0,1,2] 因为没有数需要他们
   */
  let count = 0;
  while (queue.length) {
    let top = queue.shift();
    count++;
    let select = map[top];
    if (select && select.length) {
      /**
       * top = 0
       * select = map[0] = [3] 果组成的数组
       * i = 0 select[0] = 3
       * inDegree[3] = 2有两个因  先减少一个直到为0加入queue
       */
      for (let i = 0; i < select; i++) {
        inDegree[select[i]]--;
        if (inDegree[select[i]] === 0) {
          queue.push(select[i]);
        }
      }
    }
  }
  return count === numCourses; // 选了的课为总数
};
