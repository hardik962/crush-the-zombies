class stone1
{
  constructor(x, y,r) 
  {
     
    
    this.body = Bodies. circle(x, y,  r  );
    this.r = r;
     
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    ellipse(pos.x,pos.y, this.r);
    pop();
  }
}
