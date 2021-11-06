//Estados del Juego
var PLAY=1;
var END=0;
var gameState=1;

var Sabrinas, oso, nanara, bob;
var sabrinasImg, osoImg, nanaraImg, bobImg;
var restart, gameOver, score;
var restartImg, gameOverImg;
var ganaste, ganasteImg;


function preload() {
  
  sabrinasImg = loadImage("Sabrinas!.png");
  osoImg = loadImage("pandita.png");
  nanaraImg = loadImage("Ñañarafea.png");
  bobImg = loadImage("B.O.B..png");
  gameOverImg = loadImage("gameover.png");
  restartImg = loadImage("reiniciar.png");
  ganasteImg = loadImage("ganaste.png");
  
}



function setup() {
  createCanvas(800, 800);
  
  bob = createSprite(40,780, 10,10);
  bob.addImage(bobImg);
  bob.scale=0.07;
  
  bob.setCollider("rectangle",0,0,1000,1000);
  //bob.debug = true;
  
  score=0;
  
  nanarasGroup=createGroup();
  ososGroup=createGroup();
  
  sabrinas = createSprite(750,50,10,10);
  sabrinas.addImage(sabrinasImg);
  sabrinas.scale = 0.3;
  
  gameOver = createSprite(400,400,30,30);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(400,500,100,100);
  restart.addImage(restartImg);
  restart.scale = 0.5;
  
  ganaste = createSprite(400,400,30,30);
  ganaste.addImage(ganasteImg);
  ganaste.scale = 0.7;
  
}

function draw() {
  
  background("white");
  
  bob.velocityY = 0;
  bob.velocityX = 0;
  
  
  
   if(gameState===PLAY){
  
     gameOver.visible = false;
     restart.visible = false;
     ganaste.visible = false;
     
    spawnnanaras();
    spawnosos();
    
   if(keyDown("w")&&bob.y>0){
      bob.velocityY = -6;
      }
     
      if(keyDown("s")&&bob.y<800){
      bob.velocityY = 6;
      }
     
      if(keyDown("a")&&bob.x>0){
      bob.velocityX = -6;
      }
     
      if(keyDown("d")&&bob.x<800){
      bob.velocityX = 6;
      }  
     
    if(ososGroup.isTouching(bob)){
      ososGroup.destroyEach();
      score = score+2;
    }
    else
    {
      if(nanarasGroup.isTouching(bob)||bob.isTouching(sabrinas)){
        gameState=END;
        
        ososGroup.destroyEach();
        nanarasGroup.destroyEach();
        ososGroup.setVelocityXEach(0);
        nanarasGroup.setVelocityXEach(0);
        
        bob.x=40;
        bob.y=780;
        
        //pon las cosas de gameover aqui
        
        gameOver.visible = true;
     restart.visible = true;
     
       if(mousePressedOver(restart)) {
      reset();
    }
      }
    }
  }
 
  
  drawSprites();
  
  textSize(25);
  text("Puntuación : "+ score,250,50);
}

function spawnnanaras() {
  if(World.frameCount%80 ===0){
    position = Math.round(random(1,4));
    nanara=createSprite(400,200,20,20);
    
    if(position==1)
    {
    nanara.x=600;
    nanara.velocityX=-(7+score/4);
       nanara.y=Math.round(random(30,760));
    }
    else
    {
      if(position==2){
      nanara.x=0;
      nanara.velocityX= (7+score/6);
       nanara.y=Math.round(random(30,760));  
      }
    }
    
      if(position==3)
    {
    nanara.y=600;
    nanara.velocityY=-(7+score/4);
    nanara.x=Math.round(random(30,760));
    }
    else
    {
      if(position==4){
      nanara.y=0;
     nanara.velocityY= (7+score/6);
        nanara.x=Math.round(random(30,760));
      }
    }
    
    nanara.addImage(nanaraImg);
    nanara.scale=0.1;
   
    
  nanara.setLifetime=200;
    
    nanarasGroup.add(nanara);
}
}


function spawnosos() {
  if(World.frameCount%80 ===0){
    position = Math.round(random(1,4));
    oso=createSprite(400,200,20,20);
    
    if(position==1)
    {
    oso.x=600;
    oso.velocityX=-(7+score/4);
       oso.y=Math.round(random(30,760));
    }
    else
    {
      if(position==2){
      oso.x=0;
      oso.velocityX= (7+score/6);
       oso.y=Math.round(random(30,760));  
      }
    }
    
      if(position==3)
    {
    oso.y=600;
    oso.velocityY=-(7+score/4);
    oso.x=Math.round(random(30,760));
    }
    else
    {
      if(position==4){
      oso.y=0;
      oso.velocityY= (7+score/6);
        oso.x=Math.round(random(30,760));
      }
    }
    
    oso.addImage(osoImg);
    oso.scale=0.2;
   
    
    oso.setLifetime=200;
    
    ososGroup.add(oso);
}
}

function reset() {
  bob.x = 40;
  bob.y = 780;
  
   ososGroup.destroyEach();
   nanarasGroup.destroyEach();
  
  gameState = PLAY;
}
