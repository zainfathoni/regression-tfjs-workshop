
// This will store mouse x,y points that have been scaled from 0->1
let Xs = [];
let Ys = [];
let A = 1;
let C = 100;
const getY = x => A * x + C

// This scales a value from 0 to max to 0 to 1
const norm = (x, max) => map(x, 0, max, 0, 1);
const normX = x => norm(x, windowWidth);
const normY = x => norm(x, windowHeight);

/**
 * This is only called once
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
}

/*
This function is called every time a mouse is clicked.
*/
function mouseClicked() {
  // 1
  // Can just log mouse events here
  console.log("Clicked");
  // 2
  // Can get the X and Y of the mouse event with mouseX and mouseY
  console.log(mouseX, mouseY);
  const x = normX(mouseX)
  const y = normY(mouseY)
  Xs.push(x);
  Ys.push(y);
  console.log(Xs, Ys);
  ellipse(mouseX, mouseY, 10);
}

function draw() {
  const x1 = 0; // Start on the furthest left
  const y1 = getY(x1); // Get the y value for this
  const x2 = windowWidth; // End on the furthest right
  const y2 = getY(x2); // Get the y value for this
  stroke(51);
  strokeWeight(10);
  line(x1, y1, x2, y2);
}
