
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state, bet) {

    bet(Math.max(game_state.current_buy_in * 2, 350));
    console.log(game_state);
  },

  showdown: function(game_state) {

  }

  getPlayer: function(game_state){
  	return game_state.players[game_state.in_action];
  }

  getMyCards: function(game_state){
  	return getPlayer.hole_cards;
  }

  getCommunityCards: function(game_state){
  	return game_state.community_cards;
  }

  getAllCards : function(game_state){
		myCards = getMyCards(game_state);
		otherCards = getCommunityCards(game_state);
		return myCards.concat(otherCards);
	}

};
