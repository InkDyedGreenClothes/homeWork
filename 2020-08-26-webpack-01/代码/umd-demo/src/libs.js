/**
 * javascript 有些代码可以运行在浏览器，也可以运行在node环境下
 * 比如下面这个函数：
 * 有许多的代码是可以不依赖环境（宿主）
 */

// define()

// M 同构函数，mod 就是要被同构的模块
// function M(mod) {
    // if (typeof module === "object" && typeof module.exports === "object") {
    //     // 满足这个条件，当前就是运行在 commonjs 模块环境下
    //     module.exports = mod();
    // } else if (typeof define === "function" && define.amd) {
    //     // 满足这个条件，当前是 amd 环境
    //     define(mod);
    // } else {
    //     window.libs = mod();
    // }
// }

// M(function() {
//     function fn1() {
//         console.log('fn1');
//     }

//     return {
//         fn1
//     }
// })


// M(libs);

// function libs() {
//     function fn1() {
//         console.log('fn1');
//     }

//     return {
//         fn1
//     }
// }



// M => 模块同构 => umd
(function(mod) {
    if (typeof module === "object" && typeof module.exports === "object") {
        // 满足这个条件，当前就是运行在 commonjs 模块环境下
        module.exports = mod();
    } else if (typeof define === "function" && define.amd) {
        // 满足这个条件，当前是 amd 环境
        define(mod);
    } else {
        window.libs = mod();
    }
})(function() {
    let a = 1;
    function fn1() {
        console.log('fn1');
    }

    return {
        fn1
    }
})