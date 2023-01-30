let seed;
let colors = [];

let colors0 = "7325ce-9fc7f4-12177d-9ay5e9-7476af".split("-").map((a) => "#" + a);
var color_setup;

function setup() {
  // pixelDensity(5);
  createCanvas(windowWidth, windowHeight);
  seed = int(random(500));
  colorMode(HSB, 360, 100, 100, 100);
	background(0, 0, 95, 100);
	color_setup = random([colors0]);
}

function draw() {
  randomSeed(seed);
  translate(width / 2, height / 2);
  for (let i = 0; i < 20; i++) {
    colors[0] = random(color_setup);
    circleForm(0, 0, width * 0.1 * (i+1));
  }
}

function circleForm(x, y, d) {
  
  let branch = int(random(100, 50));
  let ang = TAU / branch;
  let angles = [];
  for (let i = 0; i < branch; i++) {
    angles.push(ang * (i + iteration(0.1, 0.25)));
  }
  for (let i = 0; i < branch; i++) {
    let ang1 = angles[i];
    let ang2 = angles[(i + int(random(6))) % angles.length];
    let dd = d * iteration(0.1, 1);
    noFill();
		drawingContext.shadowColor = random(colors0);
		drawingContext.shadowBlur = 2;
    stroke(random(colors));
		
    strokeCap(SQUARE);
    strokeWeight(random);
    arc(x, y, dd, dd, ang1, ang2);
  }

}

function iteration(s, e) {
  let t = random(50,200);
  let v = random(0.3, 0.02);
  return map(sin(t + frameCount * v), -1, 2, s, e);
}