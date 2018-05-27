var gravity = 0.3;
var players =
    {
      playerOne: 
      {
        lives: 5,
        moveLeft: "a",
        moveRight: "s",
        sprite: "",
        leftBoundary:0,
        rightBoundary:333,
        xPosition:150,
      },
      playerTwo: 
      {
        lives: 5,
        moveRight: "h",
        moveLeft: "g",
        sprite: "",
        leftBoundary:333,
        rightBoundary:666,
        xPosition:483,
      },
      playerThree: 
      {
        lives: 5,
        moveRight: "l",
        moveLeft: "k",
        sprite: "",
        leftBoundary:666,
        rightBoundary:1000,
        xPosition:816,
      }
    }

var sprites = 
{
  bomb: {
    sprite:""
  },
  walls: {
    rightWall:"",
    leftWall:"",
    bottomWall:"",
    topWall:""
  },
  dividers:{
    divOne:"",
    divTwo:""
},
  moveKeys:{
  playerOneGoRight:"",
  playerOneGoLeft:"",
  playerTwoGoRight:"",
  playerTwoGoLeft:"",
  playerThreeGoRight:"",
  playerThreeGoleft:""
  },
  playerOneLives:{
    lifeOne:"",
    lifeTwo:"",
    lifeThree:"",
    lifeFour:"",
    lifeFive:"",
  },
  playerTwoLives:{
  lifeOne:"",
  lifeTwo:"",
  lifeThree:"",
  lifeFour:"",
  lifeFive:"",
  },
  playerThreeLives:{
    lifeOne:"",
    lifeTwo:"",
    lifeThree:"",
    lifeFour:"",
    lifeFive:"",
  }
}


