export default class Person {
    constructor() {
        this.name = "测试"
    }
    // 数据渲染
    render(opts) {
    }
    // 创建element
    createElement(data) {
        let eleHtml = '';
        data.forEach(item => {
            eleHtml += `<li>
            <input type="checkbox" ${item.checked ? 'checked' : ''}/>
            <span>${item.title}</span>
            <a href="javascript:;" class="collect">收藏</a>
            <a href="javascript:;" class="cancelCollect">取消收藏</a>
            <a href="javascript:;" class="remove">删除</a>
          </li>`;
        });
        return eleHtml;
    }
};
