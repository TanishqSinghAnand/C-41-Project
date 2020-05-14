var car1 , car2 ;
var Rand2 ;
let back , cI ,c2 ;
let gameState = 1 ;
let c1Distance = 0; 
let c2Distance = 0;
var no = [ 1 , 2];
var car1Rank = "";
let car2Rank = "";
let tsa = "Conratulations!! you came ";
function preload(){
	back = loadImage("track.jpg");
	c1 = loadImage("car4.png");
	c2 = loadImage("car1.png");

}
function setup(){
	var canvas = createCanvas(window.innerWidth,window.innerHeight);
	car1 =createSprite(window.innerWidth/4,window.innerHeight -50,50,50);
	car1.addImage(c1);
	car2 = createSprite(window.innerWidth/4+window.innerWidth/2,window.innerHeight -50,50,50);
	car2.addImage(c2);

}
function draw(){
	background("black");;
	image(back, 0,-displayHeight*4,displayWidth, displayHeight*5);
//	console.log(car2.x);

 if(gameState === 1){
	if(keyCode === 38){
		car1.y -= 20 ;
		c1Distance += 20
	}


	let Rand = random(no);

	if(Rand === 1  && car1.y < 607 ){
		car2.y = car2.y - 18 ;
		c2Distance += 18 ;
	}
	 if(Rand === 2  && car1.y < 607  ){
		car2.y = car2.y - 21 ;
		c2Distance += 20 ;
	}


	 camera.position.x = displayWidth/2;
     camera.position.y = car1.y;



}

if(c1Distance >= 3640 && c2Distance < 3640){
		car1Rank = "First" ;
		car2Rank = "Second" ;
}

if(c2Distance >= 3640 && c1Distance < 3640){
	car2Rank = "First" ;
	car1Rank = "Second" ;
}
		drawSprites();


	if (car1Rank !== "" && car2Rank !== "") {
		textSize(60);
		stroke("red");		
		strokeWeight(10);
	text(tsa + car1Rank , 200 , -3153);
	car1.y = -3053;
	car2.y = -3053 



		noLoop();
	}


		console.log(car1.y)

}