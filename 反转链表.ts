/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
  输入：head = [1,2,3,4,5]
  输出：[5,4,3,2,1]

  输入：head = [1,2]
  输出：[2,1]
 */
/**
 * 方法一：暴力破解法
 * 假设链表为 1→2→3→∅，
 * 我们想要把它改成 ∅←1←2←3。
 */
function reverseList(head: any) {
  let prev = null;
  let curr = head;
  while(curr) {
    /**
     * 记录curr.next
     */
    let tmp = curr.next;
    /**
     * curr指向前面的节点prev
     */
    curr.next = prev;
    /**
     * 当前节点变成前节点，后面的节点变成当前节点
     */
    prev = curr;
    curr = tmp;
  }

  /**
   * 最后返回新的表头
   */
  return prev;
}

/**
 * 方法二：递归解法
 */
function reverseList2(head) {
  if (!head) return null;
  if (head && !head.next) return head;
  /*
    第一轮出栈，head为5，head.next为空，返回5
    第二轮出栈，head为4，head.next为5，执行head.next.next=head也就是5.next=4，
              把当前节点的子节点的子节点指向当前节点
              此时链表为1->2->3->4<->5，由于4与5互相指向，所以此处要断开4.next=null
              此时链表为1->2->3->4<-5
              返回节点5
    第三轮出栈，head为3，head.next为4，执行head.next.next=head也就是4.next=3，
              此时链表为1->2->3<->4<-5，由于3与4互相指向，所以此处要断开3.next=null
              此时链表为1->2->3<-4<-5
              返回节点5
    第四轮出栈，head为2，head.next为3，执行head.next.next=head也就是3.next=2，
              此时链表为1->2<->3<-4<-5，由于2与3互相指向，所以此处要断开2.next=null
              此时链表为1->2<-3<-4<-5
              返回节点5
    第五轮出栈，head为1，head.next为2，执行head.next.next=head也就是2.next=1，
              此时链表为1<->2<-3<-4<-5，由于1与2互相指向，所以此处要断开1.next=null
              此时链表为1<-2<-3<-4<-5
              返回节点5
    出栈完成，最终头节点5->4->3-2->1
  */
  let newHead = reverseList2(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}