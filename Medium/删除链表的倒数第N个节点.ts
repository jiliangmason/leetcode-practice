/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

输入：head = [1,2], n = 1
输出：[1]
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  /**
   * 定义两个指针，一个快指针一个慢指针
   */
  let headNode = new ListNode(0, head);
  let fast = headNode;
  let slow = fast;
  /**
   * 先让fast走n，然后两个指针再一起走
   * 直到fast到最后一个节点，此时slow刚好位于倒数第n个节点的前面一个
   */
  while (n--) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  /**
   * slow.next就是被删除的节点，连接被删除节点后面的节点
   */
  slow.next = slow.next.next;
  return headNode.next;
};