/**
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
二叉搜索树是一个有序树：
若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
它的左、右子树也分别为二叉搜索树

解析：https://leetcode-cn.com/problems/unique-binary-search-trees/solution/shou-hua-tu-jie-san-chong-xie-fa-dp-di-gui-ji-yi-h/
 */
/**
 * dp算法
 */
const numTrees = (n) => {
  let dp = new Array(n);
  /**
   * 当树没有节点时，为空树也算一种
   */
  dp[0] = 1;
  /**
   * 当树只有一个节点的时候，就只有一个节点
   */
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    /**
     * 除去根节点i，左边用了j个，右边剩下i-1-j个节点可以拿来组成搜索树
     */
    for (let j = 0; j < i; j++) {
      /**
       * 注意这里是乘法，就像左边1 2 3 右边 4 5 6一共就有9种
       */
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }
  return dp[n];
}