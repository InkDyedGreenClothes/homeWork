// console.log("index.js...");
// 分析对象(根据需求)  ---> 抽离对象共性特点；--》类 --->研究类之间逻辑关系；
// 亚瑟  鲁班...  英雄对象；  技能一、技能二... 技能  皮肤对象 皮肤一、皮肤二...; 玩家对象；（登录）;

// 亚瑟  鲁班 （英雄类（基类，继承）） 技能一类  技能二类 （技能类） 皮肤一类 皮肤二类（皮肤类）；玩家类；



import Instance from "./game/game.js";


Function.prototype.DecoratorFn = function(fn){
    // console.log("??",this)
    this();
    fn();
}
function hurt(){
    console.log("造成100点伤害");
}

// console.log(a)
// 调用的；
let game =  Instance();
// console.log(game);
// 所有的节点
let eles = {
    login:{
        loginView:document.querySelector(".login"),
        username:document.querySelector(".username"),
        loginSub:document.querySelector(".sub")
    },
    game:{
        gameView:document.querySelector(".game"),
        chioseusername:document.querySelector(".chioseusername"),
        heroView:document.querySelector(".heroView"),
        heroShow:document.querySelector(".heroShow"),
        skillsView:document.querySelector(".skillsView"),
        heroBtn:document.querySelector(".heroBtn"),
        skinBtn:document.querySelector(".skinBtn"),
        heroContainer:document.querySelector(".heroContainer"),
        skinContainer:document.querySelector(".skinContainer"),
        skinView:document.querySelector(".skinView"),
        skinShow:document.querySelector(".skinShow")
    }
}

eles.login.loginSub.onclick = function () {
    let username = eles.login.username.value;
    // console.log(username);
    if(username){
        game.login(username);
        console.log(game);
        // 隐藏登录页面显示游戏页面;
        eles.login.loginView.style.display = "none";
        eles.game.gameView.style.display = "block";
        // 修改用户名；
        eles.game.chioseusername.innerHTML = username;
        renderHero(game.player.heroes);
    }
}

// 渲染英雄视图；
function renderHero(heroes){
    eles.game.heroView.innerHTML = "";
    console.log(heroes);
    heroes.forEach(hero=>{
        let heroItem =  document.createElement("div");
        heroItem.classList.add("heroItem")
        heroItem.innerHTML = ` <img src="${hero.ico}" />
        <span>${hero.name}</span>`;
        eles.game.heroView.appendChild(heroItem);
        heroItem.onclick = function(){
            eles.game.heroShow.innerHTML = "";
            // 选中英雄呈现；
            let img = document.createElement("img");
            img.src = hero.ico;
            eles.game.heroShow.appendChild(img);
            renderSkills(hero.skills)
            // 渲染皮肤；
            renderSkins(hero.skins);
            // hero.fire();
            hero.fire.DecoratorFn(hurt);
        }
    })
}
// 渲染技能
function renderSkills(skills){
    eles.game.skillsView.innerHTML = "";
    skills.forEach(skill=>{
        let img = document.createElement("img");
        img.src = skill.ico;
        eles.game.skillsView.appendChild(img);
    })
}
// 作业 ：扩展鲁班类； 拥有三个技能 并且渲染到视图上；
//渲染皮肤
function renderSkins(skins){
    // console.log("??",skins)
    eles.game.skinView.innerHTML = "";
    skins.forEach(skin=>{
        let div = document.createElement("div");
        div.classList.add("skinItem");
        div.innerHTML = `<img src="${skin.ico}" />
        <span>${skin.name}</span>`;
        eles.game.skinView.appendChild(div);
        div.onclick = function(){
            eles.game.skinShow.innerHTML = `<img src="${skin.img}" />`;
        }
    })
}

// 切换 英雄 、皮肤；
eles.game.heroBtn.onclick = function(){
    // 切换到英雄选择界面
    eles.game.heroContainer.style.display = "block";
    eles.game.skinContainer.style.display = "none";
}
eles.game.skinBtn.onclick = function(){
    // 切换到皮肤选择界面
    eles.game.heroContainer.style.display = "none";
    eles.game.skinContainer.style.display = "block";
}



