/**
 * 题目如下：
颠倒给定的 32 位无符号整数的二进制位。

输入: 00000010100101000001111010011100
输出: 00111001011110000010100101000000
解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
     因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。

输入：11111111111111111111111111111101
输出：10111111111111111111111111111111
解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
     因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。
 * 
 */
function reverse(n) {
  let result = 0;
  /**
   * js最多32位
   */
  for (let i=0; i<32; i++) {
    /**
     * result << 1代表把result乘以2
     * 2的2进制是 10，2 << 1 得到4， 4的2进制是100，所以比10多了个0
       3的2进制是 11，3 << 1 得到6。 6的2进制是110，所以比11多了个0
     */
    /**
     * (n & 1)代表了取n的最后一位
     */
    result += result << 1 + (n & 1); 
    n >> 1; // n向右移动一位，下一次好取最后一位
  }
  /**
   * js把有符号数转换成无符号数
   */
  return result >>> 0;
}