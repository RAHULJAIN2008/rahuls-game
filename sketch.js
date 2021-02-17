var mario,ground,gun,bullet,backgroundimg,marioimg,gunimg,bulletimg;
var invisibleground;


function preload(){
marioimg = loadAnimation("mario.gif");
gunimg = loadAnimation("gun.gif");
bulletimg = loadImage("bullet.jpg");
backgroundimg = loadImage("background.jpg");

}



function setup() {
  createCanvas(1500,900);
ground = createSprite(400,150,1500,900);
ground.addImage("background",backgroundimg);
mario = createSprite(70, 200, 50, 50);
mario.addAnimation("mario",marioimg);
invisibleground = createSprite(80,350,50,50);
invisibleground.visible=false;
}


function draw() {
  background(255,255,255); 
  if(keyDown("space")&& mario.y >= 100) {
    mario.velocityY = -12;
  }


//add gravity
mario.velocityY = mario.velocityY + 0.8 
mario.collide(invisibleground);
drawSprites();

}