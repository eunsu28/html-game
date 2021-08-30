var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
const button = document.querySelector("#button");

function drawBall() { //공을 계속 그리기 위해서 함수로 선언
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI*2); //공위치
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() { //공을 화면에 그리다
    ctx.clearRect(0, 0, canvas.width, canvas.height); //흔적 지우기
    drawBall(); //공그리기 function실행
    x += 1; //x에 위치더해주기 0이면 그대로 있고
    y += -1; //올라가자
}

function a() {
    setInterval(draw, 10); //10 millisecond 
}

drawBall()
addEventListener("click", a);