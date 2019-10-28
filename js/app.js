//global variables
const Width = 101; //the width of the stone
const Height = 55; // the height of the stone
//-------------------------------------------
let Enemy = function(xPos,yPos,movement) {
    this.x = xPos; //set its position in canvas
    this.y = yPos; //set its position in canvas
    this.movement = movement;
    this.sprite = 'images/enemy-bug.png'; //the enemy"bug" image
};
//--------------------------------------------
Enemy.prototype.update = function(dt) {
    this.x += this.movement * dt ;
    // ---------initialization of enemy-------
    if (this.x > 600) {
        this.x = -150;
   }
   //---Checking for collision between player & enemies---
   //If the player collides with the enemy, the player will be returned to his original position
    if (player.x < this.x + 50 && player.x + 35 > this.x &&
        player.y < this.y + 20 && 28 + player.y > this.y)
         {
        player.x = 200;
        player.y = 400;
        }
};
//---------------------------------------------
// Drawing the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

let Player = function() {
// the Player position
  this.x = 200;
  this.y = 400;
  this.sprite = 'images/char-cat-girl.png';
};
//--------------------------------------
Player.prototype.update = function(dt) {
// when the player reach the water
  if(this.y <= 0) {
    this.x = 200;
    this.y = 392;
    alert("Congratulations you WIN!!!!!");
  }
};
//------------------drawing the Player------------------
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//--------listening to some keys when pressing---------
Player.prototype.handleInput = function(keysPress) {
  if (keysPress === 'left' && this.x > 0) {
      this.x -= Width;
  } else if (keysPress === 'right' && this.x < 330) {
      this.x += Width;
  } else if (keysPress === 'up' && this.y > 0) {
      this.y -= Height;
  } else if (keysPress === 'down' && this.y < 500) {
      this.y += Height;
  }
};
//---------------------set all enemies----------------
//multiple enemies with different movement and position
let player = new Player();
let firstEnemy = new Enemy(100,60,60);
let secondEnemy = new Enemy(-100,60,30);
let thirdEnemy = new Enemy(-100,140,30);
let forthEnemy = new Enemy(100,230,20);
let fifthEnemy = new Enemy(-100,230,50);
let sixthEnemy = new Enemy(100,230,80);
let seventhEnemy = new Enemy(-100,230,100);
let eightthEnemy = new Enemy(-100,140,60);
//place them all in an array
let allEnemies = [firstEnemy,secondEnemy,
                  thirdEnemy,forthEnemy,fifthEnemy,
                  sixthEnemy,seventhEnemy,eightthEnemy];

//-------------------setting the keys-----------------
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
