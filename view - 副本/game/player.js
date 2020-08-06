import Yase from './heroes/yase.js';
import Luban from './heroes/luban.js';
// 创建游戏中心类 生成用户的游戏数据 比如英雄 以及账户名
export default class Player {
    constructor(name) {
        this.name = name
        this.heroes = [new Yase(), new Luban()]
    }
};
