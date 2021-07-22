var astronaut,bga;
var foodImg,brushImg,sleep,bathImg,gymImg,bg,drinkImg;


function preload(){

  foodImg = loadAnimation ("eat.png ","1111.png")
  BathImg = loadAnimation("bath1.png","bath2.png")
  brushImg = loadAnimation("brush.png")
  bg  = loadImage("iss.png")
  moveImg = loadAnimation("move.png","move1.png")
  gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  sleep = loadImage ("sleep.png")
  drinkImg = loadAnimation("drink1.png","drink2.png")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  bga = createSprite (400,200,10,10)
  bga.addImage("background",bg)
  bga.scale = 0.2
  
  
astronaut = createSprite(400,200)
astronaut.addImage("sleeping",sleep)
astronaut.scale = 0.1


}












function draw() {
  background(0);



if(keyDown("RIGHT_ARROW")){
astronaut.addAnimation("brushing",brushImg)
astronaut.changeAnimation("brushing")
astronaut.x = 350
astronaut.velocityY = 0
astronaut.velocityx = 0
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bath",BathImg)
  astronaut.changeAnimation("bath")
  astronaut.x = 350
  astronaut.velocityY = 0
  astronaut.velocityx = 0
  }
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("gym",gymImg)
    astronaut.changeAnimation("gym")
    astronaut.x = 350
    astronaut.velocityY = 0
    astronaut.velocityx = 0
    }
    if(keyDown("DOWN_ARROW")){
      astronaut.addAnimation("drink",drinkImg)
      astronaut.changeAnimation("drink")
      astronaut.x = 350
      astronaut.velocityY = 0
      astronaut.velocityx = 0
      }
    
      if(keyDown("M")){
        astronaut.addAnimation("move",moveImg)
        astronaut.changeAnimation("move")
        astronaut.x = 350
        astronaut.velocityY = 0
        astronaut.velocityx = 0
        }


        if(keyDown("F")){
          astronaut.addAnimation("food",foodImg)
          astronaut.changeAnimation("food")
          astronaut.x = 350
          astronaut.velocityY = 0
          astronaut.velocityx = 0
          }
          fill("red")
          new
          Text ("press arrow key and m f",200,400,100,200)
           
             drawSprites();



   }
        