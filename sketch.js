let linesCount = 300;

function setup() {
  createCanvas(2000, 2000);
  background(0);
  stroke(255);
  strokeWeight(1);
  noLoop();
}

function draw() {
  background(0);

  // draw a bunch of white lines
  for (let i = 0; i < linesCount; i++) {
    push();
    const tx = random(width);
    const ty = random(height);
    translate(tx, ty);
    rotate(random(-PI, PI) * 0.6);
    const s = random(0.5, 1.3);
    scale(s);

    // make every line longer than the canvas
    const len = random(width * 1.2, width * 2.5);
    stroke(255, random(140, 255));
    strokeWeight((random(0.6, 1.8) / s));
    line(-len * 0.5, 0, len * 0.5, 0);

    pop();
  }
}