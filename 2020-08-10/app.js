const koa = require('koa');
const router = require('koa-router');


const app = new koa();
const api = new router();

let data = {
    name: 'koa'
}

api.get('/', ctx => {
    ctx.body = '我是刚进去的页面,如果想要访问数据请访问：http://localhost:8080/getData';
})

api.get('/getData', ctx => {
    ctx.body = data;
})

app.use(api.routes());

app.listen(8080, () => {
  console.log('启动服务成功,请访问：http://localhost:8080 http://localhost:8080/getData  查看数据');
})

