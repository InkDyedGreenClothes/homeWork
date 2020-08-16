const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaStaticCache = require('koa-static-cache');
const KoaBody = require('koa-body');
const nunjucks = require('nunjucks');
const tpl = new nunjucks.Environment(
    // FileSystemLoader => node 模板文件加载
    new nunjucks.FileSystemLoader('static', {
        watch: true,
        noCache: true
    })
)

const server = new Koa();
const router = new KoaRouter();

// 构建静态服务器
server.use(KoaStaticCache('./static', {
    prefix: '/static',
    gzip: true,
    dynamic: true
}))

server.use(KoaBody({
    multipart: true,
    // 处理文件
    formidable: {
        uploadDir: __dirname + '/static/upload',
        keepExtensions: true
    }
}))

router.get('/upload', ctx => {
    ctx.body = tpl.render('index.html')
})

router.post('/upload', ctx => {
    let files = ctx.request.files;
    ctx.body = '添加成功=>>>>>' + JSON.stringify(files);
})

server.use(router.routes());

server.listen(8080, () => {
    console.log('服务开启成功，请访问：http://localhost:8080/upload');
})
