/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。
 * 可以按任意顺序返回结果列表。
字母异位词 是由重新排列源单词的字母得到的一个新单词，
所有源单词中的字母通常恰好只用一次。

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

输入: strs = [""]
输出: [[""]]
 */
function groupAnagrams(strs) {
  let len = strs.length;
  let tmp = [];
  for (let i = 0; i < len; i++) {
    tmp[i] = strs[i]
      .split('')
      .sort((a, b) => a.charCodeAt() - b.charCodeAt())
      .join('');
  }
  console.log(tmp);
  let map = new Map();
  for (let i = 0; i < len; i++) {
    if (!map.get(tmp[i])) {
      map.set(tmp[i], [strs[i]]);
    } else {
      let arr = map.get(tmp[i]);
      arr.push(strs[i]);
      map.set(tmp[i], arr);
    }
  }
  console.log(Array.from(map.values()));
}

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
groupAnagrams(strs);