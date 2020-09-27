const { ref, reactive, effect, computed } = require("@vue/reactivity");

// computed
// effect
// 收集依赖  触发依赖
const count = ref(0);


// computed
// watchEffect
// watch

effect(() => {
  // 收集依赖
  // 就是当前的这个函数
  console.log("first");
  console.log(count.value);
});

effect(() => {
  // 收集依赖
  // 就是当前的这个函数
  console.log("second");
  console.log(count.value);
});

// count -> 上面的函数

count.value++;
// 响应式对象变更后
// 触发之前的依赖
// 就是上面收集的函数
