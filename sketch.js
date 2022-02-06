var backgroundImg


function preload() {
  backgroungImg = loadImage("snow3.jpg")
  snowImg = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(backgroungImg);  
  snowfall();
  drawSprites();
}

function snowfall(){
  if(frameCount%50===0){
    var snow = createSprite(200,0);
    snow.addImage(snowImg);
    snow.x = Math.round(random(10,750))
    snow.velocityY = 3;
    snow.scale = 0.1;
  }
}