function setup(){
  createCanvas(1000,700)
  background(200,200,200)
  sprites.bomb.sprite=createSprite(500,100,30,30)
  sprites.bomb.sprite.addAnimation("Bomb", "Images/bomb_1f4a3.png")
  sprites.bomb.sprite.addAnimation("Collision", "Images/collision-symbol_1f4a5.png")
  sprites.bomb.sprite.scale-=0.5
  sprites.bomb.sprite.maxSpeed=30
  players.playerOne.sprite=createSprite(players.playerOne.xPosition,550,100,64)
  players.playerOne.sprite.addAnimation("dollarBill", "Images/banknote-with-dollar-sign_1f4b5.png")
  players.playerOne.sprite.immovable=true
  players.playerTwo.sprite=createSprite(players.playerTwo.xPosition,550,100,64)
  players.playerTwo.sprite.addAnimation("euroNote", "Images/banknote-with-euro-sign_1f4b6.png")
  players.playerTwo.sprite.immovable=true
  players.playerThree.sprite=createSprite(players.playerThree.xPosition,550,100,64)
  players.playerThree.sprite.addAnimation("poundNote", "Images/banknote-with-pound-sign_1f4b7.png")
  players.playerThree.sprite.immovable=true
  sprites.walls.rightWall=createSprite(1000,350,1,700)
  sprites.walls.rightWall.immovable=true
  sprites.walls.leftWall=createSprite(0,350,1,700)
  sprites.walls.leftWall.immovable=true
  sprites.walls.bottomWall=createSprite(500,700,1000,1)
  sprites.walls.bottomWall.immovable=true
  sprites.walls.topWall=createSprite(500,0,1000,1)
  sprites.walls.topWall.immovable=true
  sprites.dividers.divOne=createSprite(333,600,1,200)
  sprites.dividers.divOne.immovable=true
  sprites.dividers.divTwo=createSprite(666,600,1,200)
  sprites.dividers.divTwo.immovable=true
  sprites.moveKeys.playerOneGoLeft=createSprite(100,675,25,25)
  sprites.moveKeys.playerOneGoLeft.addAnimation("a","Images/regional-indicator-symbol-letter-a_1f1e6.png")
  sprites.moveKeys.playerOneGoLeft.scale=0.3
  sprites.moveKeys.playerOneGoRight=createSprite(200,675,25,25)
  sprites.moveKeys.playerOneGoRight.addAnimation("s","Images/regional-indicator-symbol-letter-s_1f1f8.png")
  sprites.moveKeys.playerOneGoRight.scale=0.3
  sprites.moveKeys.playerTwoGoLeft=createSprite(433,675,25,25)
  sprites.moveKeys.playerTwoGoLeft.addAnimation("a","Images/regional-indicator-symbol-letter-g_1f1ec.png")
  sprites.moveKeys.playerTwoGoLeft.scale=0.3
  sprites.moveKeys.playerTwoGoRight=createSprite(533,675,25,25)
  sprites.moveKeys.playerTwoGoRight.addAnimation("s","Images/regional-indicator-symbol-letter-h_1f1ed.png")
  sprites.moveKeys.playerTwoGoRight.scale=0.3
  sprites.moveKeys.playerThreeGoLeft=createSprite(766,675,25,25)
  sprites.moveKeys.playerThreeGoLeft.addAnimation("a","Images/regional-indicator-symbol-letter-k_1f1f0.png")
  sprites.moveKeys.playerThreeGoLeft.scale=0.3
  sprites.moveKeys.playerThreeGoRight=createSprite(866,675,25,25)
  sprites.moveKeys.playerThreeGoRight.addAnimation("s","Images/regional-indicator-symbol-letter-l_1f1f1.png")
  sprites.moveKeys.playerThreeGoRight.scale=0.3
  sprites.playerOneLives.lifeOne=createSprite(101,630,20,20)
  sprites.playerOneLives.lifeOne.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerOneLives.lifeOne.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerOneLives.lifeOne.scale=0.5
  sprites.playerOneLives.lifeTwo=createSprite(127,630,20,20)
  sprites.playerOneLives.lifeTwo.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerOneLives.lifeTwo.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerOneLives.lifeTwo.scale=0.5
  sprites.playerOneLives.lifeThree=createSprite(153,630,20,20)
  sprites.playerOneLives.lifeThree.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerOneLives.lifeThree.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerOneLives.lifeThree.scale=0.5
  sprites.playerOneLives.lifeFour=createSprite(179,630,20,20)
  sprites.playerOneLives.lifeFour.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerOneLives.lifeFour.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerOneLives.lifeFour.scale=0.5
  sprites.playerOneLives.lifeFive=createSprite(205,630,20,20)
  sprites.playerOneLives.lifeFive.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerOneLives.lifeFive.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerOneLives.lifeFive.scale=0.5
  sprites.playerTwoLives.lifeOne=createSprite(434,630,20,20)
  sprites.playerTwoLives.lifeOne.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerTwoLives.lifeOne.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerTwoLives.lifeOne.scale=0.5
  sprites.playerTwoLives.lifeTwo=createSprite(460,630,20,20)
  sprites.playerTwoLives.lifeTwo.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerTwoLives.lifeTwo.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerTwoLives.lifeTwo.scale=0.5
  sprites.playerTwoLives.lifeThree=createSprite(486,630,20,20)
  sprites.playerTwoLives.lifeThree.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerTwoLives.lifeThree.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerTwoLives.lifeThree.scale=0.5
  sprites.playerTwoLives.lifeFour=createSprite(512,630,20,20)
  sprites.playerTwoLives.lifeFour.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerTwoLives.lifeFour.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerTwoLives.lifeFour.scale=0.5
  sprites.playerTwoLives.lifeFive=createSprite(538,630,20,20)
  sprites.playerTwoLives.lifeFive.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerTwoLives.lifeFive.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerTwoLives.lifeFive.scale=0.5
  sprites.playerThreeLives.lifeOne=createSprite(767,630,20,20)
  sprites.playerThreeLives.lifeOne.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerThreeLives.lifeOne.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerThreeLives.lifeOne.scale=0.5
  sprites.playerThreeLives.lifeTwo=createSprite(793,630,20,20)
  sprites.playerThreeLives.lifeTwo.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerThreeLives.lifeTwo.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerThreeLives.lifeTwo.scale=0.5
  sprites.playerThreeLives.lifeThree=createSprite(819,630,20,20)
  sprites.playerThreeLives.lifeThree.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerThreeLives.lifeThree.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerThreeLives.lifeThree.scale=0.5
  sprites.playerThreeLives.lifeFour=createSprite(845,630,20,20)
  sprites.playerThreeLives.lifeFour.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerThreeLives.lifeFour.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerThreeLives.lifeFour.scale=0.5
  sprites.playerThreeLives.lifeFive=createSprite(871,630,20,20)
  sprites.playerThreeLives.lifeFive.addAnimation("Heart","Images/heavy-black-heart_2764.png")
  sprites.playerThreeLives.lifeFive.addAnimation("Broken", "Images/broken-heart_1f494.png")
  sprites.playerThreeLives.lifeFive.scale=0.5
}

