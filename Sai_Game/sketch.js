function preload(){
  boyImg= loadAnimation('Images/1.png','Images/2.png','Images/3.png','Images/4.png','Images/5.png','Images/6.png'
  ,'Images/7.png','Images/8.png','Images/9.png','Images/10.png','Images/11.png','Images/12.png','Images/13.png'
  ,'Images/14.png','Images/15.png','Images/16.png')
}

function setup()
{
  createCanvas(400,400);
  boy=createSprite(200,200,10,10)
  boy.addAnimation("boyrunning",boyImg)


}

function draw() 
{
  background(51);
  drawSprites();
 
}

