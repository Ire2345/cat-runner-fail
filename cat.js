class Cat{
constructor(x,y){

    var options = {
   'friction':1
    }


this.body = Bodies.rectangle(x,y,50,50,options);
this.width=50;
this.height=50;
this.image = loadImage("s-l400.jpg");
World.add(world, this.body);


};

display(){

var pos = this.body.position;


  
  



push();
translate(pos.x,pos.y);
strokeWeight(3);
stroke('blue')
fill('orange')
imageMode(CENTER)
image(this.image,0,0,this.width, this.height);
pop();











}















































}