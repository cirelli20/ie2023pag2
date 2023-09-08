
let angle = 0;
let spacing = 5;
let offset = 0;
let trail = [];
let figuraEnMovimiento = true; // Variable para controlar si la figura se mueve

function setup() {
  createCanvas(1000, 2000);
  background(255, 255, 204); // Color amarillo claro

  // Crear un enlace a una página externa
  let enlaceInterno1 = createA('https://cirelli20.github.io/tarea2/', '- Tarea 2: cirelli20.github.io/tarea2/');
  enlaceInterno1.position(290, 660); //80ablecer la posición del enlace
  enlaceInterno1.style('font-size', '20px'); // Establecer el tamaño de fuente
  enlaceInterno1.style('color', 'ORANGE'); // Establecer el color del enlace
  // Crear un enlace a una página externa
  let enlaceInterno2 = createA('https://cirelli20.github.io/tarea-3/', '- Tarea 3:cirelli20.github.io/tarea-3/ ');
  enlaceInterno2.position(290, 700); //80ablecer la posición del enlace
  enlaceInterno2.style('font-size', '20px'); // Establecer el tamaño de fuente
  enlaceInterno2.style('color', 'ORANGE'); // Establecer el color del enlace

  // Texto "ENCARGOS"
  textSize(24);
  fill(0);
  text("ENCARGOS", 180, 530); // Ajusta la posición del texto
  textFont(ITALIC)
}

function draw() {
  translate(width / 2, height / 8);

  if (figuraEnMovimiento) {
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
  }

  // Texto y estilo...
  textSize(20);
  fill(1, 2);
  noStroke ()
text (Los astros son rondas de niños jugando la Tierra a espiar... \n Los trigos son talles de niñas jugando a ondular..., a ondular..
\n Los ríos son rondas de niños jugando a encontrarse en el mar.. \n Las olas son rondas de niñas jugando la Tierra a abrazar..\n ,
(width / 30, height / 5) )
}

  noStroke();
  textStyle(ITALIC);
  text("Los astros son rondas de niños \n jugando la Tierra a espiar...\n Los trigos son talles de niñas \n jugando a ondular... a ondular...\n   \n Los ríos son rondas de niños \n jugando a encontrarse en el mar... \n Las olas son rondas de niñas \n jugando la Tierra a abrazar..", width / 60, height / 7);
}

// Forma para que se detenga con un clic
function mouseClicked() {
  // Verificar si se hizo clic en la figura y cambiar el estado de movimiento
  let distanciaAlCentro = dist(mouseX, mouseY, width / 2, height / 4);

  if (distanciaAlCentro < 350 && figuraEnMovimiento) {
    figuraEnMovimiento = false; // Detener la figura
  } else {
    figuraEnMovimiento = true; // Reanudar el movimiento
  }
  circle(30, 30, 20);
}
