var canvas;
var music;
var red,green,blue,yellow;
var ball;
var topW,sideW,leftW;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    yellow = createSprite(100,575,200,30);
    yellow.shapeColor = "yellow";

    green = createSprite(300,575,200,30);
    green.shapeColor = "green";

    blue = createSprite(500,575,200,30);
    blue.shapeColor = "blue";

    red = createSprite(700,575,200,30);
    red.shapeColor = "red";

    //create box sprite and give velocity
    ball = createSprite(random(20,750));
    ball.velocityY = 8;
    ball.scale = 0.2;

    topW = createSprite(200,10,10000,5);
    sideW = createSprite(790,200,5,800);
    leftW = createSprite(10,200,5,800);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    ball.shapeColor = "white";
    ball.bounceOff(red);
    ball.bounceOff(blue);
    ball.bounceOff(green);
    ball.bounceOff(blue);
    ball.bounce(sideW);
    ball.bounce(leftW);

    drawSprites();
    //add condition to check if box touching surface and make it box
    if(yellow.isTouching(ball) && ball.bounceOff(yellow)){
        ball.shapeColor="yellow";
        ball.velocityX = 0;
        
    }
}
