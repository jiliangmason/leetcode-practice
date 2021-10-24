/**
 * 这个题，我来简单描述一下，罗马数字对应我们阿拉伯数字的map如下：
        I: 1,
        V: 5,
        IV: 4,
        IX: 9,
        X: 10,
        XL: 40,
        XC: 90,
        L: 50,
        C: 100,
        CD: 400,
        CM: 900,
        D: 500,
        M: 1000,

例子:
示例 1:

输入: "III"
输出: 3
示例 2:

输入: "IV"
输出: 4
示例 3:

输入: "IX"
输出: 9
示例 4:

输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3
 * 
 */

function romaNumber(str) {
  let len = str.length;
  let index = 0;
  let res = 0;
  const map = {
    I: 1,
    V: 5,
    IV: 4,
    IX: 9,
    X: 10,
    XL: 40,
    XC: 90,
    L: 50,
    C: 100,
    CD: 400,
    CM: 900,
    D: 500,
    M: 1000,
  }
  while(index < len) {
    /**
     * 为什么是这个判断条件：
     * 因为罗马字符最多2个，所以每次用2个去map里面找如果有就累加
     * 如果没有就用1个去找并累加
     */
    if (index + 1 < len && map[str.slice(index, index + 2)]) {
      res += map[str.slice(index, index + 2)];
      index += 2;
    }
    else {
      res += map[str.slice(index, index + 1)];
      index += 1;
    }
  }

  return res;
}