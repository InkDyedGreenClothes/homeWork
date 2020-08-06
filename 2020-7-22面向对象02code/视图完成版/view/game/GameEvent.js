export default class GameEvnet {
    constructor() {
        this.handle = {};
    }
    // 添加事件
    addEvent(eventName, fn) {
        if (typeof this.handle[eventName] === 'undefined') {
            this.handle[eventName] = [];
        }
        this.handle[eventName].push(fn);
    }
    // 触发事件
    trigger(eventName) {
        if (typeof this.handle[eventName] === 'undefined') {
            return;
        }
        this.handle[eventName].forEach(fn => {
            fn();
        })
    }
    // 移除自定义事件
    removeEvent(eventName, fn) {
        // 判断如果没有方法就直接返回
        if (typeof this.handle[eventName] === 'undefined') {
            return
        }
        // 遍历方法数组 判断出入方法是否与
        this.handle[eventName].forEach((item, index) => {
            if (item == fn) {
                this.handle[eventName].splice(index, 1);
                console.log(fn + '  =>>>>>> 被删除了...');
            }
        })
    }
}
// 定义测试用的方法
function fn1() {
    console.log('fn1');
}
function fn2() {
    console.log('fn2');
}
let newmyevent = new GameEvnet();
// 添加 fn1
newmyevent.addEvent("myevnet", fn1);
// 添加 fn2
newmyevent.addEvent("myevnet", fn2);
// 删除 fn2
newmyevent.removeEvent("myevnet", fn2);
// 执行绑定的自定义事件
newmyevent.trigger("myevnet")