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
 wall=new base (1439,300,800,200, "#8d6e63", true)
  wall2=new base (5,300,800,200, "#8d6e63", true)
  bridge= new Bridge (15,{ x:10,y:10}, "#8d6e63", true);
  ground= new base(754,700,1510,20, "#8d6e63", true)

  Matter.Composite.add(bridge.body, wall )
     wall1= new link (bridge,wall)

    rectMode(CENTER);
  ellipseMode(RADIUS)
  for(var i=0;i<=8; i++){
    var x=random(1454,720)
    var y=random (-10,140)
  var  stone=new stone1(x,y,80)
  stones.push(stone)
}

}
function draw() {
  background(51);
  Engine.update(engine);
  wall.show();
  wall2.show();
  bridge.show()
   ground.show();
    

 
//showStones(i,stones)
 
 
 for (var stone of stones) {
  stone.show();
}
}
//function showStones (index,stones){
  //stones[index].show();
  