function draw(){
  constrain(players.playerOne.sprite.position.x,0,333)
  constrain(players.playerTwo.sprite.position.x,333,666)
  constrain(players.playerThree.sprite.position.x,666,1000)
  clear()
  createCanvas(1000,700)
  background(200,200,200)  
  sprites.bomb.sprite.addSpeed(gravity,90)
  sprites.bomb.sprite.changeAnimation("Bomb")
  sprites.bomb.sprite.bounce(sprites.walls.leftWall)
  sprites.bomb.sprite.bounce(sprites.walls.rightWall)
  sprites.bomb.sprite.bounce(sprites.walls.topWall)
  sprites.bomb.sprite.bounce(sprites.walls.bottomWall)
  sprites.bomb.sprite.bounce(sprites.dividers.divOne)
  sprites.bomb.sprite.bounce(sprites.dividers.divTwo)
  players.playerOne.sprite.collide(sprites.dividers.divOne)
  players.playerTwo.sprite.collide(sprites.dividers.divOne)
  players.playerTwo.sprite.collide(sprites.dividers.divTwo)
  players.playerThree.sprite.collide(sprites.dividers.divTwo)
  players.playerOne.sprite.collide(sprites.walls.leftWall)
  players.playerThree.sprite.collide(sprites.walls.rightWall)
  if(keyDown("a")){
    players.playerOne.sprite.position.x-=4
  }
  if(keyDown("s")){
    players.playerOne.sprite.position.x+=4
  }
  if(keyDown("g")){
    players.playerTwo.sprite.position.x-=4
  }
  if(keyDown("h")){
    players.playerTwo.sprite.position.x+=4
  }
  if(keyDown("k")){
    players.playerThree.sprite.position.x-=4
  }
  if(keyDown("l")){
    players.playerThree.sprite.position.x+=4
  }
  if(sprites.bomb.sprite.bounce(players.playerOne.sprite)){
    sprites.bomb.sprite.setSpeed(20,random(220,320))
  }
  if(sprites.bomb.sprite.bounce(players.playerTwo.sprite)){
    sprites.bomb.sprite.setSpeed(20,random(220,320))
  }
  if(sprites.bomb.sprite.bounce(players.playerThree.sprite)){
    sprites.bomb.sprite.setSpeed(20,random(220,320))
  }
  if (sprites.bomb.sprite.position.y>600){
    noLives()
    sprites.bomb.sprite.changeAnimation("Collision")
    sprites.bomb.sprite.setSpeed(0,0)
    sprites.bomb.sprite.addSpeed(gravity,270)
    setTimeout(livesRemover,2960)
    setTimeout(resetBomb,3000)
  }
  if(players.playerOne.lives==4){
    sprites.playerOneLives.lifeFive.changeAnimation("Broken")
  }
  if(players.playerOne.lives==3){
    sprites.playerOneLives.lifeFour.changeAnimation("Broken")
  }
  if(players.playerOne.lives==2){
    sprites.playerOneLives.lifeThree.changeAnimation("Broken")
  }
  if(players.playerOne.lives==1){
    sprites.playerOneLives.lifeTwo.changeAnimation("Broken")
  }
  if(players.playerOne.lives==0){
    sprites.playerOneLives.lifeOne.changeAnimation("Broken")
    setTimeout(noLives,2000)
  }
  if(players.playerTwo.lives==4){
    sprites.playerTwoLives.lifeFive.changeAnimation("Broken")
  }
  if(players.playerTwo.lives==3){
    sprites.playerTwoLives.lifeFour.changeAnimation("Broken")
  }
  if(players.playerTwo.lives==2){
    sprites.playerTwoLives.lifeThree.changeAnimation("Broken")
  }
  if(players.playerTwo.lives==1){
    sprites.playerTwoLives.lifeTwo.changeAnimation("Broken")
  }
  if(players.playerTwo.lives==0){
    sprites.playerTwoLives.lifeOne.changeAnimation("Broken")
    setTimeout(noLives,2000)
  }
  if(players.playerThree.lives==4){
    sprites.playerThreeLives.lifeFive.changeAnimation("Broken")
  }
  if(players.playerThree.lives==3){
    sprites.playerThreeLives.lifeFour.changeAnimation("Broken")
  }
  if(players.playerThree.lives==2){
    sprites.playerThreeLives.lifeThree.changeAnimation("Broken")
  }
  if(players.playerThree.lives==1){
    sprites.playerThreeLives.lifeTwo.changeAnimation("Broken")
  }
  if(players.playerThree.lives==0){
    sprites.playerThreeLives.lifeOne.changeAnimation("Broken")
    setTimeout(noLives,2000)
  }
if(players.playerOne.sprite.position.x>300){
   players.playerOne.sprite.position.x=300 
}
    if(players.playerOne.sprite.position.x<25){
   players.playerOne.sprite.position.x=25 
}
    if(players.playerTwo.sprite.position.x<363){
   players.playerTwo.sprite.position.x=363 
}
    if(players.playerTwo.sprite.position.x>635){
   players.playerTwo.sprite.position.x=635
}
   if(players.playerThree.sprite.position.x<696){
   players.playerThree.sprite.position.x=696 
}
        if(players.playerThree.sprite.position.x>970){
   players.playerThree.sprite.position.x=970 
}
  drawSprites()
}

