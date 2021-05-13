const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
c.font = "30px Arial";
let startScreen = document.querySelector('.start-screen')
let endScreen = document.querySelector('.end-screen')
let buttonStart = document.querySelector('.play-btn')
let buttonHome = document.querySelector('.home-btn')

let backgroundX;
let backgroundY;
let backgrounHeight;
let backgroundWidth = 335;
let speed = 0.2;

class Pipes {
    constructor(){
        this.x = 0;
        this. y = 0;
    };
};

background = function(){
    let background = new Image();
    background.src = 'images/background-game.png';
    backgroundX = canvas.width/2-backgroundWidth/2
    backgroundY = canvas.height/2-background.height/2
    backgrounHeight = background.height
    c.drawImage(background,backgroundX,backgroundY,backgroundWidth,background.height)
}

base = function() {
    let base = new Image()
    base.src = 'images/base.png';
    let baseX = backgroundX - dx
    let baseY = backgroundY+backgrounHeight-base.height
    speed += 0.5
    let baseWidth = backgroundWidth
    c.drawImage(base,baseX,baseY,2*baseWidth,base.height)
    if (baseX < backgroundX-backgroundWidth){
        c.clearRect(0, 0, canvas.width, canvas.height);
        speed = 0
        baseX = backgroundX   
    }

}
bird = function(){
    

}
function init(){
    pipes = new Pipes()
    

}
function animate (){
    background();
    base();
    requestAnimationFrame(animate);
}

buttonStart.addEventListener('click', function(){
    startScreen.style.display = 'none'
    endScreen.style.display = 'none'
    canvas.style.display = 'block'
    init();
    animate()
}
);

buttonHome.addEventListener('click', function(){
    startScreen.style.display = 'block'
    endScreen.style.display = 'none'
    canvas.style.display = 'none'
}
);

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowUp')
    {
        console.log('check')
    }
});