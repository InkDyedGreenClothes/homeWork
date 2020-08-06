// console.log("index.js...");
// 分析对象(根据需求)  ---> 抽离对象共性特点；--》类 --->研究类之间逻辑关系；
// 亚瑟  鲁班...  英雄对象；  技能一、技能二... 技能  皮肤对象 皮肤一、皮肤二...; 玩家对象；（登录）;

// 亚瑟  鲁班 （英雄类（基类，继承）） 技能一类  技能二类 （技能类） 皮肤一类 皮肤二类（皮肤类）；玩家类；
// 引入游戏类
import Game from './game/game.js';
{
    let game = new Game();
    let eles = {
        login: {
            submit: document.querySelector('.sub'),
            userName: document.querySelector('.username'),
            loginDom: document.querySelector('.login')
        },
        game: {
            gameDom: document.querySelector('.game'),
            heroView: document.querySelector('.heroView'),
            skillsView: document.querySelector('.skillsView'),
            userView: document.querySelector('.userView'),
            chioseusername: document.querySelector('.chioseusername'),
            heroShow: document.querySelector('.heroShow')
        }
    };
    // 点击登陆
    eles.login.submit.onclick = function () {
        let value = eles.login.userName.value;
        game.login(value);
        eles.login.loginDom.style.display = 'none';
        eles.game.gameDom.style.display = 'block';
        eles.game.chioseusername.innerHTML = game.player.name;
        renderHero(game.player);
    };
    // 游戏界面操作
    // 渲染左侧英雄
    function renderHero(heroData) {
        // console.log(heroData);
        // 先清空英雄选择界面
        eles.game.heroView.innerHTML = "";
        // 遍历放入当前账号英雄
        heroData.heroes.forEach(item => {
            // 创建英雄存放dom
            let heroHtml = document.createElement('div');
            let imgHtml = `
            <img src="${item.icon}" />
            <span>${item.name}</span>`;
            heroHtml.innerHTML = imgHtml;
            // 给英雄存放dom添加类名
            heroHtml.classList.add('heroItem');
            eles.game.heroView.appendChild(heroHtml)
            // 点击选择英雄
            heroHtml.onclick = function () {
                // 清空技能
                eles.game.skillsView.innerHTML = "";
                // 调用渲染技能方法
                renderSkills(item.skills);
                // 清空右侧头像显示
                eles.game.heroShow.innerHTML = "";
                let heroShowImg = document.createElement('img');
                heroShowImg.src = item.icon;
                eles.game.heroShow.appendChild(heroShowImg)
            }
        });
    };
    // 渲染英雄技能
    function renderSkills(skills) {
        skills.forEach(item => {
            let skillHtml = document.createElement('img');
            skillHtml.src = item.icon;
            eles.game.skillsView.appendChild(skillHtml);
        })
    }
}