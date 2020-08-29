// 在早期是无法实现一个文件拥有自己的独立作用域
// 所以，不能用文件去定义模块

// 一个define定义的数据拥有独立的作用域
define(function() {
    function fn1() {
        console.log('fn1');
    }

    return {
        fn1
    }
});


// define(function() {
//     function fn1() {
//         console.log('fn1');
//     }
// });

