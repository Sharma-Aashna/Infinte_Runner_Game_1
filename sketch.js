var car, car2, carImage, car2Image, bgImage, bg;
function preload(){
carImage = loadImage ("images/car.png");
car2Image = loadImage ("images/car2.png");
bgImage = loadImage ("images/bg.jpg");
}

function setup() {
    createCanvas(600,400)
    bg = createSprite(0,0,600,400);
 bg.addImage(bgImage)
 bg.velocityX = 8
 car = createSprite(80,random(150,300),50,50);
 car.addImage(carImage);
 car.scale = 0.1
 car2 = createSprite(-50,random(150,300),50,50);
 car2.addImage(car2Image);
 car2.scale = 0.1
 //bg.scale = 0.5
}
 
function draw() {
 background("black");
 if (bg.x>600){
    bg.x = 300
 }
 drawSprites();
}