import Player from './player.js';
console.log("game...")
let a = 10;
// 游戏管理类；
 class Game{
    constructor(){
        this.player = null;
    }
    login(name){
        this.player = new Player(name);
        // 触发myinit自定义事件;
        // console.log( this.player);
        let heroes = this.player.heroes;
        heroes.forEach(hero=>{
            // 触发自定义事件；
            hero.trigger("myinit")
        })
    }
}

// 单例；只会有一个实例；
let instance = null;
// 工厂模式；
export default function(...arg){
    if(!instance){
        instance = new Game(...arg);
    }
    return instance;
}

