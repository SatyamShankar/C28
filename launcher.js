class launcher{

constructor(bodyA,pointB){

var options = {


bodyA:bodyA,
pointB:pointB,

stiffness : 0.005,

length : 10
}
this.pointB = pointB

this.sling = Constraint.create(options);


World.add(world.this.sling);





}

fly(){

this.sling.bodyA = null;

}


display(){

if(this.sling.bodyA){

    pointA = this.sling.bodyA.position;
    pointB = this.pointB

line(bodyA.x,bodyA.y,pointB.x,pointB.y)


}



}


}