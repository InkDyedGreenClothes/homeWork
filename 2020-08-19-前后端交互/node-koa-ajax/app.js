const Koa = require('koa');
const KoaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');
const upload = require('./middleware/upload');
const mysql = require('mysql2/promise')
const app = new Koa();
const router = new KoaRouter();


let connection = null;
~async function () {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'123456',
    database: 'datas'
  })
}()
console.log(connection);


app.use(KoaStaticCache('./static', {
  prefix: '/static',
  gzip: true,
  dynamic: true
}))


router.get('/', ctx => {
  ctx.body = '开课吧';
})

router.get('/getPhotos', async ctx => {
  const [rows, fields] = await connection.execute('SELECT * FROM `photos`');
  let imgPath = '/static/upload/';
  let list = rows.map(item => ({
    ...item,
    imgPath
  }))
  ctx.body = list
})

router.post('/upload', upload(), async ctx => {
  let file = ctx.request.files.file;
  let path = file.path;
  let pathIndexof = path.lastIndexOf('\\') + 1;
  let imgName = path.substring(pathIndexof, path.length);
  
  await connection.execute(`insert into photos (img_name) values(?)`, [imgName]);
  ctx.body = '上传成功'
});


app.use(router.routes())
app.listen(8088, () => {
  console.log('开启服务成功，请访问：http://localhost:8088/static/index.html');
});