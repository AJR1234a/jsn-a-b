//Create variables here
var dog,happydog,database,food,foodstock
var fedTime,lastFed,foodObj;
button1,button2;

function preload()
{
  //load images here
  dogImg= loadImage("images/Dog.png");
  happydogImg = loadImage("images/happydog.png");
  milkImg = loadImage("images/Milk.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,30,30);
  dog = addImage(dogImg,dgo);
  happydog=addImage(happydogImg,doghappy);
var foodstock=database.ref("food");
foodstock.on("value",readstock);

;
}


function draw() {  
background(46,139,87)
  readstock();
  writeStock
  //add styles here

fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
lastFed=data.val();
})

}
drawSprites();
textSize(40);
fill("red");
text("NOTE:PRESS UPARROW KEY TO FEED CHINTU MILK!!")


function readstock(data){
food=data.val();


}
function writeStock(x){
database.ref('/').update({
  Food:x
})

}

