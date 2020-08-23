const koa = require('koa');
const KoaRouter = require('koa-router');
const KoaBody = require('koa-body');
const KoaStaticCache = require('koa-static-cache');
const jwt = require('jsonwebtoken');
const KoaJwt = require('koa-jwt');
const app = new koa();
const router = new KoaRouter();
const UploadImg = require('./middlewares/upload');

const { getUsers, registeredUser } = require('./server/api/users');
const { getPhtot, uploadImg } = require('./server/api/phhtots');

const jwtSecret = 'myl';
const seccessDefaultData = {
    code: 200,
    status: 200,
    success: true,
    data: []
}

app.use(KoaStaticCache('./public', {
    prefix: '/public',
    gzip: true,
    dynamic: true
}))

router.get('/', async ctx => {
    const [rs] = await getUsers();
    // console.log(rs);

    ctx.body = '进来了'
})

// 注册
router.post('/registeredUser', KoaBody({
    multipart: true // 默认为false 是否支持 multipart-formdate 的表单解决:
}), async ctx => {
    let data = ctx.request.body
    // 获取用户 看用户是否已经存在 不存在 就可以注册
    const res = await getUsers(data.userName);

    if (res.length > 0) {
        data = {
            ...seccessDefaultData,
            ...{
                status: 300,
                message: '用户已经存在'
            }
        }
    } else {
        registeredUser(data);
        data = {
            ...seccessDefaultData,
            ...{
                message: '注册成功'
            }
        }
    }
    ctx.body = data;
})
// 登录 
router.post('/login', KoaBody({
    multipart: true // 默认为false 是否支持 multipart-formdate 的表单解决:
}), async ctx => {
    let { userName, password } = ctx.request.body
    // 获取用户 看用户是否已经存在 
    const res = await getUsers(userName);
    // console.log(res);

    if (res.length > 0) {
        // registeredUser(data);
        // console.log(res[0].password);
        // 判断用户密码 是否账号密码正确
        if (userName != res[0].user_name || password != res[0].password) {
            data = {
                ...seccessDefaultData,
                ...{
                    message: '账号或密码错误！',
                    status: 404
                }
            }
        } else {
            let token = jwt.sign({ userName, password }, jwtSecret)
            ctx.set('Authorization', token)
            data = {
                ...seccessDefaultData,
                ...{
                    message: '登录成功',
                    data: ''
                }
            }
        }
    } else {
        data = {
            ...seccessDefaultData,
            ...{
                status: 404,
                message: '用户不存在'
            }
        }
    }
    ctx.body = data;
})

// 用户鉴权  使用jsonwebtoken
// app.use(async (ctx, next) => {
//     await authentication(ctx, next)
// })

// 中间件对token进行验证
app.use(async (ctx, next) => {
    return next().catch((err) => {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                code: 401,
                msg: err.message,
                message: '未登录,请登录'
            }
        } else {
            throw err;
        }
    })
});

// 使用koa-jwt 鉴权
app.use(KoaJwt({ secret: jwtSecret, passthrough: true }).unless({
    // 登录，注册接口不需要验证
    path: [/^\/login/],
    path: [/^\/registeredUser/],
    path: [/^\/public/]
}));
// 鉴权设置值
app.use(async (ctx, next) => {
    await authentication(ctx, next)
})

// 获取用户
router.get('/getUsers', KoaBody(), async ctx => {
    const res = await getUsers(ctx.query.userName);
    let data = {
        ...seccessDefaultData,
        ...{
            data: res
        }
    }
    ctx.body = data;
})

const imgPath = '/public/upload/';
// 上传图片
router.post('/uploadImg', UploadImg(), async ctx => {
    let file = ctx.request.files.file;
    let path = file.path;
    let pathIndexOf = path.lastIndexOf('\\');
    let imgName = path.substring(pathIndexOf + 1, path.length);
    let owner = ctx._user.userName

    uploadImg({ imgName, imgPath, owner })
    ctx.body = {
        ...seccessDefaultData,
        ...{
            data: {
                img_name: imgName,
                imgPath
            }
        }
    }
})

// 获取图片
router.get('/getPhtots', KoaBody(), async ctx => {
    const res = await getPhtot(ctx._user.userName);
    let data = {
        ...seccessDefaultData,
        ...{
            data: res
        }
    }
    // console.log(res);

    ctx.body = data

})
// 鉴权函数
async function authentication (ctx, next) {
    const token = ctx.request.header.authorization;
    let user;
    // 过滤掉登录以及注册接口 不进行鉴权  使用jsonwebtoken 这个的时候需要使用这段代码
    // let urlList = ctx.url.split('/');
    // if (urlList.includes('public') || ctx.url == '/login' || ctx.url == '/registered') { } else {
        if (token == 'null' || token == undefined) {
            return {
                ...seccessDefaultData,
                ...{
                    status: 401,
                    message: '未登录,请登录'
                }
            }
        } else {
            user = jwt.verify(token, jwtSecret)
            if (!user) {
                return {
                    ...seccessDefaultData,
                    ...{
                        status: 401,
                        message: '未登录,请登录'
                    }
                }
            }
        }
        ctx._user = user;
    // }
    await next();
}
app.use(router.routes())

app.listen(3000, () => {
    console.log('服务器开启成功，请访问：http://localhost:3000');
})