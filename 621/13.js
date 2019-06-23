// 取得畫布
let canvas = document.getElementById("myCanvas");
// 渲染2D
let ctx = canvas.getContext("2d");
// 求半徑
let ballRadius = 10;
// 球圓心的X
let ballX = canvas.width / 2;
// 球圓心的Y
let ballY = canvas.height - 30;
// X移動量
let dx = 2;
// Y移動量
let dy = -2;
// 棒子高
let paddleHeight = 10;
// 棒子寬
let paddleWidth = 75;
// 棒子的左上點
let paddleX = (canvas.width - paddleWidth) / 2;
// 左右幾個方塊
let brickRowCount = 5;
// 幾排方塊
let brickColumnCount = 3;
// 方塊的寬
let brickWidth = 75;
// 方塊的高
let brickHeight = 20;
// 方塊間距
let brickPadding = 10;
// 初始位移
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
// 打掉的方塊
let remove = 0;
// 生命
let lives = 1;
// 方塊陣列
let bricks = [];

// 利用for迴圈 為每個方塊加上property
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

// 監聽滑鼠移動
document.addEventListener("mousemove", mouseMoveHandler, false);

// 抓到滑鼠
function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}

// 使方塊消失
function crash() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            // 如果存在
            if (b.status == 1) {
                // 如果球碰到方塊
                if (ballX > b.x && ballX < b.x + brickWidth && ballY > b.y && ballY < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    remove++;
                    if (remove == brickRowCount * brickColumnCount) {
                        alert("過關");
                        document.location.reload();
                    }
                }
            }
        }
    }
}
// 畫球
function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
// 畫棒子
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
// 畫棒子
function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                let brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
                let brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw() {
    // 重構畫面 白的畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 畫格子
    drawBricks();
    // 畫球
    drawBall();
    // 棒子
    drawPaddle();
    // 消除格子
    crash();

    // 處理反彈運算
    if (ballX + dx > canvas.width - ballRadius || ballX + dx < ballRadius) {
        dx = -dx;
    }
    if (ballY + dy < ballRadius) {
        dy = -dy;
    }
    else if (ballY + dy > canvas.height - ballRadius) {
        if (ballX > paddleX && ballX < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            //死掉
            lives--;
            if (!lives) {
                alert("GG");
                document.location.reload();
            }
        }
    }

    ballX += dx;
    ballY += dy;
    // 針對視覺更新避免 setTimeout 或 setInterval；一律改為使用 requestAnimationFrame。另外一種重新載入頁面的方法
    requestAnimationFrame(draw);
}

draw();