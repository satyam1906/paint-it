const canvas = document.getElementById('myCanvas');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', (e) => {
  // console.log(e);
  if (e.target.id == 'clear') {
    // console.log("clear screen");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

toolbar.addEventListener('change', (e) => {
  if (e.target.id == 'stroke') {
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id == 'lineWidth') {
    lineWidth = e.target.value;
  }
});

canvas.addEventListener('mousedown', (e) => {
  isPainting = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener('mouseup', (e) => {
  isPainting = false;
  ctx.stroke();
  ctx.beginPath();
});

const draw = (e) => {
  if (!isPainting) {
    return;
  }
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';

  ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
  ctx.stroke();
};
canvas.addEventListener('mousemove', draw);

// ctx.moveTo(0, 0);
// ctx.lineTo(600, 600);
// ctx.stroke();
