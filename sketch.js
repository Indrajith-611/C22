//matter.js
//Engine, World,Bodies - matter.js
//Name Spacing

const Engine = Matter.Engine;     //create the phy engine
const World = Matter.World;       //create the world for the physics engine
const Bodies = Matter.Bodies;     //create the physical bodies inside the world

/* 1. Create the physics Engine inside a vble called 'engine' using 'Engine.create()'
2. Create a world for the physics Engine inside a vble called 'world' using 'engine.world'
3. Create a rectanguler or circular body using 'Bodies.rectangle()/Bodies.circle()' inside a vble
4. Add the bodies to the world using 'World.add(world,objectname)'
5. Give options to the bodies if necessary
6. Inside the function draw, represent the Bodies.rectangle or Bodies.circle using 'rect' or 'ellipse'
7. Update the physics Engine using 'Engine.update(engine)'*/
var engine, world,box;
var ball;

function setup() {
  createCanvas(400,400);

  //1
  engine = Engine.create();

  //2
  world = engine.world;

  //make the object static (not making it move)
  var boxOptions = {
    isStatic: true
  }

  //3
  //Bodies.rectangle(x,y,width,height);
  box = Bodies.rectangle(200,380,50,50,boxOptions);

var ballOptions={
  //to make the ball bounce using the command called restitution
restitution:1
}  
  //Bodies.circle(x,y,radius);
  ball=Bodies.circle(200,100,15,ballOptions);
  
  //4 - adding box inside the worl
  World.add(world,box);
World.add(world,ball);

//static = does not move

}

function draw() {
  background(0);  

  //to update the phy engine
  Engine.update(engine);
  rectMode(CENTER);

  //to make the 'rect' take the x and y positions of the box 
  rect(box.position.x,box.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30)
  drawSprites();
}

//ball(sprite) - ball.x = 200 / ball.y
//object(phy engine) -  object.position.x / object.position.y