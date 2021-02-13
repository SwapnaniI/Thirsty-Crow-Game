class OkayButton{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image1 = loadImage("ok-icon.png");
        this.image2 = loadImage("ok-icon2.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var number,number1;
        if(mouseX> pos.x){
            number = mouseX - pos.x
        }
        if(mouseX< pos.x){
           number = - mouseX + pos.x
        }
        if(mouseY> pos.y){
            number1 = mouseY - pos.y
        }
        if(mouseY< pos.y){
           number1 = - mouseY + pos.y
        }
        push();
        translate(this.body.position.x, this.body.position.y);
        if(number + number1   < 22){
            imageMode(CENTER);
            image(this.image2, 0, 0, this.width, this.height);
        }        
        else{
            imageMode(CENTER);
            image(this.image1, 0, 0, this.width, this.height);
        }
       
        pop();
      }
}