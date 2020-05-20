//defining objects
var PLAY =1
var END = 0
var gameState = PLAY;
var food
var head
var group = []
var edges;
var score= 0

//setting objects
function setup()
 {
   //making snake's body
   var canvas = createCanvas(400, 400);
   head = createSprite(200,200,10,10);
   head.scale = 2.5;
   head.shapeColor = "brown";
   head.velocityX = 2;
   group.push(head);
   
   //defining gamestate and score
   var gameState = PLAY;
   var score = 0;
   
   //making food
   food = createSprite(random(30,100),random(30,100),10,10);
   food.scale = 2.5;
   food.shapeColor = "red"
   
 }

function draw() 
{
  //setting a backgrond
  background(220);
  
  //creating edges
  edges = createEdgeSprites();
  
    //calling function "checkTouch() & move" when gamestate is play
    if(gameState === PLAY)
    {
     checkTouch();
     move();
    }
   
    //if gamestate is end then ..........
    if(gameState === END)
    {
      
    background("brown");
    textSize(40);
    text("GAME OVER",80,200);
    head.destroy();
    group = []
    food.destroy();
    }
    
   //displaying score
    fill("green");
    textSize(25);
    text("SCORE:  " +score,10,30);
    
  //to display all the objects
    drawSprites();
}

//checkTouch function
function checkTouch()
  {
    //if snake is touching food then .........
     if(head.isTouching(food))
     {
      food.x = Math.round((random(20,350)));
      food.y = Math.round((random(20,350)));
      var body = createSprite(200,200, 10, 10);
      group.push(body);
      score ++;
     }
      
    //if snake is touching edges then ........
     if (edges.isTouching(head))
     {  
      gameState = END;
      head.setSpeedAndDirection(0,0);
     }
  
     //to make a new body along with the snake's body
    for (var i = group.length - 1; i > 0; i--)
    {
     group[i].x = group[i-1].x;
     group[i].y = group[i-1].y;
     group[i].shapeColor = "brown"
     group[i].scale = 2.5
    }
 }

//move function
function move()
  {
      //if up_arrow key pressed then the snake should move up
      if (keyDown("up")) 
      {
         head.setSpeedAndDirection(4, -90);
      }
      //if down_arrow key pressed then the snake should move down
      if (keyDown("down")) 
      {
         head.setSpeedAndDirection(4, 90);
      }
      //if left_arrow key pressed then the snake should move left
      if (keyDown("left")) 
      {
         head.setSpeedAndDirection(4, 180);
      }
      //if right_arrow key pressed then the snake should move right
      if (keyDown("right")) 
      {
         head.setSpeedAndDirection(4, 0);
      }
  }

  