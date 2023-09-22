let angle = 0;
let spacing = 5;
let offset = 0;
let trail = [];
let figuraEnMovimiento = true; // Variable para controlar si la figura se mueve

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  translate(width / 2, height / 50); // Centra el origen en el centro del lienzo

  if (figuraEnMovimiento) {
    let x = cos(angle) * 350;
    let y = sin(angle * 2) * 200;

    trail.push(createVector(x, y));
    offset += 0.5;

    for (let i = 3; i < trail.length; i++) {
      let alpha = map(i, 10, trail.length, 80, 40);
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
  }
translate(CENTER)
  // Texto y estilo...
  textSize(20);
  fill(1, 2);
  noStroke();
  textFont ('Helvetica');
  text("Los astros son rondas de niños \n jugando la Tierra a espiar...\n Los trigos son talles de niñas \n jugando a ondular... a ondular...\n   \n Los ríos son rondas de niños \n jugando a encontrarse en el mar... \n Las olas son rondas de niñas \n jugando la Tierra a abrazar..", -width / 4, -height / 2 + 30);
 
  translate (CENTER);
  textSize(30);
  fill(1, 2);
  noStroke();
  textFont('Georgia');
  text("ANTONIA GONZALEZ\n\nPortafolio Imagen Escrita ", -width / 4, -height / 2 + 30);
  
}
