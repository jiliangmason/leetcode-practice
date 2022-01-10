/**
 * 简单定义
二叉排序树 又称为 二叉搜索树或二叉查找树
特征
(1) 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值
(2) 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值
(3) 它的左、右子树也分别为二叉查找树
 * 
 */
function CNode(data) {
  this.value = data;
  this.left = null;
  this.right = null;
}

function create(node) {
  function insert(root, node) {
    if (root.value > node.value) { // 插入左节点
      if (!root.left) { // root左节点没有
        root.left = node;
      }
      else {
        insert(root.left, node);
      }
    }
    else { // 插入右侧节点
      if (!root.right) {
        root.right = node;
      }
      else {
        insert(root.right, node);
      }
    }
  }

  let root = null;
  if (root === null) {
    root = node;
  }
  else {
    insert(root, node);
  }

  return root;
}

function createBinaryTree(arr) {
  arr.forEach(i => {
    let node = new CNode(i);
    create(node);
  });

  return 
}