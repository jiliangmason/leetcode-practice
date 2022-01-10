/**
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * 
 * 1 -> 2 -> 2 -> 1  true
 * 1 -> 2 false
 * 
 * 解题思路：
先用快慢指针的手法，让我们知道这个链表的中点是哪，然后从中点截断
然后截断成为两个链表，把后面的链表翻转
最后依次去判断这两个链表每一项是否相同
 */

function huiwenList(head) {
  /**
   * 先找到链表的中点
   */
  let slow = head;
  let fast = head;
  let prev = null;
  while(fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next
  }
  prev.next = null; //断开链表

  /**
   * 翻转后半段
   */
  let head2 = null;
  while(slow) {
    let tmp = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = tmp;
  }

  /**
   * 对比前后半段是否一致
   */
  while(head && head2) {
    if (head.val !== head2.val) {
      return false;
    }
    head = head.next;
    head2 = head2.next;
  }
  return true;
}

