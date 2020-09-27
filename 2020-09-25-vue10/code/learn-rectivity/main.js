// 引入 reactivity
import {
  ref,
  reactive,
  effect,
} from "./node_modules/@vue/reactivity/dist/reactivity.esm-browser.js";

// reactivity  这个包 可以单独使用的
// 可以脱离 vue 来使用
// 是整个 vue3 的响应式的基础库

// 收集依赖
// 触发依赖
// Object.defineProperty
// Vue2 时期

// computed watch watchEffect

// 响应式对象
// 什么时候收集的依赖
// 什么时候出发的依赖呢
// let a = ref(10);
// let b = 0;
// effect(() => {
//   console.log(b);
// 收集了依赖
// .value -> get
// 触发 get 的时候，它把当前包裹的这个函数收集为依赖
// 收集依赖
//   b = a.value * 10;
// });

// a -> 上面的函数（A） 建立关系
// a 变更之后 要触发所有依赖 -》 重新调用之前的 A 函数
// 触发依赖
// a.value = 20;

// console.log(b);

// b 也可以是一个视图

function render(context) {
  // 构建我的视图
  effect(() => {
    // 清空所有的视图
    // 优化的空间？
    // 问题： 1. 这里的视图都是写死的 -? 跨平台怎么办？
    //       2. 直接清空 太浪费了。 能不能复用之前的元素？
    // 引入中间层来解决 -》 vdom  -> vnode -> 虚拟节点
    // vnode -》 创建成真实的节点 -> 构建我们的视图
    // vnode -> diff 算出来最小最优的要修改的  
    document.querySelector("#app").innerHTML = ``;

    const p = document.createElement("p");
    p.innerText = context.textValue.value;

    // 构建按钮
    const button = document.createElement("button");
    button.innerText = "click";
    button.onclick = context.handleClick;

    // 添加到视图里
    document.querySelector("#app").append(p);
    document.querySelector("#app").append(button);
  });
}

function setup() {
  // 构建我的响应式数据
  const textValue = ref("小宇子");

  const handleClick = () => {
    textValue.value = "飞哥";
  };

  return {
    handleClick,
    textValue,
  };
}

function mountApp() {
  render(setup());
}

mountApp();
