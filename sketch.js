
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,bin1,bin2,bin3,Youwin;

function preload()
{
	
	Youwin = loadSound("youwin.mp3"); 
}

function setup() {
	createCanvas(2000,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,670,50);
	ground = new Ground(1000,700,2000,50);
	bin1 = new Dustbin(1380,605,20,100);
	bin2 = new Dustbin(1485,665,200,20);
	bin3 = new Dustbin(1590,605,20,100);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
	paper.display();
	ground.display(); 
	bin1.display(); 
	bin3.display();
	bin2.display();
	
	
	//console.log(paper.body.position);
	
	
	
	if(paper.body.position.x >= 1415 && paper.body.position.y >= 630) {
		Youwin.play();
		noLoop();
	
	} 
	

  drawSprites();

}

function keyPressed () {

if(keyDown(UP_ARROW)) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:205,y:-205});
	

}


}




	
	

