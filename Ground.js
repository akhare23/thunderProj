class Ground{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(500,700,1000,10, options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,1000,10);
       
    }
}