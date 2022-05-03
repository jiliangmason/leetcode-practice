/**
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
 * 这条路径可能穿过也可能不穿过根结点。
 */
 var diameterOfBinaryTree = function(root) {
  let maxDeep = 0;
  function dfs(root) {
    if (root === null) {
      return;
    }
    // 左子树的最大深度
    let leftDeep = dfs(root.left);
    // 右子树的最大深度
    let rightDeep = dfs(root.right);
    maxDeep = Math.max(maxDeep, leftDeep + rightDeep);
    // 1代表了根节点
    // 返回该节点的最大深度
    return Math.max(leftDeep, rightDeep) + 1;
  }
  dfs(root);
  return maxDeep;
};