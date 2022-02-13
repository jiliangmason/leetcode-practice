/**
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 
 * 如果链表无环，则返回 null。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。
 * 注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 */
/**
 * 输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。

输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。

输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
 * 
 */
var detectCycle = function (head) {
  /**
   * 步骤：
   * 1、一快一慢两个指针，快的走两步，慢的走一步
   * 2、先找到快慢指针第一次相遇的点记下来为stop
   * 3、慢指针回到起点，快指针指向stop，然后两个指针同时出发，一次走一步
   * 4、再次相遇时，慢指针走到的位置就是环形的起点
   */
  let slow = head;
  let fast = head;
  fast = fast.next;
  while (fast && fast.next && fast !== slow) {
    fast = fast.next.next;
    slow = slow.next;
  }
  /**
   * 出循环说明slow与fast相等了，第一个相遇的节点
   */
  if (!fast || !fast.next) return null;
  slow = head;
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};