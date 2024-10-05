function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);


  // parLineCircle(500,500,500,50);
  // parLineBox(100,100,100,300,20);

  let pitch = 100;
  let sqDim = 0.45 * pitch;

  noFill();
  
  translate(pitch / 2, pitch / 2);

  for (let y = 0; y < height; y += pitch) {
    for (let x = 0; x < width; x += pitch) {
      let rn = random(0, 6);
      let ccc = random(["#6480FF", "#29EADA", "#00B271"]);
      let sw = random(0, 4.5);
      let pos = random(0, 10);
      let size = random();

      push();
      stroke(ccc);
      strokeWeight(sw);
      translate(x, y);

      if (rn < 3) {
        parLineCircle(pos, pos, sqDim * size, 5);
      } else {
        parLineBox(pos, pos, sqDim * size, sqDim * size, 4);
      }

      pop();
    }
  }
}

function draw() {}

function parLineCircle(circleX, circleY, rad, gap) {
  for (let x = circleX - rad + gap; x < circleX + rad; x += gap) {
    let y1 = circleY + sqrt(rad * rad - (x - circleX) * (x - circleX));
    let y2 = circleY - sqrt(rad * rad - (x - circleX) * (x - circleX));
    line(x, y1, x, y2);
  }

  ellipse(circleX, circleY, rad * 2);
}

function parLineBox(rectX, rectY, rectW, rectH, gap) {
  for (let y = rectY + gap; y < rectY + rectH; y += gap) {
    line(rectX, y, rectX + rectW, y);
  }

  rect(rectX, rectY, rectW, rectH);
}
