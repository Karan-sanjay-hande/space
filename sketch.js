var iss, spaceship, spacebg, issShip;
var hasDocked = false;


function preload()
{
  iss=loadImage("Docking-undocking/iss.png");
  spacebg=loadImage("Docking-undocking/spacebg.jpg")
  spaceShipImg1=loadImage("Docking-undocking/spacecraft1.png")
  spaceShipImg2=loadImage("Docking-undocking/spacecraft2.png")
  spaceShipImg3=loadImage("Docking-undocking/spacecraft3.png")
  spaceShipImg4=loadImage("Docking-undocking/spacecraft4.png")
}


function setup() 
{
  createCanvas(800,400);
  
  issShip=createSprite(400, 200, 50, 50);
  issShip.addImage(iss)
  issShip.scale=0.5;

  spaceShip=createSprite(400, 250, 50, 50);
  spaceShip.addImage(spaceShipImg1);
  spaceShip.scale=0.1;

  
}

function draw() 
{
  background(spacebg);
  
  if(hasDocked!=true)
  {
    spaceShip.x= spaceShip.x +random(-1,1);

    if(keyCode === UP_ARROW)
    {
    spaceShip.y-=1
    spaceShip.addImage("up",spaceShipImg2);
    }

    if(keyCode === LEFT_ARROW)
    {
    spaceShip.x=spaceShip.x-1
    spaceShip.addImage("left",spaceShipImg3);
    
    }

    if(keyCode === RIGHT_ARROW)
    {
    spaceShip.x+=1
    spaceShip.addImage("right",spaceShipImg4);
    }
  } 
  if(spaceShip.y <= (issShip.y+30)&& spaceShip.x <= (issShip.x -20))
  {
    hasDocked= true;
   textSize(25);
   fill("white");
   text("DOCKING SUCCESSFUL", 200,300);
             
  }
  
  drawSprites();
}


