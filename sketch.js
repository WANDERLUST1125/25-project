
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new ground(width/2, 650, width, 10  );



	box1=new box (600,640,200,20);
	

	box2=new box(500,600,20,100);
	

	box3=new box(700,600,20,100);
	


	
	
 
	ball1=new PaperBall(200,600,20);
	
	



	
console.log(ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
 drawSprites();
 ellipseMode(RADIUS);
 box1.display();
 box2.display();
 box3.display();
 ball1.display();
ground1.display();

  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	 
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:200,y:-200});
	 }
   }

