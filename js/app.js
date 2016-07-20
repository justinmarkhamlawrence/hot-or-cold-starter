
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//Setting the secret number when page is loaded or reset

var secretNum = parseInt(Math.random() * (100) + 1);
// console.log('Secret Number is ' + secretNum)
var counterNum = 0;
var userEntered = [];

//ON CLICK
	// counter up
	// assign uservalue (guess) to a variable
	// assign the difference between uservalue and secretnum to a variable
	// use if-then to provide a hotness rating that gets output to the result box
	// once the user wins, display "you win" thing then ask for new game

    $('form').submit(function(event) {
        event.preventDefault();
        counterNum = counterNum + 1;
        var userNum = $("#userGuess").val();
        // console.log('Usernum is ' + userNum);

        for (var i = 0; i < userEntered.length; i++) {
        	if (userEntered[i] == userNum){
        	console.log('userNum is ' + userNum);
        	console.log('userEntered Array in loop is ' + userEntered);
        		alert('You already entered this number!');
        		return;
        	}
        }


        var diffNum = Math.abs(secretNum - userNum);

        if (diffNum >= 50){
        	console.log('Ice cold');
        }
        else if (diffNum < 50 && diffNum >= 30){
        	console.log('Cold');
        }
        else if (diffNum < 30 && diffNum >= 20){
        	console.log('Warm');
        }
        else if (diffNum < 20 && diffNum >= 10){
        	console.log('Hot');
        }        
        else if (diffNum < 10 && diffNum >= 1){
        	console.log('Very hot!');
        }               
        else {
        	console.log('You win!');
        }

        userEntered.push(userNum);
        console.log('end of code ' + userEntered);
    })

    //end
});


/* things to add
- greater than 100
- you entered this number already
- add to list of things (add to ul as a li) ul "guessList" 

*/