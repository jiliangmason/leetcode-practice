/**
 * 题目如下： 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 
示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
 
说明：

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
 * 
 */
function commonNumer(arr1, arr2) {
  let map = {};
  let ret = [];
  for(let i=0; i<arr1.length; i++) {
    map[arr1[i]] = true;
  }
  for(let j=0; j<arr2.length; j++) {
    if (map[arr2[j]]) {
      map[arr2[j]] = false;
      ret.push(arr2[j]);
    }
  }

  return ret;
}

/**
 * 题目类型：hash表 + 映射
 * 
 */