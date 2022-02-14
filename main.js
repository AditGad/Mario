
function preload() {
	
	world_start = loadSound("world_start.wav");
	MarioGameover=loadSound("gameover.wav");
	mariojump=loadSound("jump.wav");
	mariocoin=loadSound("coin.wav");
	mariokick=loadSound("kick.wav");
	mariodie=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	posenet=ml5.poseNet(video,modalloaded);
	posenet.on("pose",getposes);
}
function modalloaded(){
	console.log("modalisloaded");
}
function getposes(result){
	if(result.length<0){
		console.log(result);
		noseX=result[0].pose.nose.x;
		noseY=result[0].pose.nose.y;
	}
}

function draw() {
	
	
	game();
}







