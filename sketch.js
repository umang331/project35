//Create variables here
var dog,happyDog;
var foodS,foodStock;
var database;

function preload()
{
  //load images here
  dogi = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog =createSprite(250,300);
  dog.addImage(dogi);
  dog.scale = 0.2;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }

  drawSprites();
  //add styles here
  fill('white');
  text("food: "+foodS,250,200);
  text("Note: press UP_ARROW key to feed drago milk",100,50)

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if( x <= 0){
    x=0
  }else{
    x  = x-1
  }
  database.ref('/').update({food:x})

}


