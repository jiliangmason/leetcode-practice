/**
 * 解题思路：
 * 二叉搜索树：左子树节点都小于根节点值，右子树节点都大于根节点值。
由于nums已经升序排列，要构造高度平衡二叉树，所以只需将中间值作为根节点，左边数组的数去构造左子树，右边数组的数去构造右子树，递归构造。
 * 
 */
/**
 * 提供一个TreeNode类来构建二叉树
 */
function TreeNode(root) {
  this.root = root;
}

function buildTree(nums: number[], l: number, r: number) {
  let mid = (l + r) >> 1;
  let root = new TreeNode(nums[mid]);
  root.left = buildTree(nums, l, mid - 1);
  root.right = buildTree(nums, mid + 1, r);
  return root;
}