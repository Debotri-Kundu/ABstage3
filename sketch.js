const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var myworld,myengine,ground,box,box1,box2,box3,box4,pig,pig1,log,log1,log2,log3,log4,bird,backgroundImg,platform,slingshot;
function preload(){
  backgroundImg=loadImage("spriteimages/bg.png")
}

function setup(){
  createCanvas(1200,600)
  myengine=Engine.create();
  myworld=myengine.world
  
   ground=new Ground(600,580,1200,40);
  box=new Box(900,530,80,80);
  box1=new Box(700,530,80,80);
  box2=new Box(900,450,80,80);
  box3=new Box(700,450,80,80);
  box4=new Box(800,350,80,80);
  pig=new Pig(800,530);
  pig1=new Pig(800,450);
  log=new Log(800,500,300,PI/2)
  log1=new Log(800,390,300,PI/2)
  log2=new Log(760,350,160,PI/6)
  log3=new Log(840,350,160,-PI/6)
 // log4=new Log(200,250,100,PI)
  bird=new Bird(300,150)
  platform=new Ground(150,410,300,300) 
  slingshot=new Slingshot(bird.body,{x:200,y:100})
  
}
function draw(){
  background(backgroundImg)
  Engine.update(myengine)
   ground.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  pig.display();
  pig1.display();
  log.display();
  log1.display();
  log2.display();
  log3.display();
 // log4.display();
  bird.display(); 
  platform.display();
  slingshot.display();
}
  function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
    slingshot.fly();
  }
