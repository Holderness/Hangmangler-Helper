console.log('ಠ__ಠ')






///////////////////////////////////////HANG MANG////////////////////////////////////////////////////




// getting endagered species from https://www.worldwildlife.org/species/directory?direction=desc&sort=extinction_status
animals = []
$('.keep').each(function(i, e){
	animals.push(e.firstElementChild.text);
});



// creates hangman display

function createsDisplay(){

	$('.hangman').append("<div>                     /||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>           _________//||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>          |        // ||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>          |        || ||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>                   || ||</div>".replace(/ /g, '&nbsp;&nbsp;'));
  $('.hangman').append("<div>                   || ||</div>".replace(/ /g, '&nbsp;&nbsp;')); 
	$('.hangman').append("<div>                   || ||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>                   || ||</div>".replace(/ /g, '&nbsp;&nbsp;')); 
	$('.hangman').append("<div>                   || ||</div>".replace(/ /g, '&nbsp;&nbsp;'));  
	$('.hangman').append("<div>                   || ||</div>".replace(/ /g, '&nbsp;&nbsp;')); 
	$('.hangman').append("<div>                   || ||</div>".replace(/ /g, '&nbsp;&nbsp;')); 
	$('.hangman').append("<div>                   || ||</div>".replace(/ /g, '&nbsp;&nbsp;')); 
	$('.hangman').append("<div>                   || ||</div>".replace(/ /g, '&nbsp;&nbsp;'));   
  $('.hangman').append("<div>                   || ||</div>".replace(/ /g, '&nbsp;&nbsp;'));                             
	$('.hangman').append("<div>  _________________|| ||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div> /                   \\||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>/_____________________||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>|_____________________||</div>".replace(/ /g, '&nbsp;&nbsp;'));

}


