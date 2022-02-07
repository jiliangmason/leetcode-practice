/**
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
 */
var isValidBST = function (root, min, max) {
  if (!root) return true;
  if (root.val >= max || root.val <= min) {
    return false;
  }
  return (
    /**
     * 迭代左子树，最大的值是根节点也就是root.val
     * 要是个合法的搜索树，那么他的左子节点都比跟节点小
     * 右子树同理
     */
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};