/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 * 输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

输入：nums = [0,1]
输出：[[0,1],[1,0]]

输入：nums = [1]
输出：[[1]]
 */
const permute = (nums) => {
  const res = [];
  const used = {};
  function loop(path) {
    if (nums.length === path.length) {
      res.push(path.slice()); // 因为该 path 变量存的是地址引用，结束当前递归时，将它加入 res 后，该算法还要进入别的递归分支继续搜索，还要继续将这个 path 传给别的递归调用，它所指向的内存空间还要继续被操作，所以 res 中的 path 的内容会被改变，这就不对。
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[nums[i]]) {
        continue;
      }
      used[nums[i]] = true;
      path.push(nums[i]);
      loop(path);
      path.pop(); // 回溯退回上一个点
      used[nums[i]] = false;
    }
  }

  loop([]);
  return res;
};

