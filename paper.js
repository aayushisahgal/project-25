class Paper{
    constructor(x,y,width){
        
    var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    };

    this.body=Bodies.circle(x,y,width,options);
   
    this.image= loadImage("paper.png");
    this.width=60;
    World.add(world,this.body);
}

display(){
    var pos=this.body.position;
  
    push();
    translate(pos.x,pos.y);

    imageMode(CENTER);
    image(this.image,0, 0, this.width,60);  
     pop();
         
           
}
    }