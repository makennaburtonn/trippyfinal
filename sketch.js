var myFont;
function preload(){
  myFont = loadFont('akka.ttf');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  a=height/2

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  
}

function draw() {   
  background(mouseY / 2, 100, 100);

  fill(360 - mouseY / 2, 100, 100);
  strokeWeight(75);
  stroke(360 - mouseY / 3, 100, 100);
  rect(windowWidth/2, windowHeight/2, mouseX + 1, mouseX + 1);
 
  fill(300 - mouseY / 2, 100, 100);
  strokeWeight(2);
  stroke(0);
  text('TRIPPY', windowWidth/2,windowHeight/2);
  textFont(myFont); 
  textAlign(CENTER,CENTER);
  textSize(80 + (mouseX / width)*200);
  
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
