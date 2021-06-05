var buildings,buildingsImage;
var covid19,covid29,covid39;
var trump;


function preload(){
  buildingsImage=loadImage('boombed building.jpg')
  covid19Image=loadImage('covid-19-removebg-preview.png')
   covid29Image=loadImage('covid-29-removebg-preview.png')
     covid39Image=loadImage('covid39-removebg-preview.png')
president=loadAnimation('trump1-removebg-preview.png','trump_2-removebg-preview.png','trump_3-removebg-preview.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  trump=createSprite(70,500,50,50)
    trump.addAnimation('walking',president)


    sprite1=createSprite(0,height-100,width,20)
    sprite2=createSprite(0,height-650,width,20)
    sprite1.visible=false;
    sprite2.visible=false;
}

function draw() {
  background('white');
  //edges=createEdgeSprite()
if(keyWentDown('w')){
  trump.setVelocity(0,-3)
}
if(keyWentUp('w')){
  trump.setVelocity(0,0)
}
if(keyWentDown('s')){
  trump.setVelocity(0,3)
}
if(keyWentUp('s')){
  trump.setVelocity(0,0)
}
trump.collide(sprite1)
trump.collide(sprite2)
// trump.collide(edges)
  //trump.y=mouseY
   
   
    
  


  if(frameCount===2||frameCount%60/1.1===0){

  buildings=createSprite(width+1126,height/2,100,10)
  buildings.scale=width/height+1-0.25
  buildings.addImage("destroyed",buildingsImage)
    //buildings.visible=false
  buildings.setVelocity(-4-frameCount/100000,0)
  //  buildings.lifetime(width/height)/2
  trump.depth=buildings.depth
  trump.depth=trump.depth+1
  }
  if(frameCount%150===0&&frameCount<1000&&frameCount!=0){
    covid19=createSprite(width-100,random(width-200,200),20,20)
  covid19.addImage(covid19Image)
  covid19.setVelocity(random(-3,-9),random(-0.1,0.1))
    covid19.scale=(random(0.1,0.5))
    covid19.depth=buildings.depth
    covid19.depth=covid19.depth+1
    covid19.lifetime=(width/height)/2
  }
   if(frameCount%100===0&&frameCount<2000&&frameCount>1000){
    covid29=createSprite(width-100,random(width-200,200),20,20)
  covid29.addImage(covid29Image)
  covid29.setVelocity(random(-6,-15),random(-0.1,0.1))
    covid29.scale=(random(0.1,0.5))
    covid29.depth=buildings.depth
    covid29.depth=covid29.depth+1
    covid29.lifetime=(width/height)/2
  }
  
    if(frameCount%75===0&&frameCount>2000){
    covid39=createSprite(width-100,random(width-200,200),20,20)
  covid39.addImage(covid39Image)
  covid39.setVelocity(random(-6,-15),random(-0.1,0.1))
    covid39.scale=(random(0.1,0.3))
    covid39.depth=buildings.depth
    covid39.depth=covid39.depth+1
    covid39.lifetime=(width/height)/2
  }
  
 //console.log(trump.y)
  drawSprites()

}