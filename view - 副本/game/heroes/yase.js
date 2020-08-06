// 引入技能
import S16610 from '../skills/Yase/16610.js'
import S16620 from '../skills/Yase/16620.js'
import S16630 from '../skills/Yase/16630.js'
// 创建亚瑟英雄类
export default class Yase {
    constructor() {
        this.name = '亚瑟'
        this.icon = "./sources/heros/yase1.png"
        this.skills = [new S16610(), new S16620(), new S16630()]
    }
};
