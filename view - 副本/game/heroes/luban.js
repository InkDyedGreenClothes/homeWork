// 引入鲁班技能
import L11210 from '../skills/Luban/11210.js';
import L11220 from '../skills/Luban/11220.js';
import L11230 from '../skills/Luban/11230.js';
// 创建鲁班英雄类
export default class Luban {
    constructor() {
        this.name = "鲁班"
        this.icon = "./sources/heros/luban1.png"
        this.skills = [new L11210(), new L11220(), new L11230()]
    }
};
