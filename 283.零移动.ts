/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，
 * 同时保持非零元素的相对顺序。
 * 
 * 示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 */

/**
 * 解法：双指针，快指针一直向后走，慢指针指到0的时候不动
 * 当快指针指向非0时，慢指针指向0，交换值，然后慢指针往后走一位
 * 
 * 0(slow) --- 1(fast) (换)
 * 1 ---- 0 (slow) ---0(fast)
 * 1 ---- 0 (slow) ---- 0 --- 3(fast) (换)
 * 1---- 3 ---- 0(slow)----0 ----12(fast) (换)
 * 1----3----12---0----0(slow)
 * 
 */
function zeroMove(arr: number[]) {
  let slow = 0;
  let fast = 0;
  let len = arr.length;

  while (fast < len) {
    if (!arr[slow] && arr[fast]) {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
      slow++;
    }
    fast++;
  }

  return arr;
}