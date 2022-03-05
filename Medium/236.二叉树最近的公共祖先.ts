/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  }
  // root就是本身
  if (root == q || root == p) {
    return root;
  }
  // root非null 非q 非p，则递归左右子树
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left === null && right === null) {
    return null;
  }
  if (left && right) {
    return root;
  }
  /**
   * 如果只是一个子树递归调用有结果，说明 p 和 q 都在这个子树，返回该子树递归结果。
   *
   */
  if (left === null && right !== null) {
    return right;
  }
  return left;
};