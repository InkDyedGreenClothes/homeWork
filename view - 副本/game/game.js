import Player from './player.js';
// 定义游戏类 开始游戏信息为空 然后有一个登录方法 当用户登录后 根据用户信息生成用户的游戏数据
export default class Game {
    constructor() {
        this.player = null
    }
    login(name) {
        this.player = new Player(name)
    }
};