function resetBomb(){
  sprites.bomb.sprite.position.x=500
  sprites.bomb.sprite.position.y=100
  sprites.bomb.sprite.setSpeed(0,0)
  players.playerOne.sprite.position.x=150
  players.playerTwo.sprite.position.x=483
  players.playerThree.sprite.position.x=816
}

function noLives(){
    if(players.playerOne.lives==0){
        players.playerOne.lives=5
        players.playerTwo.lives=5
        players.playerThreelives=5
        sprites.playerOneLives.lifeOne.changeAnimation("Heart")
        sprites.playerOneLives.lifeTwo.changeAnimation("Heart")
        sprites.playerOneLives.lifeThree.changeAnimation("Heart")
        sprites.playerOneLives.lifeFour.changeAnimation("Heart")
        sprites.playerOneLives.lifeFive.changeAnimation("Heart")
        sprites.playerTwoLives.lifeOne.changeAnimation("Heart")
        sprites.playerTwoLives.lifeTwo.changeAnimation("Heart")
        sprites.playerTwoLives.lifeThree.changeAnimation("Heart")
        sprites.playerTwoLives.lifeFour.changeAnimation("Heart")
        sprites.playerTwoLives.lifeFive.changeAnimation("Heart")
        sprites.playerThreeLives.lifeOne.changeAnimation("Heart")
        sprites.playerThreeLives.lifeTwo.changeAnimation("Heart")
        sprites.playerThreeLives.lifeThree.changeAnimation("Heart")
        sprites.playerThreeLives.lifeFour.changeAnimation("Heart")
        sprites.playerThreeLives.lifeFive.changeAnimation("Heart")
        
    }
    if(players.playerTwo.lives==0){
        players.playerOne.lives=5
        players.playerTwo.lives=5
        players.playerThreelives=5
        sprites.playerOneLives.lifeOne.changeAnimation("Heart")
        sprites.playerOneLives.lifeTwo.changeAnimation("Heart")
        sprites.playerOneLives.lifeThree.changeAnimation("Heart")
        sprites.playerOneLives.lifeFour.changeAnimation("Heart")
        sprites.playerOneLives.lifeFive.changeAnimation("Heart")
        sprites.playerTwoLives.lifeOne.changeAnimation("Heart")
        sprites.playerTwoLives.lifeTwo.changeAnimation("Heart")
        sprites.playerTwoLives.lifeThree.changeAnimation("Heart")
        sprites.playerTwoLives.lifeFour.changeAnimation("Heart")
        sprites.playerTwoLives.lifeFive.changeAnimation("Heart")
        sprites.playerThreeLives.lifeOne.changeAnimation("Heart")
        sprites.playerThreeLives.lifeTwo.changeAnimation("Heart")
        sprites.playerThreeLives.lifeThree.changeAnimation("Heart")
        sprites.playerThreeLives.lifeFour.changeAnimation("Heart")
        sprites.playerThreeLives.lifeFive.changeAnimation("Heart")
    }
    if(players.playerThree.lives==0){
        players.playerOne.lives=5
        players.playerTwo.lives=5
        players.playerThreelives=5
        sprites.playerOneLives.lifeOne.changeAnimation("Heart")
        sprites.playerOneLives.lifeTwo.changeAnimation("Heart")
        sprites.playerOneLives.lifeThree.changeAnimation("Heart")
        sprites.playerOneLives.lifeFour.changeAnimation("Heart")
        sprites.playerOneLives.lifeFive.changeAnimation("Heart")
        sprites.playerTwoLives.lifeOne.changeAnimation("Heart")
        sprites.playerTwoLives.lifeTwo.changeAnimation("Heart")
        sprites.playerTwoLives.lifeThree.changeAnimation("Heart")
        sprites.playerTwoLives.lifeFour.changeAnimation("Heart")
        sprites.playerTwoLives.lifeFive.changeAnimation("Heart")
        sprites.playerThreeLives.lifeOne.changeAnimation("Heart")
        sprites.playerThreeLives.lifeTwo.changeAnimation("Heart")
        sprites.playerThreeLives.lifeThree.changeAnimation("Heart")
        sprites.playerThreeLives.lifeFour.changeAnimation("Heart")
        sprites.playerThreeLives.lifeFive.changeAnimation("Heart")
    }
}
function livesRemover(){
  if (sprites.bomb.sprite.position.y>600){
    if (sprites.bomb.sprite.position.x<333){
      players.playerOne.lives-=1
    }
    if (333<sprites.bomb.sprite.position.x && sprites.bomb.sprite.position.x<666){
      players.playerTwo.lives-=1
    }
    if (sprites.bomb.sprite.position.x>666){
      players.playerThree.lives-=1
    }
  }
}