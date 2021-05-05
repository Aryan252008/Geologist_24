
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var rubber;
var stone;
var hammer;
var iron;
var sand1,sand2,sand3,sand4,sand5,sand6;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rubber = new Rubber(200,100,50);
	sand1 = new Sand(500,50,4);
	sand2 = new Sand(520,55,4);
	sand3 = new Sand(540,60,4);
	sand4 = new Sand(560,65,4);
	sand5 = new Sand(580,70,4);
	sand6 = new Sand(600,75,4);
	stone = new Stone(200,300,100,100);
	ground = new Ground(400,690,800,20);
	hammer = new Hammer(400,350,200,50);
	iron = new Iron(250,400,150,50); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);

  rubber.display();
	sand1.display(); 
	sand2.display(); 
	sand3.display(); 
	sand4.display(); 
	sand5.display(); 
    sand6.display(); 
    stone.display();
	ground.display();
	hammer.display();
	iron.display();


  
  
 
}



