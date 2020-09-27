import {
  ref,
  reactive,
  computed,
  effect,
} from "./node_modules/@vue/reactivity/dist/reactivity.esm-browser.js";

// template -> render() -> vnode -> 真实的 dom -> 添加到容器内

function render(context) {
  effect(() => {
    // reset
    document.querySelector("#app").innerHTML = ``;

    const container = document.createElement("div");
    container.classList.add("box");

    const text = document.createElement("p");
    text.innerText = context.textContent.value;
    text.style.position = "absolute";
    text.style.left = `${context.textLeft.value}px`;

    container.append(text);

    document.querySelector("#app").append(container);

    // <div>
    //     <p :style="{left: textLeft}">{{textContent}}</p>
    // </div>
  });
}

function setup() {
  const textLeft = ref(0);

  let dir = ref(1);

  const speed = 10;
  setInterval(() => {
    textLeft.value += speed * dir.value;

    if (textLeft.value >= document.body.clientWidth) {
      dir.value = -1;
    } else if (textLeft.value <= 0) {
      dir.value = 1;
    }
  }, 100);

  const textContent = computed(() => {
    if (dir.value === 1) {
      return "嘿嘿";
    } else if (dir.value === -1) {
      return "哈哈";
    }
  });

  const featureA = useFeatureA()
  const featureB = useFeatureA()

  return {
    textLeft,
    textContent,
  };
}

function init() {
  render(setup());
}

init();
