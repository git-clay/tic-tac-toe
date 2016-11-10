//locate elements to use (document.getElementById, document.getElementByClassName,etc)
$(document).ready(function(){
var turn = 0;
//odd turns will be oh. even will be ex.
//if (turn%2 ===1){		//if the turn is odd (oh)
var $currentId = $('.cell').click(function(){	//looks for cell and waits for a click
	var current = this.id;
	$('current').append('div').append('<h2>').append('O');
	console.log(this.id);		//this referest to the current cell so this.id give the .id number
	console.log(this.class);
	turn++;
	console.log(turn);
});
//function create new class .ex or .oh onto div

/*
var $newEx = $(function(){
	$('#ex')
});
*/
//cell number >into> $currentId >into> div

//onclick function to select and imput x or o for current player
var selectTile =function(onclick){
	//if player 
};


//function to determine current player

//make text to display current player

//function to determine winner
//alert





/*---------optional---------*/
//Display message at start of game
//alert if 3 wins in a row
//scoreboard
//css animations (link on github readme for help)
});