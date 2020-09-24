import { createApp, defineComponent, h } from "vue";
// import App from "./App.vue";

const App = defineComponent({
  render() {
    const vnode = h("div", [h("p", "小宇子")]);
    console.log(vnode);
    return vnode;
  },
});

createApp(App).mount("#app");

// 渲染机制
// template -> render() -> vnode tree -> 渲染成真正的 dom -> 添加到 dom 容器内 渲染出来(可以看到)

// 如何创建一个 dom 节点呢？

// 创建一个元素

// dom 平台
// const div = document.createElement("div");
// document.querySelector("#app").append(div);

// 渲染到 canvas 平台
// 调用 canvas 上创建元素的 api
