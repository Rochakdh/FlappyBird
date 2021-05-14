const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = 515
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
let baseY;
let slideBird = 0.3;
let speed = 0.4;
let baseHeight;
let linerSpeed = 2;
let jumpHeight = 20;
let pipePosition = 200

class Pipes {
    constructor(x,height){
        this.x = x;
        this.y = 0;
        this.height = 0;
        this.preserveX = x;
        this.dragX = 0
        this.height = height
    };
    
    drawPipeBase = () => {
        this.x = this.x - 0.5
        let pipeImage = new Image()
        pipeImage.src = 'images/pipe.png';
        let pipeX = backgroundX + this.x
        let pipeY = canvas.height-baseHeight-pipeImage.height/2 - this.height
        c.drawImage(pipeImage,pipeX,pipeY,pipeImage.width,pipeImage.height/2+this.height)
        if (this.x < backgroundX-pipeImage.width-20){
            this.x = this.preserveX + 400;
        }
    }
    drawPipeTop = function(){
        let pipeImageUp = new Image()
        pipeImageUp.src = 'images/pipeup.png';
        let  pipeUpX = backgroundX + this.x
        let pipeUpY = 0
        c.drawImage(pipeImageUp,pipeUpX,pipeUpY,pipeImageUp.width,pipeImageUp.height/2-this.height)
        // if (this.x < backgroundX-pipeImageUp.width){
        //     this.x = this.preserveX;
        // }
    }
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
    let baseX = backgroundX-speed
    baseHeight = base.height
    baseY = backgroundY+backgrounHeight-base.height
    speed += 0.5
    let baseWidth = backgroundWidth
    c.drawImage(base,baseX,baseY,2*baseWidth,base.height)
    if (baseX < backgroundX-backgroundWidth){
        // cancelAnimationFrame(animate)
        speed = 0
        baseX = backgroundX   
    }
}

let baseTop;
let birdY;

bird = function(){
    let bird = new Image()
    bird.src = 'images/bird.png';
    let birdX = backgroundX - 50 + backgroundWidth / 2; 
    birdY = backgroundY - 100 + backgrounHeight / 2 + jumpHeight; 
    c.drawImage(bird,birdX,birdY)
    jumpHeight += linerSpeed
    baseTop = Math.abs(canvas.height) - baseHeight - 20
    if (birdY > baseTop){
        startScreen.style.display = 'none'
        canvas.style.display = 'none'
        endScreen.style.display = 'block'
        cancelAnimationFrame(animate)
        c.clearRect(0, 0, canvas.width, canvas.height);       
    }
}
let pipes;

function init(){
    pipes = new Pipes(200,10)
    pipes2 = new Pipes(400,50)
}

function animate (){
    background();
    base();
    bird();
    pipes.drawPipeBase()
    pipes.drawPipeTop()
    pipes2.drawPipeBase()
    pipes2.drawPipeTop()
    requestAnimationFrame(animate)
}

buttonStart.addEventListener('click', function(){
    startScreen.style.display = 'none'
    endScreen.style.display = 'none'
    canvas.style.display = 'block'
    init();
    animate();
}
);

buttonHome.addEventListener('click', function(){
    location.reload()
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowUp')
    {
        console.log(e)
        jumpHeight -= 15 * linerSpeed
    }
});

