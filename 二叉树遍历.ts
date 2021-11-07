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
 * 
 */
function preorderTravel(root) {
  let stack = [];
  let res = [];
  while(root || stack.length) {
    while(root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    stack.pop();
    root = root.right;
  }

  return res;
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
