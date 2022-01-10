/**
 *  1
   / \
  2   2
 / \ / \
3  4 4  3
二叉树 [1,2,2,3,4,4,3] 是对称的。

某个节点的值是相等的，l1的左子节点和l2的右子节点相等，
l1的右节点和l2的左节点相等
 * 
 * 
 */

function nodeSame(root) {
  return isSame(root.left, root.right);
}

function isSame(left, right) {
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;
  if (left.val === right.val) {
    return isSame(left.right, right.left) && isSame(left.left, right.right);
  }
  return false;
}