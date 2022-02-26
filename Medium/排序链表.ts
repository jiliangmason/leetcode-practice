/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
输入：head = [4,2,1,3]
输出：[1,2,3,4]

输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
 * 
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var sortList = function (head) {
  /**
   * head.next == null 只有一个节点
   */
  if (!head || !head.next) return head;
  /**
   * 思路：归并 + 合并有序链表
   * 1、拆分为两个部分然后分别递归左边和右边
   * 2、合并两个左右
   */
  let slow = head;
  let fast = head;
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let slowTemp = slow;
  slow.next = null;
  /**
   * 利用快慢指针拆分为2个部分
   */
  let left = sortList(head);
  let right = sortList(slowTemp);

  return mergeList(left, right);

  function mergeList(left, right) {
    /**
     * 虚拟头节点prev,prev.next表示真正的头节点
     */
    let prev = new ListNode(0);
    let dummy = prev; // prev的位置
    while (left && right) {
      if (left.value < right.value) {
        dummy.next = left;
        left = left.next;
      } else {
        dummy.next = right;
        right = right.next;
      }
      /**
       * dummy自身也要移动
       */
      dummy = dummy.next;
    }
    if (left) {
      dummy.next = left;
    }
    if (right) {
      dummy.next = right;
    }
    return prev.next;
  }
};