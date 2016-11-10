//locate elements to use (document.getElementById, document.getElementByClassName,etc)
$(document).ready(function(){
var turn = 1;
//odd turns will be oh. even will be ex.

$('.cell').click(function(){
if (turn%2 ===1){		//if the turn is odd (oh)
	$(this).attr('class','oh cell');
	turn ++;
	console.log(turn);
}
else if(turn%2===0){		//turn is even (ex)
$(this).attr('class','ex cell');
turn ++;
		console.log(turn);
}
});

//function create new class .ex or .oh onto div

/*
var $newEx = $(function(){
	$('#ex')
});
*/
//cell number >into> $currentId >into> div

//onclick function to select and imput x or o for current player



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