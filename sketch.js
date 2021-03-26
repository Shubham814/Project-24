
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;

var bin1,bin2,bin3;



function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper1  = new paper(200,height-200,40);
   ground1 = new ground(width/2,height-100,width,10);

   bin1 = new bin(1100,height-120,300,20);
   bin2 = new bin(960,height-160,20,100);
   bin3 = new bin(1240,height-160,20,100);
   
  
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
//display all bodies
    paper1.display();
 	ground1.display();
 	bin1.display();
 	bin2.display();
 	bin3.display();

//make ball bounce
	keyPressed();

  drawSprites();
}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:10,y:-20})
	};

};



