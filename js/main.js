var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
const button = document.querySelector("#button");
const ballRadius = 10;
let dy = -10;
let dx = 10;
let num = 0;


function drawBall() { //공을 계속 그리기 위해서 함수로 선언
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}


function a() {
    num += 1;
    if(num === 1){
        setInterval(draw, 10); //10 millisecond 
    } else if(num === 2){
        window.location.reload()
    }
}

drawBall();
button.addEventListener("click", a);

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// var ballRadius = 10;
// var x = canvas.width/2;
// var y = canvas.height-30;
// var dx = 2;
// var dy = -2;

// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
    
//     if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
//         dx = -dx;
//     }
//     if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
//         dy = -dy;
//     }
    
//     x += dx;
//     y += dy;
// }

// setInterval(draw, 10);