/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */
/**
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
 */
/**
 * l1 l2分别为2个链表
 */
const addTwoNumbers = (l1, l2) => {
  /**
   * tail是l1和l2两个链表相加后的链表
   */
  let tail = null;
  let head = tail;
  let curry = 0;
  /**
   * 进位值
   */
  while (l1 || l2) {
    let n1 = l1 ? l1.val : 0;
    let n2 = l2 ? l2.val : 0;

    let sum = n1 + n2 + curry;

    /**
     * 开始tail=null
     */
    if (tail === null) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }

    /**
     * 当前是否需要进位
     */
    curry = Math.floor(sum / 10);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  if (curry > 0) {
    tail.next = new ListNode(curry);
  }

  return head;
};