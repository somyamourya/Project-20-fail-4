var car,wall;
var speed,weight;

function setup(){

  createCanvas(1600,400);
  speed=random(50,90);
  weight=random(400,1500);
  car=createSprite(70,200,40,40);
  car.velocityX=speed;
  car.shapeColor=color("white");
  wall=createSprite(1300,200,60,height/2);
  wall.shapeColor=color("white");
}

function draw() {
  background(0);  
  
  if(wall.x-car.x < (car.width + wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
      wall.shapeColor=color(255,0,0);
    }
    if( deformation>100 && deformation<180)
    {
      car.shapeColor=color(230,230,0);
      wall.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
      wall.shapeColor=color(0,255,0);
    }


  }
  drawSprites();
}