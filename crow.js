class Crow{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.2,
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("crow.png");
        this.image2 = loadImage("crowTilt.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      tilt(){
        push();
        translate(this.body.position.x , this.body.position.y);
        imageMode(CENTER);
        image(this.image2, -20, 10, this.width, this.height);
        pop();
      }
}