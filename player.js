class Player {
constructor(){}

GetCount(){
    var PlayerCountref = database.ref('VoterCount');
    PlayerCountref.on("value",function (data){
        playerCount = data.val();
    });
}

UpdateCount(Count){

  database.ref('/').update({
    VoterCount : Count
  });
  

}                                                                                                                                                                                                                                                                                                                                                                                                                                     

Update(name){

    var playerIndex = "Voter" + playerCount ;
    database.ref(playerIndex).set({
      email : name,
      Amount : amt,
      Funding : fund,
      How_Frequently : time,
      Donation : donate,
      Suggesition :sug
    });
  }

}
