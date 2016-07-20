
$(document).ready(function(){
	
  var secretNum = parseInt(Math.random() * (100) + 1);
  var counterNum = 0;
  var userEntered = [];
  
  function newGame() { 
    userNum = '';
    counterNum = 0;
    userEntered = [];
    $('#feedback').text('Make your Guess!');
    $('#count').text('0');
    $('#guessList').text('');
  }

  $('.new').click(function() {
    newGame();
  }); 

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $('form').submit(function(event) {
        event.preventDefault();
        counterNum = counterNum + 1;
        $('#count').text(counterNum);
        var userNum = parseInt($("#userGuess").val());
        // console.log('Usernum is ' + userNum);
        if (userNum > 100|| isNaN(userNum) || userNum === undefined) {
          alert('Please enter an integer between 1 and 100');
          return;
        }

        for (var i = 0; i < userEntered.length; i++) {
        	if (userEntered[i] == userNum) {
        		alert('You already entered this number!');
        		return;
        	}
        }

        var diffNum = Math.abs(secretNum - userNum);

        if (diffNum >= 50){
        	$('#feedback').text('Ice cold');
        }
        else if (diffNum < 50 && diffNum >= 30){
        	$('#feedback').text('Cold');
        }
        else if (diffNum < 30 && diffNum >= 20){
        	$('#feedback').text('Warm');
        }
        else if (diffNum < 20 && diffNum >= 10){
        	$('#feedback').text('Hot');
        }        
        else if (diffNum < 10 && diffNum >= 1){
        	$('#feedback').text('Very hot!');
        }               
        else {
        	$('#feedback').text('You win! New Game?');
        }

        userEntered.push(userNum);
 
        var guessAdd = '' + '<li>' + userNum + '</li>';
        $(guessAdd).appendTo("#guessList");
        $(this)[0].reset();
    })

});





