var box,gameobject2,gameobject3,gameobject4,gameobject5,edges,music;

function preload(){
music=loadSound("music.mp3");
}

function setup() {
  createCanvas(600,600);

  box=createSprite(100,100,30,30);
  gameobject2=createSprite(200,500,80,30);
  gameobject3=createSprite(300,500,80,30);
  gameobject4=createSprite(400,500,80,30);
  gameobject5=createSprite(500,500,80,30);
  box.velocityX=-8;
  box.velocityY=6; 
  box.shapeColor="white";
  gameobject2.shapeColor="blue";
  gameobject3.shapeColor="orange";
  gameobject4.shapeColor="pink";
  gameobject5.shapeColor="purple";

  box.debug=true;
  gameobject2.debug=true;
  gameobject3.debug=true;
  gameobject4.debug=true;
  gameobject5.debug=true;
}

function draw() {
  background(0,0,0); 
  edges=createEdgeSprites();
  //box.x=World.mouseX;
  //box.y=World.mouseY;
  box.bounceOff(edges);

   if (gameobject2.isTouching(box) && box.bounceOff(gameobject2)){
    box.shapeColor="blue";
  }
  if (gameobject3.isTouching(box) && box.bounceOff(gameobject3)){
    box.shapeColor="orange";
  }
  if (gameobject4.isTouching(box) && box.bounceOff(gameobject4)){
    box.shapeColor="pink";
  }
  if (gameobject5.isTouching(box) && box.bounceOff(gameobject5)){
    box.shapeColor="purple";
  }

  if (box.isTouching(gameobject2) || (box.isTouching(gameobject4) || (box.isTouching(gameobject5)){
    music.play();
  }

  if (gameobject3.isTouching(box)){
    box.shapeColor="white";
    box.velocityX=0;
    music.stop();
  }
  
  
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x <= object1.width/2+object2.width/2 
    && object2.x- object1.x <=  object1.width/2+object2.width/2 
    && object1.y-object2.y <= object1.height/2+object2.height/2
    && object2.y- object1.y <=  object1.height/2+object2.height/2 ){
      return true;
    }
    else{
      return false;
    }
}



function bounceOff(object1, object2){
  if (object1.x - object2.x <= object2.width/2 + object1.width/2
    && object2.x - object1.x <= object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y <= object2.height/2 + object1.height/2
  && object2.y - object1.y <= object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}

