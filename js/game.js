class Game{

    constructor(){

    }

    getState(){
      var stateref = database.ref("gameState");
      stateref.on("value",function(data){
      gameState = data.val();
      })
    }

    updateState(gameState){
    database.ref("/").update({
    gameState:gameState
    })
    }
    
    async start(){
        player = new Player();
        var playerCountref = await database.ref("playerCount").once("value");
        if(playerCountref.exists()){
            playerCount = playerCountref.val()
            player.getCount();
        }
        
        form = new Form();
        form.display();

        car1 =createSprite(200,200);
        car2 =createSprite(400,200);
        car3 =createSprite(600,200);
        car4 =createSprite(800,200);

        cars = [car1 , car2, car3, car4];
    }

    play(){
     form.hide();
     Player.getPlayerDetails();
     if(allPlayers!= undefined){
         var x =0;
         var y ;
        var i =0;

        
         for(var plr in allPlayers){
             console.log(plr);
             i = i +1;
             x = x+200;
             y = displayHeight-allPlayers[plr].distance;
             cars[i -1].x =x;
             cars[i -1].y = y;
         }

         

     }        
     if(keyDown(UP_ARROW)){
         player.distance = player.distance + 10;
         //player.distance +=50
         player.update();

     }
     drawSprites();
    }
}