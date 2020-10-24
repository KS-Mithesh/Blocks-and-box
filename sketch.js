const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var box1;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world  = engine.world;

  box1 = new box(100,50,50,100);
  box2 = new box(200,150,50,120);

  ground = new ground(0,370,800,50);
  
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  box1.display();
  box2.display();
  ground.display();
  drawSprites();
}