var database;
var GameState = 0;
var playerCount = 0;
var player,form,game;
var checkbox1a,checkbox1b;
var checkbox2a,checkbox2b,checkbox2c;
var checkbox3a,checkbox3b;
var checkbox4a,checkbox4b, checkbox4c;
var sug = "no data here";
var button2;
var fund  = "yes";
var playerIndex, name, name2;
var amt = 1000;
var time = "once";
var donate = "nothing"
var a = 0;

function setup(){
  database = firebase.database();
  
  createCanvas(500,600);

  game = new Game();
  game.getstate();
  game.start();

}
var h = 2;
function draw(){
  background("white");

  
  console.log(fund)
  
      if (a === 1){
        text("Mr. "+playerCount,400,400);
      }
      // second ans
      if(checkbox2a.checked()){
        amt = 1000;
    
      }
      if(checkbox2b.checked()){
        amt = 2500;
    
      }
      if(checkbox2c.checked()){
        amt = 5000;
    
      }

          // first ans
    if(checkbox1a.checked()){
      fund = "yes";
  
    }
    if(checkbox1b.checked()){
      fund = "no";
  
    }

    //third question
    if(checkbox3a.checked()){
      time = "yearly";
  
    }
    if(checkbox3b.checked()){
      time = "monthly";
  
    }

    //fourth ans
    
    if(checkbox4a.checked()){
      donate = "clothing";
        
    }
    if(checkbox4b.checked()){
      donate = "toys";
        
    }
    if(checkbox4c.checked()){
      donate = "others";
        
    }

  if (h === 1){
    player.Update(name);



     h = 2;
  }

}




  



