import {
  ref,
  reactive,
  computed,
  effect,
} from "./node_modules/@vue/reactivity/dist/reactivity.esm-browser.js";

// template -> render() -> vnode -> 真实的 dom -> 添加到容器内

let a = ref(10);
let b;
// let b = a * 10;

effect(() => {
  // 收集依赖
  console.log("effect - b");
  b = a.value * 10;
  console.log(b)
});


a.value = 20;


// a -> effect 内部的函数有关系

// computed watch watchEffect


console.log(b);
