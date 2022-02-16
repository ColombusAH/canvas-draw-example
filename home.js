const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

function resize() {
	ctx.canvas.width = window.innerWidth / 2;
	ctx.canvas.height = window.innerHeight / 2;
}

function start(event) {
	document.addEventListener("mousemove", draw);
	reposition(event);
}

function reposition(event) {
	coord.x = event.clientX - canvas.offsetLeft;
	coord.y = event.clientY - canvas.offsetTop;
}

function stop() {
	document.removeEventListener("mousemove", draw);
}

function draw(event) {
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.lineCap = "round";
	ctx.strokeStyle = "#ACD3ED";
	ctx.moveTo(coord.x, coord.y);
	reposition(event);
	ctx.lineTo(coord.x, coord.y);
	ctx.stroke();
}

resize();

ctx.lineWidth = 10;

// Wall
// Paints a rectangle which has a starting point at (x, y) and has a w width and an h height onto the canvas, using the current stroke style.
ctx.strokeRect(75, 140, 150, 110);

// Door
//Draws a filled rectangle at (x, y) position whose size is determined by width and height.
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
