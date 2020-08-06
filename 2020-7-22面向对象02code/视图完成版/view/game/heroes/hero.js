import GameEvent from '../GameEvent.js'

export default class Hero extends GameEvent{
    constructor(name,icoUrl){
        super();
        this.name = name;
        this.ico = icoUrl;
        // 绑定自定义事件
        this.addEvent("myinit",this.init);
    }
    init(){
        console.log("初始化英雄逻辑");
    }
}