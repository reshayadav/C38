class Player{

    constructor(){

        this.name = null;
        this.distance = 0;
        this.index = null;
        
    }
    getCount(){
        var countref =database.ref("playerCount");
        countref.on("value", function(data){
            playerCount = data.val();
        });
    }
    updateCount(count){
      database.ref("/").update({
          playerCount:count
      })
    }
    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance

        })
    }
    static getPlayerDetails(){
  var inforef = database.ref("players");
  inforef.on("value",function(data){
      allPlayers = data.val();
  })
    }
}