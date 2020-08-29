// 在当前模块中引入需要依赖的其它外部模块
// 如果我们运行在module环境下，那么这个文件中的数据就是当前模块内的数据

// libs = libs.js 中的 Module
import * as libs from './libs.js';

// libsDefault = libs.js 中的 Module.default
import libsDefault from './libs.js';

import {fn, todo} from './libs.js';

console.log('导入的libs', libs);
console.log('默认导入的libs', libsDefault);

console.log('index.js');

libs.fn();
console.log('默认导出的：', libs.default);