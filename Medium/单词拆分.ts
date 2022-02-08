/**
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
     注意，你可以重复使用字典中的单词。

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
 */
/**
 * dp算法
 * 背包问题，两层循环把字符串看做书包，把字典看做物品
 * 先循环背包再循环物品
 * 假设dp[i]=true为字符串长度为i时可以被字典构成
 * 此时存在j，j<i满足dp[j]=true，只要j到i中间的字符能够满足能被字典构成就可以
 * 所以递推公式为dp[i] = dp[j]=true && dp[j ~ i]=true
 * 初始值dp[0]是一个空串，空串默认为true
 */
var wordBreak = function(s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  /**
   * 因为可以使用重复元素，先去重
   */
  let set = new Set(wordDict);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true;
        /**
         * 说明此时的i已经满足条件不用再循环j了
         */
        break;
      }
    }
  }
  return dp[s.length];
};