/**
 * 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，
 * 返回一个长度为 n + 1 的数组 ans 作为答案。
 * 
 * 输入：n = 2
输出：[0,1,1]
解释：
0 --> 0
1 --> 1
2 --> 10

输入：n = 5
输出：[0,1,1,2,1,2]
解释：
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
 * 
 */
let countOnes = (one) => {
    let count = 0;
    while(one > 0) {
        one = one & (one - 1);
        /**
         * 每次都让one最低位的1变成0
         * 直到one变成0为止
         */
        count++;
    }
    return count;
}

var countBits = function(n) {
    let bits = [];
    for (let i=0; i<=n; i++) {
        let bit = countOnes(i);
        bits.push(bit);
    }
    return bits;
};

