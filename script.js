// let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let detailX; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(40);
  rectMode(CENTER);
}

function draw() {
  noStroke();
  fill(0, 50)
  // let step = frameCount % 20;
  // let angle = map(step, 0, 20, 0, TWO_PI);
  // let cos_a = cos(angle);
  // let sin_a = sin(angle);
  // translate(50, 50);
  // Equivalent to rotate(angle);
  // applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
  // fill(random(colorlist));
  rect(mouseX, mouseY, 75, 55, 25);
}
