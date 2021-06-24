class Paper{
    constructor(x,y,r,imgr){
        this.x=x;
        this.y=y;
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.imgr = imgr;
        
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CORNERS);
        image(this.image, this.x, this.y, this.imgr,this.imgr);
        pop();
}
}