/**
 * 给你两个单链表的头节点 headA 和 headB ，
 * 请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
 */
/**
 * 双指针法：
 * a指针遍历完a链表，然后从b链表开始遍历
 * b指针遍历完b链表，然后从a链表开始遍历
 * 如果两个链表相交，必然有一个点a=b
 */
function findCommon(headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let pa = headA;
  let pb = headB;
  while (pa !== pb) {
    pa = pa === null ? headB : pa.next;
    pb = pb === null ? headA : pb.next;
  }
  return pa;
}