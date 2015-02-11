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


function createsCloudDisplay(){

	$('.clouds').append("<div>        ( )       ( )             (  )                </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.clouds').append("<div>      (     ( ) (      )      (  )    (  )   (  )       </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.clouds').append("<div>    (                    )   (  )        (  )    (  )     </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.clouds').append("<div>   (                      )   ( )                 ( )  </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.clouds').append("<div>    (_ - _ - _ - _ - _ - _)    ( _ - _ - _ - _ - _ ( )</div>".replace(/ /g, '&nbsp;&nbsp;'));

}




function leftCowDialogue(pinata){
	$('.cows div:nth-child(5)').append("<span> "+pinata+" </span>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows div:nth-child(7)').append("                o                                           ".replace(/ /g, '&nbsp;&nbsp;'));
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





function playScript(){

// break up into scripts, have an array within arrays, choose from a random script each time

	script = [
	  [
		"I am a talking cow. ha ha ha.",
		"Your mom is. ha ha ha.",
		"Your Mom likes duck sauce. ha ha ha.",
		"Yes. That is true. She does like duck sauce."
		],
		[
		"That bus ride, am I right?",
		"It's not so bad. Everyone likes to shit on the bus.",
		"And pee everywhere too.",
		"We need to install drains."
		],
		[
		"I never miss a good hanging.",
		"I dunno, no one else is here yet.",
		"Hangings can still be good with no people u kno",
		"This is exactly what u need to tell ur therapist"
		],
		[
		"I thought you said they'd be serving bagels."
		],
		[
		"People are getting hung left and right and no one's here.",
		"Is it weird?",
		"Maybe it's not weird.",
		"It IS weird."
		],
		[
		"What did the cow say to the pediatrist?",
		"Iuhono",
		"Betty doesn't love you any more. She loves me now."
		],
		[
		"What did the cow say to the taxi driver?",
		"I dunno. What?",
		"I need to go to 20th and 31st."
		],
		[
		"I like blueberries.",
		" . . . . . . . . . . . ",
		"I really like them."
		],
		[
		"'And when you gaze long into the abyss,'",
		"'the abyss gazes also into you.'",
		"That's Nietzsche, right?",
		"*squeeky fart*"
		],
		[
		"I wish I had hands to touch you with.",
    " . . . . . . .",
    "I wish all my feet were hands",
		],
		[
		"So are these guys farmers?",
		"I'm not sure.",
		"Why are they being hanged?",
		"Why do you always question these things?"
		],
		[
		"Quick, what's your favorite type of bagel?",
		"Onions. Definitely Onions.",
		"Huh. Really?",
		"What?"
		],
		[
    "What scares you the most?",
    "Chickens.",
    "Shit. Really?",
    "No. I'm just kidding. It's the slaughterhouse."
		],
		[
		"Last night I dreamed I was a bagel.",
		"Yeah?",
		"A fat woman ate me and I digested in her stomach for weeks.",
		"You've gotta stop licking the fence."
		],
		[
    "I saw a frog on a rock the other day.",
    "I love frogs.",
    "I dropped some hay on it for it to eat.",
    "Comere, lemme kiss those cow lips."
		],
		[
    "Whenever I see bagels I'm like 'awwww yeahhh'",
    "Do you? Do you really?",
    "You're such an asshole sometimes.",
    "Tell another story and I'll hang myself."
		],
		[
		"What's that movie with the girl dancing in that mountain field?",
		"The Sound of Music?",
		"Yeah, sometimes I wish I could be that girl.",
		"Me too."
		],
		[
		"Wanna go swimming after this?",
		"I didn't bring my bathing suit.",
		"So what?",
		"Ok. At the river though, the pond is gross."
		],
		[
    "Why don't you like swimming in the pond?",
    "People swim there and they make me nervous.",
    "Why?",
    "They just stare at you. Makes me uncomfortable."
		],
		[
    "Jesus Christ, is there a goat on top of me?",
    "No. Why?",
    "Sometimes I feel like there's a goat standing on top of me.",
    "My great uncle was a goat."
		],
		[
    "Hey you, person typing.",
    "Stop. You're embarassing me.",
    "Keep up the good hanging.",
    "Please, don't mind my friend."
		],
		[
    "Mooooo.",
    "Ha ha. You're such an idiot.",
    "Mooooo.",
    "Blink if you're having an aneurysm."
		],
		[
    "Have you ever tried yoga?",
    "No, I have a bad back.",
    "That's exactly why you should do yoga.",
    "I appreciate what you're doing, but stop."
		],
		[
		"'If you leave me now,'",
		"'you'll take away the biggest part of me.'",
    "'Ooo woo woo baby please don't goooooo.'"
		],
		[
    "Hey, how's your novel coming along?",
    "I don't want to talk about it.",
    "I think someone wants to talk about it!!",
    "No, someone really doesn't."
		],
		[
    "If I had each leg on a tortoise . . .",
    "Yeah? And?",
    "Do you.. do you think I could guide them?",
    "Knock yourself out."
		],
		[
		"Have you ever put a tortoise in your mouth?",
		"No. What?",
		"They taste HORRIBLE."
		],
		[
    "Udders.",
    "Udders. Udders.",
    "UDDERS?",
    "UDDERS UDDERS UDDERS UDDERS."
		],
		[
		"Remember when Henrietta got her head stuck in a barrel?",
		"And she stumbled around, bumping into everything?",
		"She had that thing on for weeks.",
		"Rest in Peace, Henrietta."
		],
    [
    "Do ever wanna just climb on a tractor and sing?",
    "No."
    ],
    [
    "The beauty of music is in the rests.",
    "No, idiot, the music's in the music.",
    "Silence is the best music.",
    "I can't tell if you're being passive aggressive."
    ],
    [
    "Being telepathic is the best.",
    "Yeah, I hear you.",
    "It's a brilliant day out isn't it?",
    "Yes, quinoa is a complete protein."
    ]
	]


	for (i = 0; i < (1000); i++){
		(function(i) {
		 setTimeout(function(){
		 	var randomarray = Math.floor(Math.random()*(script.length))
		for (i = 0; i < (script[randomarray].length); i++){
			if ( i % 2 === 0 ) {
				(function(i) {
					setTimeout(function(){
						leftCowDialogue(script[randomarray][i]);
					}, 4000 * i);
				})(i);
			} else {
				(function(i) {
					setTimeout(function(){
						rightCowDialogue(script[randomarray][i]);
					}, 4000 * i);
				})(i); 
			}; // else
		}// for loop, inner
	 }, 17000 * i); // timeout, outer
	})(i); // timeout function, outer
	}; //for loop, outer
} //function



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




// hangman gameplay

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
	$('#new-game').on('submit', function(e){
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
	var hangmans = ["Hangmoo", "Hangan", "Hangmañ", "Hõngmõn", "Hangmrn", "Hangmanos", "Hangmanan", "Hangmank", "Manghan", "Herrgggmerrr"];
	var hangman = hangmans[Math.floor(Math.random()*hangmans.length)];
  $('#new-game').click(function(e){
    $('#moo').text(hangman);
    setTimeout(function(){
      $('#moo').text(hangman);
    }, 1000);
    setTimeout(function(){
      $('#moo').text(hangman);
    }, 1000);
  });
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





//////Profile

var rotation = function(){

}
