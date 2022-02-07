/**
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 * 
 * 输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
 */
var levelOrder = function (root) {
  let res = [];
  if (!root) return res;
  /**
   * 层序遍历是把节点放到队列中，
   * 先进入队列的先出
   */
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    /**
     * 当前层所有的节点
     */
    let curLevel = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(curLevel);
  }
  return res;
};