/**
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。
 * 
 */

/**
 * 解法：
 * 如上图，我们需要一个辅助栈来记录最小值，

开始我们向stack push -2
此时辅助栈minStack，因为此时stack最小的是-2，也push -2
stack push 0
此时辅助站minStack 会用 0 跟 -2对比，-2更小，minstack会push -2
stack push -3
此时辅助站minStack 会用 -3 跟 -2对比，-3更小，minstack会push -3
 * 
 */
function MinStack() {
  this.stack = [];
  this.minStack = [];
}

MinStack.prototype.push = (x: number) => {
  this.stack.push(x);
  if (x < this.minStack[this.minStack.length - 1]) {
    this.minStack.push(x);
  } else {
    this.minStack.push(this.minStack[this.minStack.length - 1]);
  }
};

MinStack.prototype.pop = () => {
  this.stack.pop();
  this.minStack.pop();
};

MinStack.prototype.top = () => {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = () => {
  return this.minStack[this.minStack.length - 1];
};
