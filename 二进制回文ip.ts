/**
 * IPV4 的 IP 地址是32位的二进制数，为增强可读性，通常我们以8位为1组进行分割，
用十进制来表示每一部分，并用点号连接，譬如 192.168.1.1。显然，存在这样的 IP 地址，
0到9十个数字各出现一次。具备这样特征的 IP 地址里，表示成二进制数时，二进制数左右对称
（也就是“回文”，表示成32位二进制不省略0）的情况有几种，分别是哪些？要求性能尽可能高
 * 
 */
/**
 * 解题链接：https://leetcode-cn.com/circle/discuss/YmmSCq/
 */
const elegantIp = () => {
  const ans = new Array();
  const ip = new Array(4);

  for (let mask = 0; mask < 1 << 16; mask++) {
    ip.fill(0);
    /**
     * 取高8位
     */
    for (let i = 15; i >= 8; i--) {
      ip[0] = ip[0] * 2 + ((mask >> i) & 1);
    }
    /**
     * 取低8位
     */
    for (let i = 7; i >= 0; i--) {
      ip[1] = ip[1] * 2 + ((mask >> i) & 1);
    }
    /**
     * 反转的高8位（重要）
     */
    for (let i = 0; i < 8; i++) {
      ip[2] = ip[2] * 2 + ((mask >> i) & 1);
    }
    /**
     * 反转的低8位（重要）
     */
    for (let i = 8; i < 16; i++) {
      ip[3] = ip[3] * 2 + ((mask >> i) & 1);
    }

    /**
     * 检查每个数字是否出现一次
     */
    const digit = new Array(10).fill(0);
    let ones = 0;
    let check = true;
    for (let num of ip) {
      while (num != 0) {
        /**
         * 取个位数，ip：192.168.1.1 这种
         * 需要检查120.34.56.789 这类就是符合的，满足每个数都在
         * 0-9各出现一次，且不相同
         */
        const x = num % 10;
        if (digit[x]) {
          check = false;
          break;
        }
        digit[x] = true;
        ++ones;
        num = Math.floor(num / 10);
      }
      /**
       * check=false标识数字重复了
       */
      if (!check) {
        break;
      }
    }

    if (check && ones === 10) {
      // 0-9个出现一次
      const valid = new Array();
      for (let i = 0; i < 4; i++) {
        valid.push(ip[i]);
        /**
         * 格式化成ip的样子
         */
        if (i < 3) {
          valid.push('.');
        }
      }
      console.log(valid);
      ans.push(valid.join(''));
    }
  }
  return ans;
};

console.log(elegantIp());