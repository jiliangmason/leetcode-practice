/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。

示例 1：

输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
 */
/**
 * 变形：把二叉树右子节点变成左子节点的右子节点
 * 就是把右节点全部变成链表插入到左子树
 */

function flattenTree(root) {
  const right = root.right;
  const left = root.left;

  flattenTree(root.right);
  flattenTree(root.left);
  // 1、左右子树已经被拉平成一条链表
  // 先用两个变量把原先的左右子树保存起来
  root.right = null;
  root.left = right;

  /**
   * 遍历树的所有左边的节点直到末端
   */
  while (root.left !== null) {
    root = root.left;
  }
  /**
   * 末端的右节点插入最开始的左子树
   */
  root.right = left;
}