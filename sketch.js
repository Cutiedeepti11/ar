
var wall1, wall2 ;
function setup() {
  createCanvas(400, 400);
  wall1=createSprite(200,200,30,30);
  wall2=createSprite(300,200,50,50);
  wall1.shapeColor="red";
	wall2.shapeColor="red";
}


function draw() {
  background(0);
	wall2.x=mouseX;
	wall2.y=mouseY;
  console.log(wall2.x-wall1.x)
  console.log(wall1.width/2+wall2.width/2);
  if(wall1.x-wall2.x<wall1.width/2+wall2.width/2&&wall2.x-wall1.x<wall1.width/2+wall2.width/2 )
  {
	  wall1.shapeColor="green";
	  wall2.shapeColor="green";
  }
  else{
	wall1.shapeColor="red";
	  wall2.shapeColor="red";
  }
  drawSprites();
 
}