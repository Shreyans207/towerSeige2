const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon , polygonImage , slingshot;
var ground , platform1 , platform2;

function preload(){
    polygonImage = loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(2000,1000);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1000,800,2000,20);
    platform1 = new Ground(700,700,400,20);
    platform2 = new Ground(1100,500,300,20);

    polygon = Bodies.circle(200,600,60);
    World.add(world,polygon)

    slingshot = new SlingShot(this.polygon,{x:200,y:600});

    //Platform1
    //4th layer
    
    fill("blue")
    box1 = new Box(710,780,50,60); 
    box2 = new Box(740,780,50,60);
    box3 = new Box(770,780,50,60);
    box4 = new Box(800,780,50,60);
    box5 = new Box(830,780,50,60);
    box6 = new Box(860,780,50,60);
    box7 = new Box(890,780,50,60);
     //3rd layer
     fill("pink")
    box8 = new Box(740,740,50,60);
    box9 = new Box(770,740,50,60);
    box10 = new Box(800,740,50,60);
    box11 = new Box(830,740,50,60);
    box12 = new Box(860,740,50,60);
    //2nd layer
    fill("green")
    box13 = new Box(770,700,50,60);
    box14 = new Box(800,700,50,60);
    box15 = new Box(830,700,50,60);
    //1st layer
    fill("yellow")
    box16 = new Box(800,660,50,60);

    //Platform2
     //3rd layer
     fill("pink")
     box17 = new Box(1180,460,50,60);
     box18 = new Box(1240,460,50,60);
     box19 = new Box(1300,460,50,60);
     box20 = new Box(1360,460,50,60);
     box21 = new Box(1420,460,50,60);
     //2nd layer
     fill("green")
     box22 = new Box(1240,420,50,60);
     box23 = new Box(1300,420,50,60);
     box24 = new Box(1360,420,50,60);
     //1st layer
     fill("yellow")
     box25 = new Box(1300,380,50,60);
}

function draw(){
    background("skyBlue");

    Engine.update(engine);

    textSize(20);
    fill("black");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,50);


    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,30,30)

    ground.display();
    platform1.display();
    platform2.display();

    polygon.display();
    slingshot.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box5.display();
    box5.display();
    box6.display();
    box7.display();
    
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    box13.display();
    box14.display();
    box15.display();
   
    box16.display();
   
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
   
    box22.display();
    box23.display();
    box24.display();
   
    box25.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
 }
 
 function mouseReleased(){
     slingshot.fly();
 }
function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(polygon);
    }
}