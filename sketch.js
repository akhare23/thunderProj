const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine, world;
var drops;
var th1, th2, th3, th4;
var thunderGroup;

function preload(){
    th1 = loadImage("images/thunderbolt/1.png");
    th2 = loadImage("images/thunderbolt/2.png");
    th3 = loadImage("images/thunderbolt/3.png");
    th4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   var canvas = createCanvas(1000,1000);
    drops = [];
    
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(500,575);
    ground = new Ground();
    
    for(var i = 0; i<100; i++){
        drops.push(new Drops(random(0,1000), random(0,600)))
    }
    thunderGroup = createGroup()
}

function draw(){
    background(0);
    Engine.update(engine);

    umbrella.display();
    ground.display();

    for(var j = 0;j<drops.length;j++){
        drops[j].display();
        drops[j].update();
    }
    spawnThunder();
    drawSprites();
}  

function spawnThunder(){
    if(frameCount%80===0){
        var thunder = createSprite(Math.round(random(200,700)),50,100,100);
        console.log(thunder.x);

        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: thunder.addImage(th1);
                    break;
            case 2: thunder.addImage(th2);
                    break;
            case 3: thunder.addImage(th3);
                    break;
            case 4: thunder.addImage(th4);
                    break;
            default: break;
        }
        thunder.lifetime = 10;
        thunderGroup.add(thunder);
        
    }
}


