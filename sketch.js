
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper,trashcan;
var bin1,bin2,bin3;

  

function preload(){

	trashcan=loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	//dustbinObj.addImage(trashcan);

	

	paper=new Paper(500,300,25);
	
 

	Engine.run(engine);
  

}

function draw() {
  rectMode(CENTER);
  background(230);

  
  
  keypressed();
  paper.display();
  groundObject.display();
  dustbinObj.display();
 

}

function keypressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce( paper.body,  paper.body.position,{
			x: 30,
			y : -13
		});
	}

	
}

