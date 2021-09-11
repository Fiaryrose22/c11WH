
function preload(){
  //pre-load images
  boy_runing =loadAnimation("Runner-2.png","Runner-1.png")
  pathimg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path = createSprite(200,200);
  path.addImage("path",pathimg);
  path.velocityY = 4
  path.scale = 1.2;

  boy = createSprite(180,340,20,50);
  boy.addAnimation("running",boy_runing);
  boy.scale = 0.08;

}

function draw() {
  background(0);

  path.velocityY=4;
  boy.x= World.mouseX;

  if (path.y > 400){
    path.y = height /2;
  }
  drawSprites();

}