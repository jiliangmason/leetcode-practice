/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]
 
提示：

两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列
 * 
 */

 function ListNode(val?, next?) {
  this.val = val === 'undefined' ? 0 : val;
  this.next = next === 'undefined' ? null : next;
 }

 function combine(l1, l2) {
    let ret = new ListNode();
    let n = ret;
    if (!l1 && l2) return l2;
    if (l1 && !l2) return l1;
    while(l1 && l2) {
      if (l1.val > l2.val) {
        ret.next = l2; // ret链接到l2
        ret = ret.next; // ret往后移动一位
        l2 = l2.next; // l2往后移动一位
      }
      else {
        ret.val = l1.val;
        ret.next = l1;
        l1 = l1.next;
      }
    }

    // 循环后，还剩下的接上
    ret.next = l1 || l2;
    return n.next; // 因为n指向ret的首位，首位是空所以移动到下一位有值的
 }

 /**
  * 链表操作：
  * l = l.next 链表向后移动一位
  * curr.next = l  curr链表链接l链表
  */