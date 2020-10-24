class box{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{restitution:1});
        this.width = width;this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
    }

}