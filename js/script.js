$(document).ready(function(){
    var canvas = $('#canvas')[0],
        ctx = canvas.getContext('2d'),
        w = canvas.width,
        h = canvas.height,
        cw = 15,
        d='right',
        food,
        score,
        color = 'green',
        speed = 130,
        snakeArray;

        init();
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
        snakeArray =[];
        for(var i=length-1;i >=0; i--){
            snakeArray.push({x:i,y:0})
        }

    }

    function createFood(){
        food = {
            x:Math.round(Math.random()*(w-cw)/cw),
            y:Math.round(Math.random()*(h-cw)/cw)
        }
    }

    function paint(){
        ctx.fillStyle ="black";
        ctx.fillRect(0,0,w,h);
        ctx.strokeStyle = "white";
        ctx.strokeRect(0,0,w,h);

        //Snake position
        var nx = snakeArray[0].x;
        var ny = snakeArray[0].y;

        //Snake movement
        if(d=='right') nx++;
        else if(d=='left')nx--;
        else if(d=='up') ny--;
        else if(d=='down')ny++;

        if( (nx==-1) || (nx == w/cw) || (ny == -1) || (ny == h/cw) || checkCollision(nx,ny,snakeArray)){
            init();

            return;
        }

        if(nx==food.x && ny==food.y){
            var tail = {x: nx, y: ny};
            score++;
            createFood();
        }
        else{
            var tail = snakeArray.pop();
            tail.x = nx;
            tail.y=ny;
        }

        snakeArray.unshift(tail);

        for(var i=0;i<snakeArray.length;i++){
            var c = snakeArray[i];
            paintCell(c.x,c.y);
        }

        paintCell(food.x,food.y);

        checkScore(score);

    }

    function paintCell(x,y){
        ctx.fillStyle=color;
        ctx.fillRect(x*cw,y*cw,cw,cw);
        ctx.strokeStyle="white";
        ctx.strokeRect(x*cw,y*cw,cw,cw);
    }

    function checkCollision(x,y,array){
        for(var i=0; i<array.length;i++){
            if(array[i].x==x && array[i].y==y)
                return true;
        }
        return false;

    }
});
