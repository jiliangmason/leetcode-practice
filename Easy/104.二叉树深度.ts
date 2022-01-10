/**
 * 只要遍历到这个节点既没有左子树，又没有右子树的时候
说明就到底部了，这个时候如果之前记录了深度，就可以比较是否比之前记录的深度大，大就更新深度
然后以此类推，一直比较到深度最大的
 * 
 */
function treeMaxDeep(root) {
  if (!root) return 0;
  let leftDep = treeMaxDeep(root.left);
  let rightDep = treeMaxDeep(root.right);
  return Math.max(leftDep, rightDep) + 1;
}