var gameState = 0
var player, opponent
var playerhealth = 100
var opponenthealth = 100
var i = 0
var j = 0

function preload(){
  backgroundImage = loadImage("images/arena background.jpg");
  player1Image = loadImage("images/P1/idle sprite p1.png");
  player2Image = loadImage("images/P2/idle sprite p2.png");
  weakpunchp1Image = loadImage("images/P1/weak punch p1.png");
  strongpunchp1Image = loadImage("images/P1/strong punch p1.png");
  weakpunchp2Image = loadImage("images/P2/weak punch p2.png");
  strongpunchp2Image = loadImage("images/P2/strong punch p2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  Form1 = new Form();
  ground = createSprite(10,800,1000,10)
  //background = createSprite(600,600);
  player1 = createSprite(1400,600);
  player1.addImage(player1Image);
  player1.scale = 0.9
  player2 = createSprite(100,600);
  player2.addImage(player2Image);
  player2.scale = 2.5
}

function draw() {
  if (gameState===0){
    Form1.display();
  }

  else {

  
  background(backgroundImage);
  fill ("red")
  textSize(25)
  text (player, 1400,300)
  fill ("red")
  textSize(25)
  text (opponent, 100,300)
  fill ("green")
  textSize(80)
  text (playerhealth, 1200, 100)
  fill ("green")
  textSize(80)
  text (opponenthealth, 100, 100)
  if (keyDown("right")){
    player1.x = player1.x+10
  }
  if (keyDown("left")){
    player1.x = player1.x-10
  }
  if (keyDown("d")){
    player2.x = player2.x+10
  }
  if (keyDown("a")){
    player2.x = player2.x-10
  }
  if (keyDown ("o") && player1.isTouching (player2)  ){
    opponenthealth = opponenthealth - 2
  }
  if (keyDown ("e") && player2.isTouching (player1)){
    playerhealth = playerhealth - 2
  }

  if (keyDown ("p") && player1.isTouching (player2)){
    opponenthealth = opponenthealth - 5
  }

  if (keyDown ("t") && player2.isTouching (player1)){
    playerhealth = playerhealth - 5
  }
  if (playerhealth < 0 || opponenthealth < 0){
  player1.visible = false
  player2.visible = false
  background (backgroundImage)
  if (playerhealth < 0){
    text (opponent + " wins!", windowWidth / 2, windowHeight / 2)
    text ("Press R to restart!", windowWidth / 2, windowHeight / 3)
  }

  if (opponenthealth < 0){
    text (player + " wins!", windowWidth / 2, windowHeight / 2)
    text ("Press R to restart!", windowWidth / 2, windowHeight / 3)
  }}
  if (keyDown ("r")){
    opponenthealth = 100
    playerhealth = 100
    player1.visible = true
    player2.visible = true
    player1.x = 1400
    player1.y = 600
    player1.addImage (player1Image)
    player2.x = 100
    player2.y = 600
    player2.addImage (player2Image)
  }

  player1.debug = false
  player1.setCollider ("circle", 0,0,130)
  player2.debug = false
  player2.setCollider ("circle", 0,0,40)
  keyPressed();
  drawSprites();
}
}
function keyPressed(){
if (keyWentDown("o")){
  i = i+1
  console.log(i)
  player1.addImage(weakpunchp1Image)
}

if (keyWentDown("p") && i % 5 === 0){
  player1.addImage(strongpunchp1Image)
}

if (keyWentDown("e")){
  player2.addImage(weakpunchp2Image)
j = j+1
}

if (keyWentDown("t") && j % 5 === 0){
  player2.addImage(strongpunchp2Image)
 
}

if (keyWentUp("o")){
  player1.addImage(player1Image)
}

if (keyWentUp("p")){
  player1.addImage(player1Image)
}

if (keyWentUp("e")){
player2.addImage(player2Image)
}

if (keyWentUp("t")){
  player2.addImage(player2Image)
}
}