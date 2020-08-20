const Koa = require('koa');
const app = new Koa();
const KoaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');
const router = new KoaRouter();
const moment = require('moment');

app.use(KoaStaticCache('./static', {
    prefix: '/static',
    gzip: true,
    dynamic: true
}))


router.get('/', ctx => {
  ctx.body = moment().format('YYYY-MM-DD HH:mm:ss a');
})

app.use(router.routes())
app.listen(8088, () => {
    console.log('开启服务成功，请访问：http://localhost:8088/public/index.html');
});