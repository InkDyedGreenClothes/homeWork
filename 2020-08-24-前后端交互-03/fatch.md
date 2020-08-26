## fatch

### 语法

	(1). Promise<Response> fetch(input[,init])

### 参数

	(1). input => 定义需要获取的资源
	(2). init => 可选项：包含所有队请求的设置（method、headers、body(接收一个formData)、mode)
		示例：fetch('/login', {
			method: 'post',
			body: formData,
		}).then(res=> {
			return res.json()
		}).then(data => {
			// 获取到数据data
		})
		或者使用
		async function () {
			let res = await fetch('/login', {
	            method: 'post',
	            body: formData,
			});
			let data = await res.json();
		}

### 返回值

	(1).返回一个Promise对象, resolve时回传Response对象