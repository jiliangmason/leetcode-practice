/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 */
/**
 * 解法：
 * 1、先找到第一个不为9的数字，加1，比如[1,2,3,9,9] => [1,2,4,9,9]
 * 然后把4后面的9全部变成0, 就结束了
 * 
 * 2、如果数组全是9，那么就新生成一个数组，并把它的第一位改成1
 * 
 */
function addOne(arr: number[]) {
  for(let i=0; i<arr.length; i++) {
    if (arr[i] !== 9) {
      arr[i]++;
      for(let j = i+1; j<arr.length; j++) {
        arr[j] = 0;
      }
      return arr;
    }
  }

  let result = new Array(arr.length).fill(0);
  result.unshift(1);
  return result;
}