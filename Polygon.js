class Polygon{
    constructor (x,y){
    var options = {
    "restitution":0.2,
    "friction":0.8
    }
    this.Body = Bodies.rectangle(x,y,50,50,options)
    this.width = 50;
    this.height = 50;
    this.image = loadImage("polygon.png")
    World.add(world,this.Body)
    }
    display(){
    var pos = this.Body.position
    var angle = this.Body.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
    }