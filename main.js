//locate elements to use (document.getElementById, document.getElementByClassName,etc)
$(document).ready(function(){
var turn = 1;
//odd turns will be oh. even will be ex.

$('.cell').click(function(){			//searches for the .cell class and waits for click
	if (turn%2 ===1){		//if the turn is odd (oh)
		$(this).attr('class','oh cell');	//this refers to the div that was clicked. applies the classes .oh and .cell
		$(this).append('<h2>O</h2>');
		turn ++;
		console.log(turn);
	}
	else if(turn%2===0){		//turn is even (ex)
		$(this).attr('class','ex cell');
		$(this).append('<h2>X</h2>');
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

// $('div').click(function() {
});

//function to determine current player

//make text to display current player

//function to determine winner
//alert





/*---------optional---------*/
//Display message at start of game
//alert if 3 wins in a row
//scoreboard
//css animations (link on github readme for help)
