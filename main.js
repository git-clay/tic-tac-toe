//locate elements to use (document.getElementById, document.getElementByClassName,etc)
//√cell number >into> $currentId >into> div
//√onclick function to select and imput x or o for current player
$(document).ready(function(){
var turn = 0;
var exArray=[];
var ohArray=[];	
var win ={
	a:[1,5,9],	//win diag
	b:[3,5,7],	//win diag
	c:[1,4,7],	//win vert
	d:[2,5,8],	//win vert
	e:[3,6,9],	//win vert
	f:[1,2,3],	//win side
	g:[4,5,6],	//win side
	h:[7,8,9]	//win side
};
var look = function (winCheck,playerArr){
	return playerArr.some(function(v){
		return winCheck.indexOf(v) >=0;
	});
};
//√odd turns will be oh. even will be ex.
console.log('outside');
$('h3').html("It is X's turn");

$('.cell').click(function(){				//searches for the .cell class and waits for click
	if (turn%2 ===1){						//if the turn is odd (oh)
		$('h3').html("It is X's turn");
		$(this).attr('class','oh cell');	//this refers to the div that was clicked. applies the classes .oh and .cell
		$(this).append('<h2>O</h2>');		//adds an h2 with an o in it
		ohArray.push($(this).attr('id'));	//adds this id to player's array to track for a win
		turn ++;							//advances the turn
	}
	else if(turn%2===0){					//turn is even (ex)
		$('h3').html("It is O's turn");
		$(this).attr('class','ex cell');	//adds an h2 in the selected div with X in it
		$(this).append('<h2>X</h2>');
		exArray.push($(this).attr('id'));
		turn ++;
	}
	console.log(look(win.a,exArray));
	console.log(exArray);
	console.log(ohArray);
/*		if (win.a||win.b){
			alert('Diagonal win!');
		}
		else if(win.c||win.d||win.e){
			alert('vertical win!');
		}
		else if(win.f||win.g||win.h){
			alert('horizontal win!');
		}
*/		
	});


});

//√function to determine current player
//make text to display current player
//append body and create h3 for current player

//function to determine winner
//alert winner!
//	 logic plan

		
	
/*Reset button*/
function reset(){
	location.reload();
}


/*---------optional---------*/
//Display message at start of game
//alert if 3 wins in a row
//scoreboard
//css animations (link on github readme for help)
