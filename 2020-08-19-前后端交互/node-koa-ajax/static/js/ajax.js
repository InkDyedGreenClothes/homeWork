// 空函数
function noop() { }
ajax()
function ajax(options) {
  options = Object.assign({
    method: 'get',
    url: '',
    success: noop
  }, options)
  console.log(options);
  // 创建ajax 对象
  let xhr = new XMLHttpRequest();

  // 设置ajax 请求参数 三个参数： 请求方法， url地址， 是否已异步
  xhr.open(options.method, options.url, true)

  // 发送请求
  xhr.send();
}