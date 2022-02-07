/**
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]

输入: preorder = [-1], inorder = [-1]
输出: [-1]
 */
var buildTree = function (preorder, inorder) {
  let root = preorder[0];
  let mid = inorder.findIndex((item) => item.val === root.val);
  /**
   * 从1开始，以为第一个是root
   * 由于中序遍历的mid左侧全是左子树，多以从1到mid是左子树的前序遍历
   */
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(
    preorder.slice(mid + 1, preorder.length),
    /**
     * 从root后面1位开始是右子树
     */
    inorder.slice(mid + 1, inorder.length)
  );
  return root;
};