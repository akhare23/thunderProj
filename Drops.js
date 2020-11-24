class Drops{
    constructor(x,y){
        var options = {
            restitution: 0.01,
            friction: 0.1
        }
        this.body = Bodies.circle(x,y,1,options);
        this.r = 1;
        this.color = color("blue")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        fill("blue");
        stroke("blue");
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
        

    }
    update(){
        if(this.body.position.y>630){
            Matter.Body.setPosition(this.body,{x:random(0,1000), y:random(0,600)});
        }
    }
}
