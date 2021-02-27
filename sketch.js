
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score=0;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	cat1= new Cat(400,200,30,30)
	ground1 = new Ground(600,400,1200,50)
	obstacle1 = new Obstacle(700,300,70,70)

	

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("blue")
  textSize(20)
  text("Score: "+ score,700,20)

  


cat1.display();
ground1.display();
obstacle1.display();


  drawSprites();
 
}




















