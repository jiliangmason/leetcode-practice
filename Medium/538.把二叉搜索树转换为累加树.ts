/**
 * 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），
 * 使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。
提醒一下，二叉搜索树满足下列约束条件：
节点的左子树仅包含键 小于 节点键的节点。
节点的右子树仅包含键 大于 节点键的节点。
左右子树也必须是二叉搜索树。
 */
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var convertBST = function (root) {
  let sum = 0;
  function inOrder(root) {
    if (root === null) {
      return;
    }
    // 先右子树，都比root节点大
    inOrder(root.right);
    sum += root.val;
    // 更新当前节点的值
    root.val = sum;
    // 再迭代左子树
    inOrder(root.left);
  }
  inOrder(root);
  return root;
};
