/**
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
必须在不使用库的sort函数的情况下解决这个问题。
 */
var sortColors = function (nums) {
  let p0 = 0;
  let p1 = nums.length - 1;
  /**
   * p0，p1两个指针，一个在前一个再末尾，当遇到0时与p0进行交换
   * 遇到2与p1交换,注意这里的<=,因为p2指针后面的元素都是2了，但并不是p2指向的这个位置也是2
   */
  for (let i = 0; i <= p1; i++) {
    while (nums[i] === 2) {
      [nums[i], nums[p1]] = [nums[p1], nums[i]];
      p1--;
    }
    if (nums[i] === 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]];
      p0++;
    }
  }
  return nums;
};