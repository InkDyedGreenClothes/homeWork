import {
  Application,
  Container,
  Graphics,
  Sprite,
  Text,
  TextStyle,
  Texture,
} from "pixi.js";
import logo from "./assets/logo.png";

// 初始化
const game = new Application({
  width: 750,
  height: 1080,
});

// game.view -> canvas
// game.stage -> 根容器
// 创建自定义的容器

document.body.append(game.view);

const container = createContainer();
game.stage.addChild(container);
container.x = 300;

// 创建文字
function createText() {
  const text = new Text("小宇子 呵呵呵");
  text.style = new TextStyle({ fill: 0x00ff00 });

  // internal
  // 帧循环
  //   game.ticker.add(() => {
  //     text.x++;
  //   });
  // game.ticker.remove(handle)

  // text.x
  game.stage.addChild(text);
}

function createContainer() {
  const container = new Container();
  return container;
}

//创建图片
function createImg() {
  const img = new Sprite();
  // dom - > img - src
  img.texture = Texture.from(logo);
  // 设置坐标
  img.x = 100;
  img.y = 200;
  //   game.stage.addChild(img);
  container.addChild(img);

  // src -> 图片的路径
}

// 创建矩形
function createRect() {
  const rect = new Graphics();
  rect.beginFill(0xff0000);
  rect.drawRect(0, 0, 50, 50);
  rect.endFill();

  // 添加点击事件
  rect.interactive = true;
  rect.on("pointertap", () => {
    console.log("click");
  });
  //   game.stage.addChild(rect);
  container.addChild(rect);
}

createImg();
createText();
createRect();
