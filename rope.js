class Rope {
    constructor(body1,point1){
        var options={
            bodyA:body1,
            pointB:point1,
            stiffness:1.2,
            length:400

        }

        this.rope=Constraint.create(options)
        World.add(world,this.rope)

        this.pointB=point1
        
    }


    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.pointB
        push()
        stroke("brown")
        strokeWeight(4)
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop()
 }


}
