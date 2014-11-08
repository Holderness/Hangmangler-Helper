console.log('ಠ__ಠ')

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



// function blark(){
// 	$('.cows div:nth-child(1)').append("   _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _                            ".replace(/ /g, '&nbsp;&nbsp;'));
//   $('.cows div:nth-child(2)').append("  |                                   |                           ".replace(/ /g, '&nbsp;&nbsp;'));
//   $('.cows div:nth-child(3)').append("  |                                   |                           ".replace(/ /g, '&nbsp;&nbsp;'));
//   $('.cows div:nth-child(4)').append("  | I am a talking cow. ha ha ha      |                           ".replace(/ /g, '&nbsp;&nbsp;'));
//   $('.cows div:nth-child(5)').append("  |                                   |                           ".replace(/ /g, '&nbsp;&nbsp;'));
// 	$('.cows div:nth-child(6)').append("  |                                   |                           ".replace(/ /g, '&nbsp;&nbsp;'));
//   $('.cows div:nth-child(7)').append("  |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|                           ".replace(/ /g, '&nbsp;&nbsp;'));
//   $('.cows div:nth-child(8)').append("                     \\                                           ".replace(/ /g, '&nbsp;&nbsp;'));
// 	$('.cows div:nth-child(9)').append("                      \\                                          ".replace(/ /g, '&nbsp;&nbsp;')); 
//   $('.cows div:nth-child(10)').append("                       \\                                         ".replace(/ /g, '&nbsp;&nbsp;')); 
// }
pinata = "choo choo motherfucker"
gerbil = "I wish I had hands to touch you with"

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
	}, 4000);
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
	}, 4000);
}

// function createsRightCowDialogue(){
// 	$('.cows div:nth-child(0)').text("                           _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _    ");
//   $('.cows div:nth-child(1)').text("                          |                                   |   ");
//   $('.cows div:nth-child(2)').text("                          |                                   |   ");
//   $('.cows div:nth-child(3)').text("                          | yo quiero burritos                |   ");
//   $('.cows div:nth-child(4)').text("                          |        y Jane Austen              |   ");
// 	$('.cows div:nth-child(5)').text("                          |                                   |   ");
//   $('.cows div:nth-child(6)').text("                          |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|   ");
//   $('.cows div:nth-child(7)').text("                                            /                     ");
// 	$('.cows div:nth-child(8)').text("                                           /                      ");
//   $('.cows div:nth-child(9)').text("                                          /                       ");
// }



function script(){
	var burritos = "  | I am a talking cow. ha ha ha         |                           ".replace(/ /g, '&nbsp;&nbsp;');
	var tacosaco = "                          |                                   |      ".replace(/ /g, '&nbsp;&nbsp;');
	var burritos = "  | Yo quiero burritos                   |                           ".replace(/ /g, '&nbsp;&nbsp;');
	var burritos = "  | Yo quiero burritos                   |                           ".replace(/ /g, '&nbsp;&nbsp;');
	var burritos = "  | Yo quiero burritos                   |                           ".replace(/ /g, '&nbsp;&nbsp;');
	var burritos = "  | Yo quiero burritos                   |                           ".replace(/ /g, '&nbsp;&nbsp;');
	var burritos = "  | Yo quiero burritos                   |                           ".replace(/ /g, '&nbsp;&nbsp;');
	var burritos = "  | Yo quiero burritos                   |                           ".replace(/ /g, '&nbsp;&nbsp;');
  $('.cows')[5].innerHTML = burritos
}


function createsDialogue(dialogue){



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

function moo(){
	var hangmans = ["Hangmoo", "Hangan", "Hangmañ", "Hõngmõn", "Hangmrn"]
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




// to document
$(function(){
  createsDisplay();
  createsCowDisplay();
  createHangmanGame();
  interpretGuess();
  incorrectGuesses();
  moo();
  // checkForNewGames();


  $(document).on('keyup', function(e){
  	if (e.which === 13) {
  		$('form#guess-box').submit();
  		return false
  	} else {
      $("input[name='guess']").val(String.fromCharCode(e.keyCode))
  	}
  });

  // $('#guess-botton').on('keyup', function(e){
  //   if (e.which === 13) {
  //     $('form#guess-box').submit();
  //     return false;
  //   }
  // });

  // setInterval(function(){
  //   $.ajax({ url: "server", success: function(data){
  //       //Update your dashboard gauge
  //       salesGauge.setValue(data.value);
  //   }, dataType: "json"});
  // }, 30000);


})
