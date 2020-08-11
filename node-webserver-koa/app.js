const nunjucks = require('nunjucks');
const koa = require('koa');
const Router = require('koa-router');

const app = new koa();

const tpl = new nunjucks.Environment(new nunjucks.FileSystemLoader('template'));


// const server = http.createServer((req, res) => {
//   res.write('Hello word!Oh');
//   res.end();
// });
const koaRouter = new Router();
let data = {
  name: 'koa'
}

koaRouter.get('/', ctx => {
  console.log('来了');
  ctx.body = ctx.render('index.html', {
    data
  })
})

koaRouter.get('/getData', (ctx) => {
  // ctx.body = "首页"
  ctx.body = ctx.render('index.html', {
    data
  })
})
// 模板中间件处理
app.use((ctx, next) => {
  ctx.render = (fileName, data) => {
    ctx.body = tpl.render(fileName, data);
  }
  next();
})

app.use(koaRouter.routes()); // 启动路由

app.listen(8080, () => {
  console.log('启动服务成功,请访问： http://localhost:8080');
})