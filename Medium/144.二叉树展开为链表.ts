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

/**
 * 如果是把所有的节点都放在root的右侧
 */
var flatten = function (root) {
  /*
  函数的定义：给 flatten 函数输入一个节点 root，那么以 root 为根的二叉树就会被拉平为一条链表。
   */
  // base case
  if (root == null) return;

  flatten(root.left);
  flatten(root.right);

  // 1、左右子树已经被拉平成一条链表
  // 先用两个变量把原先的左右子树保存起来
  let left = root.left;
  let right = root.right;

  // 2、将左子树作为右子树
  root.left = null;
  root.right = left;

  // 3、将原先的右子树接到当前右子树的末端
  while (root.right != null) {
    root = root.right;
  }
  root.right = right;
};