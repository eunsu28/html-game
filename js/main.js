//canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//

//ball's location
var x = Math.floor(Math.random() * (480 - 1 + 1)) + 1;
var y = Math.floor(Math.random() * (320 - 1 + 1)) + 1;
let dy = -2;
let dx = 2;
const ballRadius = 10;
let num = 0;
//and about ball

//defind button
const button = document.querySelector("#button");
//

// 공 치는거
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
//

//눌르자
var rightPressed = false;
var leftPressed = false;
//

//add event listenr
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//

//functions
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function drawBall() { //공을 계속 그리기 위해서 함수로 선언
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#c7e7e8";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() { //지우고 그리고 지우고 그리고
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            document.location.reload();
            alert("gameover")
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
}

//버튼 누르면 시작 및 새로 시작
function a() {
    num += 1;
    if(num === 1){
        setInterval(draw, 10);
    } else if(num === 2){
        window.location.reload() //재시작
    }
}

//처음에 시작하기 전에
drawBall();
drawPaddle();
//

//클릭을 누르면 시작
button.addEventListener("click", a);
//

//github.dev