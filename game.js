class Game {
constructor(){

}
getstate(){//reffering the database
    var gamestateref = database.ref('gameStates');
    //extrecting data form the database
    gamestateref.on("value",function(data){
        //giving the data to the variable
      GameState = data.val();  
    });
}

update(state){//reffering the database and updating it 
  database.ref(/* "/" here is used to call 'gameStates' */'/').update({
      // here we are updating the database
    gameStates : state 
  })
  }

  start(){
      if(GameState === 0){
          player = new Player();
          player.GetCount();
          form = new Form();  
          form.display();
        }
  }

}

