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
        snake_array;

        init();

});

function init(){
    create_snake();
    create_food();
    score = 0;
    if(typeof game_loop!='undefined')
        clearInterval(game_loop);
    game_loop=setInterval(paint,speed);
        

}
