const Koa = require('koa');
const KoaRouter = require('koa-router');
const mysql = require('mysql2/promise');
const server = new Koa();
const router = new KoaRouter();
router.get('/', ctx => {
    let data = ctx.query;
    ctx.body = data;
    ~async function () {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'datas'
        })
        await connection.execute(`insert into users (username, age) values("${data.username}", "${data.age}")`);
    }()
})
server.use(router.routes());
server.listen(8080, () => {
    console.log('服务启动成功，请访问：http://localhost:8080?uesrname=xiaoming&age=19');
})