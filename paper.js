class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        restitution: 0.3,
        friction:0.5,
        density:1.5,
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      circle(pos.x,pos.y,this.radius);
    }
  };
  