function createsCowDisplay(){
  $('.cows').append("<div> </div>".replace(/ /g, '&nbsp;&nbsp;'));
  $('.cows').append("<div> </div>".replace(/ /g, '&nbsp;&nbsp;'));
  $('.cows').append("<div> </div>".replace(/ /g, '&nbsp;&nbsp;'));
  $('.cows').append("<div> </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows').append("<div> </div>".replace(/ /g, '&nbsp;&nbsp;'));
  $('.cows').append("<div> </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows').append("<div> </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows').append("<div> </div>".replace(/ /g, '&nbsp;&nbsp;')); 
  $('.cows').append("<div> </div>".replace(/ /g, '&nbsp;&nbsp;')); 
	$('.cows').append("<div>                        (__)             (__)                   </div>".replace(/ /g, '&nbsp;&nbsp;'));   
  $('.cows').append("<div>                        (oo)             (oo)                   </div>".replace(/ /g, '&nbsp;&nbsp;'));                             
	$('.cows').append("<div>                 /-----------\\/       /---------\\/                    </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows').append("<div>                / |     ||       / |     ||                     </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows').append("<div>               *  ||-------||      *  ||W---||                     </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows').append("<div>                  ^^    ^^         ^^    ^^                     </div>".replace(/ /g, '&nbsp;&nbsp;'));

}



function leftCowDialogue(pinata){
	$('.cows div:nth-child(5)').append("<span> "+pinata+" </span>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows div:nth-child(7)').append("                 o                                          ".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows div:nth-child(8)').append("                &nbsp;  o                                        ".replace(/ /g, '&nbsp;&nbsp;')); 
	$('.cows div:nth-child(9)').append("                     o                                      ".replace(/ /g, '&nbsp;&nbsp;'));

	setTimeout(function(){
		$('.cows div:nth-child(5)')[0].innerHTML = '&nbsp;&nbsp;'
		$('.cows div:nth-child(7)')[0].innerHTML = '&nbsp;&nbsp;'
		$('.cows div:nth-child(8)')[0].innerHTML = '&nbsp;&nbsp;'
		$('.cows div:nth-child(9)')[0].innerHTML = '&nbsp;&nbsp;'
	}, 3000);
}

function rightCowDialogue(gerbil){
	$('.cows div:nth-child(5)').append("                                                 <span style='margin-left: 17em'> "+gerbil+"</span>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows div:nth-child(7)').append("                                               o            ".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows div:nth-child(8)').append("                                           &nbsp;  o        ".replace(/ /g, '&nbsp;&nbsp;')); 
	$('.cows div:nth-child(9)').append("                                          o                 ".replace(/ /g, '&nbsp;&nbsp;'));

	setTimeout(function(){
		$('.cows div:nth-child(5)')[0].innerHTML = '&nbsp;&nbsp;'
		$('.cows div:nth-child(7)')[0].innerHTML = '&nbsp;&nbsp;'
		$('.cows div:nth-child(8)')[0].innerHTML = '&nbsp;&nbsp;'
		$('.cows div:nth-child(9)')[0].innerHTML = '&nbsp;&nbsp;'
	}, 3000);
}


function script(){

// break up into scripts, have an array within arrays, choose from a random script each time

	script = [
		"I am a talking cow. ha ha ha.",
		"Your mom is. ha ha ha.",
		"Your Mom likes duck sauce. ha ha ha.",
		"Yes. That is true.",
		"That bus ride, am I right?",
		"It's not so bad. Everyone likes to shit on the bus.",
		"And pee everywhere too.",
		"I think this should be worth it though.",
		"Yeah, I never miss a good hanging.",
		"Should be pretty good.",
		"I dunno, no one else is here yet.",
		"Yeah, it's weird right?",
		"People are getting hung left and right and no one's here.",
		"It IS weird.",
		"Maybe it's not weird.",
		"No. It's weird.",
		"What did the cow say to the pediatrist?",
		"What did that dirty cow say?",
		"Betty doesn't love you any more. She loves me now.",
		"What did the cow say to the taxi driver?",
		"I dunno. What?",
		"I need to go to 20th and 31st.",
		"I like blueberries."
	]



	for (i = 0; i < (script.length); i++){
		
		if ( i % 2 === 0 ) {
				(function(i) {
					setTimeout(function(){
						leftCowDialogue(script[i]);
					}, 4200 * i);
				})(i);
		} else {
				(function(i) {
					setTimeout(function(){
						rightCowDialogue(script[i]);
					}, 4200 * i);
				})(i);
		};
	};
}


 //          (__)             (__)   
 //          (oo)             (oo)     
 //   /-------\/       /-------\/     
 //  / |     ||       / |     ||      
 // *  ||----||      *  ||W---||     
 //    ^^    ^^         ^^    ^^   



//////////////////////////maybe do this stuff///////////////////////////////////////////
// class='head_top'
//  class='head_face'
//   class='left_arm right_arm'
//    class='torso'
//    class='left_leg right_leg'

/// add creaking sounds as the gallows gets bent around by the code

/////////////////////////////////////////////////////////////////////////




// adds hangman gameplay

function insertFace(){
	$('.hangman div')[4].innerHTML = "        (ಠ_ಠ)  &nbsp;    || ||".replace(/ /g, '&nbsp;&nbsp;');
}

function insertBody(){
	$('.hangman div')[5].innerHTML = "      &nbsp;    8   &nbsp;    || ||".replace(/ /g, '&nbsp;&nbsp;');

}

function insertLeftArm(){
	$('.hangman div')[5].innerHTML = "         <8   &nbsp;    || ||".replace(/ /g, '&nbsp;&nbsp;');

}

function insertBothArms(){
	$('.hangman div')[5].innerHTML = "    &nbsp;    <8>       || ||".replace(/ /g, '&nbsp;&nbsp;');

}


function insertLeftLeg(){
	$('.hangman div')[6].innerHTML = "     &nbsp;    /    &nbsp;    || ||".replace(/ /g, '&nbsp;&nbsp;');

}

function insertBothLegs(){
	$('.hangman div')[6].innerHTML = "         /\\        || ||".replace(/ /g, '&nbsp;&nbsp;');

}

   
//  &perp;
// '(ಠ_ಠ) '
// ' <8>  '
// ' /\\  '





// initialize hangman game

function createHangmanGame(){

	$('#new-game').click(function(e){
    var game_state = $(this).find("[data-name='<%= @game_state %>']").val();

    $.ajax({
    method: 'POST',
    url: '/hangman/game',
    dataType: 'json',
    success: function(data){
      data; 
      } // success
    }); // $.ajax
  });
}

// new game mooo
function moo(){
	var hangmans = ["Hangmoo", "Hangan", "Hangmañ", "Hõngmõn", "Hangmrn", "Hangmanos", "Hangmanan", "Hangmank", "Manghan", "Herrgggmerrr"]
	var hangman = hangmans[Math.floor(Math.random()*hangmans.length)]
  $('#new-game').click(function(e){
  	$('#moo').text(hangman)
  	setTimeout(function(){
  		$('#moo').text(hangman);
  	}, 1000);
  	setTimeout(function(){
  		$('#moo').text(hangman)
  	}, 1000);
  })
}

// function checkForNewGames(){
// 		$.ajax({ 
// 			url: "hangman/games", 
// 			dataType: "json",
// 			success: function(data){
//         console.log(data);
//       }
//     });
// 	};

function interpretGuess(){

  $('form#guess-box').on('submit', function(e){
	  var guess = $(this).find("[name='guess']").val();

	  $.ajax({
    method: 'PATCH',
    url: '/hangman/game',
    dataType: 'json',
    data: {guess: guess, _method: "patch", },
    success: function(data){
  	  e.preventDefault();
  	  data.forEach(function(attr){
          attr;
        });
  	  } //success
  	}); // ajax
  }); //form function
}


// adds hanging man

function incorrectGuesses(){
	var guessNo = $('#incorrect-guesses').attr("guess-no") 
	if (guessNo === "1") {
		insertFace();
	} else if ( guessNo === "2") {
		insertFace();
		insertBody();
	} else if ( guessNo === "3") {
		insertFace();
		insertBody();
		insertLeftArm();
	} else if ( guessNo === "4") {
		insertFace();
		insertBody();
		insertLeftArm();
		insertBothArms();
	} else if ( guessNo === "5") {
		insertFace();
		insertBody();
		insertLeftArm();
		insertBothArms();
		insertLeftLeg();
	} else if ( guessNo === "6") {
		insertFace();
		insertBody();
		insertLeftArm();
		insertBothArms();
		insertLeftLeg();
		insertBothLegs();
	} else {
	};
}


///////////////////////////////////////HANG MANG////////////////////////////////////////////////////











//////////////////////////////////////TIC TAC DOH////////////////////////////////////////////////////
































//////////////////////////////////////TIC TAC DOH////////////////////////////////////////////////////

