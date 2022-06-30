var bola,bolaImg;
function preload(){
bolaImg=loadImage("bola.png");
}
function setup() {
  createCanvas(400,400);
 bola=createSprite(200,200,20,20);
 bola.addImage(bolaImg);
 bola.scale=0.3
}

function draw() 
{
  background("blue");
  if(keyDown("right")){
    background("pink");
    bola.x=bola.x+10
    }
  if(keyDown("left")){
    background("green");
  bola.x=bola.x-10
  }
  if(keyDown("down")){
    background("purple");
  bola.y=bola.y+10
  }
  if(keyDown("up")){
    background("yellow");
  bola.y=bola.y-10
  }
 drawSprites();
}




