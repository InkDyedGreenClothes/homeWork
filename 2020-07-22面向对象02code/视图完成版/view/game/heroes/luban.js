import Hero from './hero.js';

import S11210 from '../skills/s11210.js'
import S11220 from '../skills/s11220.js'
import S11230 from '../skills/s11230.js'


// 引入皮肤
import Luban1 from '../skins/luban1.js';
import Luban2 from '../skins/luban2.js';

export default class Luban extends Hero{
    constructor(){
        // this.name = "鲁班";
        // this.ico = "./sources/heros/luban1.png";
        super("鲁班","./sources/heros/luban1.png");
        this.skills = [new S11210,new S11220,new S11230];
        this.skins = [new Luban1,new Luban2]
    }
}

// 对象  ---抽象 -->类 --继承--》抽象---》基类；