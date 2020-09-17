// 输入->参数
// 输出 -> 
// vue 组件的 -> 显示到视图上 -> 验证视图 是否包含某个字段 
module.exports = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    callback(item);
  }
};
