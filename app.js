let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = 800;
canvas.height = 800;

const corners = [
  { x: canvas.width / 2, y: 50 },
  { x: 50, y: canvas.height - 50 },
  { x: canvas.width - 50, y: canvas.height - 50 },
];

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCorner() {
  let random_number = getRandomNumber(0, 2);
  return corners[random_number];
}

function getMidPoint(x1, y1, x2, y2) {
  let new_x = (x1 + x2) / 2;
  let new_y = (y1 + y2) / 2;
  let midPoint = { x: new_x, y: new_y };
  return midPoint;
}

function getRandomColor() {
  return colors[getRandomNumber(0, 6)];
}

// making sides of triangle
ctx.beginPath();
ctx.moveTo(corners[0].x, corners[0].y);
ctx.lineTo(corners[1].x, corners[1].y);
ctx.lineTo(corners[2].x, corners[2].y);
ctx.lineTo(corners[0].x, corners[0].y);
ctx.stroke();

// getting starting point
let initial_x = getRandomNumber(0, 800);
let initial_y = getRandomNumber(0, 800);

// making a point at initial x,y
ctx.fillStyle = "blue";
ctx.fillRect(initial_x, initial_y, 5, 5);

let iteration = 0;
const maxIterations = 50000;

const interval = setInterval(() => {
  if (iteration >= maxIterations) {
    clearInterval(interval);
    console.log("finished");
    return;
  }

  const randomCorner = getRandomCorner();
  const midpoint = getMidPoint(
    initial_x,
    initial_y,
    randomCorner.x,
    randomCorner.y
  );

  //   ctx.fillStyle = getRandomColor();
  ctx.fillStyle = "black";
  ctx.fillRect(midpoint.x, midpoint.y, 1, 1);

  initial_x = midpoint.x;
  initial_y = midpoint.y;

  iteration++;
}, 0.5);
