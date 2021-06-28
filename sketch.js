const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,object
function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world=engine.world;

  object = Bodies.rectangle(200,200,90,80);
  World.add(world, object);

}
function draw(){
  background(0);
  Engiine.update(engine);

  rect(object.position.x,object.position.y,90,80);
}