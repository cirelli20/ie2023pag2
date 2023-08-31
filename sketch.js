function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let angle = 0;
let spacing = 5;
let offset = 0;
let trail = [];

function setup() {
  createCanvas(1000, 1000);
  background(255, 255, 204); // Color amarillo claro
}

function draw() {
  translate(width / 2.5, height / 4.3);
  
  let x = cos(angle) * 350;
  let y = sin(angle * 2) * 200;

  trail.push(createVector(x, y));
  offset += 0.5;

  for (let i = 3; i < trail.length; i++) {
    let alpha = map(i, 10, trail.length, 80, 400);
    stroke(10, alpha);
    if (i % 2 === 3) {
      strokeWeight(0.03);
    } else {
      strokeWeight(0.015);
    }
    if (i > 1) {
      line(trail[i - 2].x, trail[i - 2].y, trail[i].x, trail[i].y);
    }
  }

  if (trail.length > 80) {
    trail.splice(10, 1);
  }

  angle += 2;

  // Texto y estilo...

  textSize(20, 2);
  textAlign(CENTER, TOP);
  fill(1, 2);
  noStroke ()
  text("Los astros son rondas de niños jugando la Tierra a espiar... ", width / 30, height / 5);

  textSize(20);
  textStyle();
  fill(3, 2);
  textAlign(CENTER, 10);
  textWrap(WORD);
  text("Los trigos son talles de niñas jugando a ondular..., a ondular...", width / 30, height / 4);

  textSize(20);

  textAlign(CENTER, 10);
  fill(3, 2);
  textWrap(WORD);
  text("Los ríos son rondas de niños jugando a encontrarse en el mar...", width / 30, height / 3);

  textSize(20);
  fill(3, 2);
  textAlign(CENTER, 10);
  textWrap(WORD);
  text("Las olas son rondas de niñas jugando la Tierra a abrazar..", width / 30, height / 3.5);
}
let image
loadImage ()
