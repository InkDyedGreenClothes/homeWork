// 引入 node 内置的http模块 记性http的服务器开发
const http = require('http');
// 引入node内置的fs 模块，  来完成对应文件系统
const fs = require('fs');

// 创建一个http 服务器
const server = http.createServer( (requset, response) => {
    let url = requset.url;
    let content = '';

    if (url.startsWith('/')) {
        url = url.replace('/', './template/index.html');
        
        content = fs.readFileSync(url);
        
        response.write(content);
    }
    response.end();
})

server.listen(3000, () => {
    console.log('开起来服务器，您可以通过： http://localhost:3000');
})