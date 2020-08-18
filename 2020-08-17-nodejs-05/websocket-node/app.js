const Koa = require('koa');
const app = new Koa();
const KoaStaticCache = require('koa-static-cache');
const Moment = require('moment');
const server = require('http').createServer(app.callback());
const options = { /* ... */ };
const io = require('socket.io')(server, options);

app.use(KoaStaticCache('./public', {
    prefix: '/public',
    gzip: true,
    dynamic: true
}))

io.on('connection', socket => {
    // console.log('你看我请求了');
    // 通知当前的socket
    socket.emit('login',`${socket.id} 登陆成功 <span class="timecolor">${Moment().format('HH:mm A')}</span>`);
    // 推送给其他人
    socket.broadcast.emit('login', `我们的新朋友${socket.id}来了 <span class="timecolor">${Moment().format('HH:mm A')}</span>`)
    socket.on('message', data => {
        socket.broadcast.emit('message', `${socket.id}说：${data}<span class="timecolor">${Moment().format('HH:mm A')}</span>`)
    })

});

server.listen(8080, () => {
    console.log('开启服务成功，请访问：http://localhost:8080/public/index.html');
});