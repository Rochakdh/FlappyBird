const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
c.font = "30px Arial";
let startScreen = document.querySelector('.start-screen')
let endScreen = document.querySelector('.end-screen')
let buttonStart = document.querySelector('.play-btn')
let buttonHome = document.querySelector('.home-btn')

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
    init();
}
);

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowUp')
    {
        
    }
});