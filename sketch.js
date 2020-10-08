
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var bin;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);

	bin = new dustBin(600,650,200,20);
	bin2 = new dustBin(700,600,20,80);
	bin3 = new dustBin(500,600,20,80);
	
	paper = new Paper(100,635,25);
}


function draw() {
  background(0);
  Engine.update(engine);

  ground.display();

  bin.display();
  bin2.display();
  bin3.display();

  paper.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

      Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}



