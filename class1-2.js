const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.fillRect(50, 50, 100, 200);
// 사각형 그리기 (x좌표, y좌표, width, height)
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100); 
ctx.fill();
// ctx.stroke(); 선
// ctx.rect(250, 250, 100, 100); 순서를 이렇게 하면 안보임

ctx.beginPath(); // 이렇게 해줘야 이 이후는 조건이 다르게 적용
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = 'red';
ctx.fill(); 



