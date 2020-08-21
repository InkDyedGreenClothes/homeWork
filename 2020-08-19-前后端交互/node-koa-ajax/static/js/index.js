// 获取元素
let uploadBtnEle = document.querySelector('#uploadBtn');
let uploadFileEle = document.querySelector('#uploadFile');
let taskbodyEle = document.querySelector('.task_body');
let contentListEle = document.querySelector('.content-list');
let numEle = document.querySelector('.num');
let totalNumEle = document.querySelector('.total_num');

uploadBtnEle.onclick = function () {
    uploadFileEle.click();
}

uploadFileEle.onchange = function () {
    for (let file of this.files) {
        uploadFile({
            file
        })
    }
}

// 定义任务数量以及完成数量
let totalNum = 0, tastNum = 0;

function uploadFile(data) {
    totalNumEle.innerHTML = ++totalNum;
    let li = document.createElement('li');
    li.innerHTML = `<span>${data.file.name}</span>
                    <div class="task-progress-status">上传中……</div>
                    <div class="progress"></div>`
    taskbodyEle.appendChild(li)
    let taskProgresStatusEle = li.querySelector('.task-progress-status');
    let progressEle = li.querySelector('.progress')
    ajax({
        method: 'post',
        url: '/upload',
        data,
        success(res) {
            // console.log(res);
            taskProgresStatusEle.innerHTML = '上传完成'
            numEle.innerHTML = ++tastNum;
            let imgData = JSON.parse(res)
            // 将上传后的图片显示到页面
            imgRender(imgData.data.imgPath + imgData.data.img_name);
        },
        onprogress(ev) {
            progressEle.style.width = (ev.loaded / ev.total) * 100 + '%'
        }
    });
}
// 获取所有图片
getPhotos()
function getPhotos() {
    ajax({
        method: 'get',
        url: '/getPhotos',
        success(res) {
            let imgList = JSON.parse(res);
            imgList.forEach(img => {
                imgRender(img.imgPath + img.img_name)
            });
        }
    });
}
// 渲染图片列表

function imgRender(url) {
    let img = document.createElement('img');
    img.src = url;
    contentListEle.appendChild(img);
}