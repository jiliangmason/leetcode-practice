/**
 * 非递归方法前序遍历二叉树
 * 结合图片发现这个遍历产生的整体压栈的顺序是
 * 规律：
 * 所谓的前中后序遍历实际上是指中间节点在哪个位置
 * 比如前序：中左右
 * 中序：左中右
 * 后续：左右中
 * 
 */
/**
 * 迭代法：前序遍历
 * 入栈顺序为中 右 左
 * 且中间节点先入栈然后马上出栈
 * 详细见：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/dai-ma-sui-xiang-lu-che-di-chi-tou-qian-xjof1/
 */
const preorderTraversal = (root, res = []) => {
  if (!root) return res;
  /**
   * root最先进去
   */
  let stack = [root];
  while(stack.length) {
    /**
     * 先把root出栈
     */
    let cur = stack.pop();
    res.push(cur.val);
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  return res;
}

/**
 * 中序遍历
 * 先遍历到最左的叶子节点 然后再退回到中间节点，最后再处理后节点
 */
const inorderTraversal = (root, res) => {
  let stack = [];
  let cur = root;
  while(stack.length || cur) {
    if (cur) {
      /**
       * 1、一直遍历到最左边的节点，
       * 每遍历一个就放到stack里面
       * 其中也包含了中间节点
       * 
       * 3、右节点放到stack入栈，但是右节点没有左子节点
       * 所以cur=null，再次进入while
       * 此时已经左 -> 中 -> 右一轮了
       */
      stack.push(cur);
      /**
       * 1、直到最左边叶子节点没有左节点了，cur.left=null
       * cur = cur.left = null
       * 重新回到while
       */
      cur = cur.left;
    }
    else {
      /**
       * 1、接上面，此时stack.length>0 cur=null
       * 2、第二次cur=null，stack.length>0
       * stack.pop弹出中间节点
       * 中间节点有右节点所以cur=cur.right再回while
       */
      cur = stack.pop(); // 第一次是最左边的子节点
      res.push(cur.val);
      /**
       * 1、最左边的子节点没有右节点，cur = cur.right = null
       * 继续回到while
       */
      cur = cur.right;
    }
  }
  return res;
}

/**
 * 后续遍历 左右中
 * 就是把前序遍历改顺序（前序是中 左 右）
 * 变成中 右 左 然后颠倒一下就行
 */
const postorderTraversal = (root, res) => {
  if (!root) return res;
  let stack = [root];
  while(stack.length) {
    /**
     * 先处理中
     */
    let cur = stack.pop();
    res.push(cur.val);
    /**
     * 在处理右和左，所以要先左入栈 后右入栈
     */
    if (cur.left) {
      stack.push(cur.left);
    }
    if (cur.right) {
      stack.push(cur.right);
    }
    return res.reverse();
  }
}

/**
 * 层序遍历
 * level 0 [[1,2,3], [4,5,6]]
*/
function levelLoop(root, level) {
  if (!root) return;
  res[level].push(root.val);
  if (root.left) {
    levelLoop(root.left, level + 1);
  }
  if (root.right) {
    levelLoop(root.right, level + 1);
  }
}

function loop() {
  let res = [];
  levelLoop(root, 0);
  return res;
}
