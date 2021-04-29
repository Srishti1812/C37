class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(15);
    text("GAME STARTED!!!", 200, 200);
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      var position = 150;
      for(var plr in allPlayers){
        if(plr === "player" + player.index){
          fill("red");
        } else{
          fill("green")
        }
        position += 20;
        textSize(20);
        text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, position)
      }
    }
    if(keyDown( UP_ARROW) && player.index !== null){
      player.distance += 20;
      player.update();
    }
  }
}
