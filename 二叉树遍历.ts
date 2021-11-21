/**
 * 非递归方法前序遍历二叉树
 * 结合图片发现这个遍历产生的整体压栈的顺序是
A、B、D入栈，
D出栈
B出栈
E入栈
E出栈
A出栈
C入栈
C出栈
F入栈
F出栈
 * 
 */
/**
 * 解法总结就是：先把左边的节点全部入栈，然后从尾部出栈，
 * 每出一个节点，看节点有没有右边，如果有就看右边节点有没有左节点，有左节点就再来一次入栈全部左节点
 * 顺序：中左右
 */
function preorderTravel(root) {
  let stack = []; // 栈
  let res = [];
  while(root || stack.length) {
    while(root) { // 表示一直深递归左子树
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    stack.pop(); // 返回最后一个左子节点的父节点
    root = root.right; // 父节点的右子节点
  }

  return res;
}

/**
 * 中序遍历
 * 顺序：左中右
 */
function midTravel(root) {
  let res = [];
  let stack = [];
  while(root || stack.length) {
    while(root) {
      stack.push(root);
      root = root.left;
    }
  }
  root = stack.pop(); // 到这里说明上一步已经到某个分支最后一个左子节点，往上退到root（父节点）
  res.push(root.val);
  root = root.right;
}

/**
 * 后续遍历，先遍历右子树
 * 顺序：左右中
 */
function postTravel(root) {
  let res = [];
  let stack = [];
  while(root || stack.length) {
    while(root) {
      stack.push(root);
      res.push(root.val);
      root = root.right;
    }
    root = stack.pop();
    root = root.left;
  }

  return res.reverse(); // 入栈：中右左  出栈： 左右中
}

/**
 * 模板代码
 * 
 */
var Traversal = function(root) {
  const stack = [];
  while (root || stack.length){
    while(root){
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  // return res;
};
