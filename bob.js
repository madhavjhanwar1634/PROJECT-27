class BOB{
    constructor(x,y,radius ){
        var Goption={
            restitution:1.2,
           friction:0.3
        
        }
        this.body=Bodies.circle(x,y,radius,Goption)
        this.radius=radius;
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
    pop()
        }

        }