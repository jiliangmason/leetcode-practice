/**
 * 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。
除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，
聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。
给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。
 */

/**
 * 打不打劫根节点，会影响打劫一棵树的收益：

打劫根节点，则不能打劫左右子节点，但是能打劫左右子节点的四个子树（如果有）。
不打劫根节点，则能打劫左子节点和右子节点，收益是打劫左右子树的收益之和。
 */

function rob(root) {
  if (root == null) return 0;
  let includeRoot = root.value;
  if (root.left) {
    includeRoot += rob(root.left.left) + rob(root.left.right);
  }
  if (root.right) {
    includeRoot += rob(root.right.left) + rob(root.right.right);
  }
  let excludeRoot = rob(root.left) + rob(root.right);
  return Math.max(includeRoot, excludeRoot);
}