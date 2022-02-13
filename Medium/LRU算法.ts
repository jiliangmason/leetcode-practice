/**
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2); // 2是容量，最多2组数据
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4

解析：https://leetcode-cn.com/problems/lru-cache/solution/bu-yong-yu-yan-nei-jian-de-map-gua-dang-feng-zhuan/
思路：使用双向链表 + hash map，双向链表方便换位置和删除，hash map方便查找
 * 
 */
class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    /**
     * 双向链表的前后指针
     */
    this.prev = null;
    this.next = null;
  }
}

/**
 * 双向链表的指针是
 * next: 从前 ---> 后
 * prev: 从后 ---> 前
 */
class LRUCache {
  constructor(capacity) {
    /**
     * 空间
     */
    this.capacity = capacity;
    /**
     * hash表
     */
    this.map = {};
    this.count = 0; // 缓存数
    this.dimmyHead = new ListNode(); // 虚拟头尾节点
    this.dimmyTail = new ListNode();
    this.dimmyHead.next = this.dimmyTail; // 双向链表互相链接
    this.dimmyTail.prev = this.dimmyHead;
  }

  get(key) {
    if (!this.map[key]) {
      return -1;
    }
    /**
     * 如果有，就把他先删了再放到链表的头部
     */
    let node = this.map[key];
    this.moveToHead(node);
    return node;
  }

  put(key, value) {
    if (!this.map[key]) {
      if (this.count === this.capacity) {
        this.removeCache();
      }
      let newNode = new ListNode(key, value);
      this.addToHead(newNode);
      this.count++;
      this.map[key] = value;
    }
    let node = this.map[key];
    node.value = value;
    this.moveToHead(node);
  }

  moveToHead(node) {
    this.removeFromList(node);
    this.addToHead(node);
  }

  removeFromList(node) {
    let tmpPrev = node.prev;
    let tmpNext = node.next;
    /**
     * 双向指针都要改变指向，
     * 前面节点指向node的指针改为指向node的下一个
     * 后面节点指向node的指针改为指向node的前一个
     */
    tmpPrev.next = tmpNext;
    tmpNext.prev = tmpPrev;
  }

  /**
   * 同理要处理每个节点的双向指针的指向
   */
  addToHead(node) {
    let first = dimmyHead.next;
    this.dimmyHead.next = node;
    node.prev = this.dimmyHead;
    node.next = first;
    first.prev = node;
  }

  /**
   * 把node放到队列头部 然后把队尾的元素删了
   */
  removeCache() {
    let tail = this.removeFromTail();
    this.count--;
    delete this.map[tail.key];
  }

  removeFromTail() {
    let pre = this.dimmyTail.prev;
    this.removeFromList(pre);
    /**
     * 返回最后一个节点，需要在map中注销key
     */
    return pre;
  }
}