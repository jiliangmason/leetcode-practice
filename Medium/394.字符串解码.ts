/**
 * 给定一个经过编码的字符串，返回它解码后的字符串。
编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

输入：s = "3[a]2[bc]"
输出："aaabcbc"

输入：s = "3[a2[c]]"
输出："accaccacc"
 */
const decodeString = (s) => {
  let numStack = [];
  let strStack = [];
  let result = ''; // 记录字符串的
  let num = 0; // 记录数字的
  for (const char of s) {
    if (!isNaN(char)) {
      // 数字
      num += num * 10 + Number(char);
    } else if (char === '[') {
      numStack.push(num); // 先入栈
      num = 0;
      strStack.push(result);
      result = '';
    } else if (char === ']') {
      const repeatTime = numStack.pop();
      /**
       * 先把当前的字符重复repeatTime次，
       * 然后再加上前一次的字符
       * 例如32[a6[c]] 中 第一次遇到]的时候
       * result：c 重复次数为：6 strStack前一次的栈顶：a
       */
      result = result.repeat(repeatTime) + strStack.pop();
    } else {
      // 字符
      result += char;
    }
  }
  return result;
};