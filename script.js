let angle = 0;
let color1;
let color2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(40);
  rectMode(CENTER);
  angleMode(DEGREES);
  color1 = color(255, 0, 0, 70);
  color2 = color(0, 0, 255, 70);
}

function draw() {
  stroke(255,215,0);
  strokeWeight(1);
  var percentage = map(mouseY, 0, height, 0, 1);
  var color = lerpColor(color1, color2, percentage);
  fill(color);

  push();
  translate(mouseX, mouseY);
  rotate(angle);
  rect(0, 0, 75, 55, 25);
  pop();
  
  angle = angle + 3;
}

function mouseClicked() {
  background(0);
}