class Box {
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            friction:1.0,
            density:0.5
        }

        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)

        this.width=w
        this.height=h
    }

    display(){

        var pos=this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)

        stroke("black")
        strokeWeight(3)
        rectMode(CENTER)
        fill("grey")
        rect(0,0,this.width,this.height)
        fill("white")
        rect(0,0,this.width/4,this.height/4)
        pop()



    }

}



