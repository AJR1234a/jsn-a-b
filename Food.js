class Food {
    constructor(foodStock,lastFed){

    }

   

   
  
  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    if (this.foodStock!=0){

    for(var i=0;i<this.foodStock ; i++){
            if(i%10==0){
                x=80;
                y= y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
          }
        }
  }


bedroom(){




  background(bedroom,550,500);
}
  garden(){
background(garden,550,500);


  }
}
washroom(){
background(washroom,550,550);


}

currentTime=hour();
if(currentTime==(lastfed+1)){
  update("Playing");
  foodObj.garden();
}
else if(currentTime==(lastfed+2)){
  update("Sleeping");
  foodObj.bedroom();
}
else if(currentTime==(lastfed+2) && currenTime<=(lastFed+4)) {
  update("Bathing");
  foodObj.washroom();
}else{
  update("Hungry");
update(){

readState-database.ref('gamestate');
readState.on("value",function(data){

  gameState=data.val();
});
}

if  (gameState!="Hungry"){
feed.hide();;
dog.remove();
addFood.hide();

}
else{
feed.show();
addFood.show();
dog.addImage(dog);
}

function update(state){
database.ref('/').update({
  gameState:state
});
}
}






















