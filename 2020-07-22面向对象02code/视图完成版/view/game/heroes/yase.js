import Hero from './hero.js';

import S16610 from '../skills/s16610.js'
import S16620 from '../skills/s16620.js'
import S16630 from '../skills/s16630.js'

// 引入皮肤
import Yase1 from '../skins/yase1.js';
import Yase2 from '../skins/yase2.js';


export default class Yase extends Hero{
    constructor(){
        // this.name = "亚瑟";
        // this.ico = "./sources/heros/yase1.png";
        super("亚瑟","./sources/heros/yase1.png")
        this.skills = [new S16610,new S16620,new S16630];
        this.skins = [new Yase1,new Yase2]; //对象数组；
    }
    fire(){
        console.log("释放了技能");
    }
}