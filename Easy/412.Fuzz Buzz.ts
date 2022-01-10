/**
 * 给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：

answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
answer[i] == "Fizz" 如果 i 是 3 的倍数。
answer[i] == "Buzz" 如果 i 是 5 的倍数。

示例 1：

输入：n = 3
输出：["1","2","Fizz"]
示例 2：

输入：n = 5
输出：["1","2","Fizz","4","Buzz"]
示例 3：

输入：n = 15
输出：["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 */

function fuzzBuzz(n: number) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let sub = [];
    if (i % 3 === 0) {
      sub.push('Fizz')
    }
    if (i % 5 === 0) {
      sub.push('Buzz')
    }
    /**
     * 说明既不能被3也不能被5整除
     */
    if (sub.length === 0) {
      sub.push(i)
    }
    result.push(sub.join(' ')) // 数组转字符串
  }

  return result;
}