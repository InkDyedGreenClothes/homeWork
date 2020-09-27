const blessed = require("blessed");
const { ref, effect, reactive, computed } = require("@vue/reactivity");

// 创建一个 render 函数
// render 函数生成视图
// render 内部的数据是响应式数据
// 当调用 render 的时候需要把之前的视图都清空掉
function render(context) {
  console.log(context);
  let screen;
  // 清空之前的内容
  effect(() => {
    // reset
    // if (screen) {
    // 直接删除 screen 的话，会导致屏幕闪烁
    // 还有一种策略是可以删除screen 下面所有的子元素
    //   screen.destroy();
    // }

    // init screen
    screen = blessed.screen({
      smartCSR: true,
    });

    screen.key(["escape", "q", "C-c"], function (ch, key) {
      return process.exit(0);
    });

    screen.title = "my window title";

    // Create a box perfectly centered horizontally and vertically.
    var box = blessed.box({
      top: "center",
      left: "center",
      width: 100,
      height: "50%",
      tags: true,
      border: {
        type: "line",
      },
      style: {
        fg: "white",
        bg: "magenta",
        border: {
          fg: "#f0f0f0",
        },
        hover: {
          bg: "green",
        },
      },
    });

    // Append our box to the screen.
    screen.append(box);
    const text = blessed.text({
      fill: true,
    });
    text.position.left = context.textPosition.left;
    text.position.top = context.textPosition.top;
    text.setText(context.textContent.value);

    box.append(text);

    // box.key("enter", context.handleKeyboard);

    screen.render();
  });
}

function setup() {
  let dir = ref(1);

  // 计算属性
  const textContent = computed(() => {
    if (dir.value === 1) {
      return "shuaige guangtou ";
    } else if (dir.value === -1) {
      return "xiaoyuzi ";
    }
  });

  const textPosition = reactive({
    left: 0,
    top: 0,
  });

  const speed = 1;
  setInterval(() => {
    textPosition.left += dir.value * speed;

    if (textPosition.left > 80) {
      dir.value = -1;
    } else if (textPosition.left < 10) {
      dir.value = 1;
    }
  }, 100);

  return {
    textContent,
    textPosition,
  };
}

function init() {
  render(setup());
}

init();
