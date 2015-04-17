$(document).ready(function(){
    var canvas = $('#canvas')[0],
        context = canvas.getContext('2d'),
        w = canvas.width(),
        h = canvas.height(),
        cw = 15,
        d='right',
        food,
        score,
        speed = 130,
        snakeArray;

        init();

});

//Initialize Snake,food and game
function init(){
    createSnake();
    createFood();
    score = 0;
    if(typeof gameLoop!='undefined')
        clearInterval(gameLoop);
    gameLoop=setInterval(paint,speed);
        

}

//Create Snake
function createSnake(){
    var length = 5;
    snakeArray = {};
    for(var i=length-1;i >=0; i--){
        snakeArray.push({x:i,y:0})
    }

}

function createFood(){
    food = {
        x:Math.round(Math.random()*(w-cw)/cw);
        y:Math.round(Math.random()*(h-cw)/cw);
    }
}