class Pig extends BaseClass{
    constructor(x,y){
       super(x,y,50,50)
       this.image=loadImage("spriteimages/enemy.png")  
    }
    display(){
       super.display();
    }
}