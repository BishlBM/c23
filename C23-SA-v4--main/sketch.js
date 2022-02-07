const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body
var engine,world
var ball,ground;
function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
  engine= Engine.create();
  world=engine.world;
  var ball_options ={
   restitution:1
  };
   ball=Bodies.circle(200,200,20,ball_options);
   World.add(world,ball);
   var ground_options ={
    isStatic: true
  };
   ground=Bodies.rectangle(200,390,400,20,ground_options);
   World.add(world,ground);

  
   
   
  
  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  }


function draw() 
{
  background("Black");
  Engine.update(engine);
  ellipse(ball.position.x,ground.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 


  
  
}

