/**
 * 输入：s = "3[a]2[bc]"
输出："aaabcbc"

输入：s = "3[a2[c]]"
输出："accaccacc"
 */
const decodestr = (str) => {
    let result = ''
    let num = 0
    let strStack = [] // 字符串栈
    let numStack = [] // 数字栈
    for (let i=0; i<str.length; i++) {
        if (!isNaN(+str[i])) {
            num = num * 10 + parseInt(str[i])
        } else if (str[i] == '[') {
            strStack.push(result)
            result = '' // 重置
            numStack.push(num)
            num = 0
        } else if (str[i] == ']') {
            let repeatTimes = numStack.pop()
            result = strStack.pop() + result.repeat(repeatTimes)
        } else {
            result += str[i]
        }
    }
    return result
}

console.log(decodestr('3[a]2[bc]'))