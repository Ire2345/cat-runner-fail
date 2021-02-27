class Obstacle {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("puddle-liquid-vector-cartoon-style-isolated-illustration-white-background-puddle-liquid-vector-cartoon-style-isolated-129571237.jpg")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      translate(pos.x,pos.y)
      imageMode(CENTER);
      fill("blue");
      image(this.image,0,0, this.width, this.height);
    }
  };


