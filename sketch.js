
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 

}



function setup() {
   createCanvas(400, 400);
 
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  
  monkey.scale = 0.1;

  //create Obstacle and Food Groups
  obstaclesGroup = createGroup();
  foodsGroup = createGroup();

  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
  
  
  ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
}


function draw() {
  //trex.debug = true;
  background("grey");
  textSize(20);
  fill("black");
  text("Score: "+ score, 30,50);  
  
  if (gameState===PLAY)
  score = score + Math.round(getFrameRate()/60);
  ground.velocityX = -(6 + 3*score/100);
  
  if((touches.lenght > 0 || keyDown("space")) && monkey.y >= -100) {
    jumpSound.play( )   
    monkey.velocityY = -12;
    touches = [];
    }
  
   //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  if(obstaclesGroup.isTouching(monkey)){
        //monkey.velocityY = -12;
}
  
  //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);

drawSprites();
 }

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
   //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}
   