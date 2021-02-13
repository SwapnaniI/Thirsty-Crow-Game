class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        if(gameState === "play"){
        this.sling.bodyA = null;
        }
    }
    attach(body){
        if(gameState === "play"){
            this.sling.bodyA = body;
        }
        
    }

    display(){        
        push()
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#f4f425")
            strokeWeight(5)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
  

            
            
        }
        pop();
    }
    
    
}