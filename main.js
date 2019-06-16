
// This will store mouse x,y points that have been scaled from 0->1
let Xs = [];
let Ys = [];

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
  // 3
  // We can print an elipse for each mouse click
  ellipse(mouseX, mouseY, 10);
  text(`[${x}, ${y}]`, mouseX + 10, mouseY + 4);
}
