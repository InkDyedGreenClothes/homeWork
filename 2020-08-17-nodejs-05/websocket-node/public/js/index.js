
const socket = io('/');
socket.on('login', data => {
    witeData(data);
})
socket.on('message', data => {
    witeData(data);
})
let ulBox = document.querySelector('ul');
let btn = document.querySelector('#btn');
let inputText = document.querySelector('#inputText');

btn.onclick = function() {
    witeData(`我说：${inputText.value} <span class="timecolor">${dateFormatter()}</span>`);
    socket.emit('message', `${inputText.value}`);
    inputText.value = '';
    inputText.focus();
}

function witeData(data) {
    let html = '';
    html = `<li class="title-li"><p>${data}</p></li>`
    ulBox.innerHTML += html;
}

function dateFormatter () {
    let date = new Date();
    let str = 'AM';
    let y = date.getFullYear();
    let M = date.getMonth() + 1;
    let d = date.getDay();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    M = M < 10 ? '0' + M : M;
    d = d < 10 ? '0' + d : d;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    if(h > 12) {
        str = 'PM';
    }
    return `${h}:${m} ${str}`
}
