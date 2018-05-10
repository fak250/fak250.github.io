var spr;
var decoy;
var real;
var tasselimage;
var sprImage;
var youloseimage;
var youwinimage; 


function setup() {
	createCanvas(windowWidth, windowHeight);
	
	spr = createSprite(width / 2, height /2, 20, 20);
	decoy = createSprite(width * 0.25, height /2, 20, 20);
	real = createSprite(width * 0.75, height /2, 20, 20);
//	youwinspr = createSprite(width / 2, height /2);
//	youlosespr = createSprite(width / 2, height /2);
	
	tasselimage= loadImage("tassel.png");
	sprImage= loadImage("MMsprite.png");
	youloseimage= loadImage("youlose.jpg");
	youwinimage= loadImage("youwin.jpg");
	
	spr.addImage("normal",sprImage);
	real.addImage("normal",tasselimage);
	decoy.addImage("normal",tasselimage);

}


function draw() {
	
	spr.position.x = mouseX;
  	spr.position.y = mouseY;
	background(50);
	fill(255);
	noStroke();
	textAlign(CENTER, CENTER);
//	text("use arrow keys, or SPACE to stop",
//		width / 2, height * 0.67);
	drawSprites();
	
	if(spr.overlap(real))
		image(youloseimage, 0, 0, windowWidth, windowHeight);
	else if(spr.overlap(decoy))
    image(youwinimage, 0, 0, windowWidth, windowHeight);
	
//	if (spr.position.x==real.position.x)
//		image(youloseimage, 0, 0);
//	if (spr.position.x==decoy.position.x)
//		image(youwinimage, 0, 0);
	
}


//function keyPressed() {
//	if (keyCode == RIGHT_ARROW) {
//		spr.setSpeed(1.5, 0);
//	} else if (keyCode == DOWN_ARROW) {
//		spr.setSpeed(1.5, 90);
//	} else if (keyCode == LEFT_ARROW) {
//		spr.setSpeed(1.5, 180);
//	} else if (keyCode == UP_ARROW) {
//		spr.setSpeed(1.5, 270);
//	} else if (key == ' ') {
//		spr.setSpeed(0, 0);
//	}
//	return false;
//}

