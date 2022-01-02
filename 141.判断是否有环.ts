/**
 * 题目如下：
给定一个链表，判断链表中是否有环。
 */

function hasClycle(head) {
  let map = new Map();
  while (head) {
    if (map.has(head)) return true;
    map.set(head, true);
    head = head.next;
  }
  return false;
}