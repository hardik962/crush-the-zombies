const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge
var wall,wall2
 var wall_con
 var stones=[]
 
function setup() {
  createCanvas( 1454,720);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  rectMode(CENTER);
  ellipseMode(RADIUS)
 wall=new base (1439,300,400,200)
  wall2=new base (5,300,400,200)
  bridge= new Bridge (18,{ x:5,y:5});
  ground= new base(754,700,1510,20)

  Matter.Composite.add(bridge.body, wall )
     wall1= new link (bridge,wall)

    rectMode(CENTER);
  ellipseMode(RADIUS)
}

function draw() {
  background(51);
  Engine.update(engine);
wall.show();
wall2.show();
 ground.show();
  bridge.show()

 for(var i=0;i<=8; i++){
  var x=random( width/2 -200, width/2+300)
  var y=random (-10,140)
  var  stone=new stone1(x,y,80 )
stones.push(stone)
showStones(i,stones)
 }
 

}
function showStones (index,stones){
stones[index].show();
}
