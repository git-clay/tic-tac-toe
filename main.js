//locate elements to use (document.getElementById, document.getElementByClassName,etc)
//√cell number >into> $currentId >into> div
//√onclick function to select and imput x or o for current player
$(document).ready(function(){
var exArray=[];
var ohArray=[];	

/*constructor:creates on/off tiles >> x/o tile
	//id of tile //state of tile bool //content of tile(x,o)*/
function Tile () {		
					


}
var turn = {		//current turn //attributes	//

};

//object 



});
//√odd turns will be oh. even will be ex.
/*
console.log('outside');
$('h3').html("It is X's turn");

$('.cell').click(function(){				//searches for the .cell class and waits for click
	if (turn%2 ===1){						//if the turn is odd (oh)

		$('h3').html("It is X's turn");
		$(this).attr('class','oh cell');	//this refers to the div that was clicked. applies the classes .oh and .cell
		$(this).append('<h2>O</h2>');		//adds an h2 with an o in it
		exArray.push($(this).attr('id'));
		turn ++;							//advances the turn
	}
	else if(turn%2===0){					//turn is even (ex)
		$('h3').html("It is O's turn");
		$(this).attr('class','ex cell');	//adds an h2 in the selected div with X in it
		$(this).append('<h2>X</h2>');
		ohArray.push($(this).attr('id'));
		turn ++;
	}

	console.log(exArray);
	console.log(ohArray);

	});


});
*/
//√function to determine current player
//√make text to display current player
//√append body and create h3 for current player

//function to determine winner
//alert winner!
	/* logic plan
	ex array
	oh array
		if [1,5,9] || [3,5,7]{Diagonal win!}
		else if() [1,4,7] || [2,5,8] || [3,6,9] ){vertical win!}
		else if([1,2,3] || [4,5,6] || [7,8,9] ){horizontal win!}
  /////$jQuery.inArray(10,["8","9","10",10]); //returns -1 if !found ||index if found
  /////$jQuery.inArray("John", arr); (found at index 3)||   /////$jQuery.inArray(4, arr); (!found, returns -1) ||   
  /////$jQuery.inArray("Pete", arr,2); (in array but not at or after index 2===return -1)
  //////for loop (sof-> screenshot on phone)


	*/
//reset



/*---------optional---------*/
//Display message at start of game
//alert if 3 wins in a row
//scoreboard
//css animations (link on github readme for help)
