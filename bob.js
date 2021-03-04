class Bob{
    constructor(x,y,radius){
    var options ={
        'restitution' : 0.3,
        'friction' : 0.5,
        'density' : 1.0
    }
    this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,option);
    World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    strokeWeight(2);
    fill("pink");
    rect(0, 0, this.width, this.height);
    pop();
  
    }
}