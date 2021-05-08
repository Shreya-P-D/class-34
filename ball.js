class Ball {
    constructor(x,y,r){
        var options={
            frictionAir:0.005,
            density:1
        }

        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)

        this.r= r
        
    }


    display(){

        var pos=this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)

        stroke("black")
        strokeWeight(3)
        ellipseMode(CENTER)
        fill("black")
        ellipse(0,0,this.r,this.r)
        pop()
    }

}



