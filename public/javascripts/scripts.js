console.log('ಠ__ಠ')

// getting endagered species from https://www.worldwildlife.org/species/directory?direction=desc&sort=extinction_status
animals = []
$('.keep').each(function(i, e){
	animals.push(e.firstElementChild.text);
});





// creates hangman display

function createsDisplay(){

  $('.hangman').append("<div>                        </div>".replace(/ /g, '&nbsp;&nbsp;'));
  $('.hangman').append("<div>                        </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>                        </div>".replace(/ /g, '&nbsp;&nbsp;'));
  $('.hangman').append("<div>                        </div>".replace(/ /g, '&nbsp;&nbsp;'));
  $('.hangman').append("<div>                        </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>                        </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>                        </div>".replace(/ /g, '&nbsp;&nbsp;'));
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

	$('.cows').append("<div>          (__)             (__)</div>".replace(/ /g, '&nbsp;&nbsp;'));   
  $('.cows').append("<div>          (oo)             (oo)</div>".replace(/ /g, '&nbsp;&nbsp;'));                             
	$('.cows').append("<div>   /-----------\\/       /---------\\/ </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows').append("<div>  / |     ||       / |     ||  </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows').append("<div> *  ||-------||      *  ||W---||  </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.cows').append("<div>    ^^    ^^         ^^    ^^  </div>".replace(/ /g, '&nbsp;&nbsp;'));

}
 //          (__)             (__)   
 //          (oo)             (oo)     
 //   /-------\/       /-------\/     
 //  / |     ||       / |     ||      
 // *  ||----||      *  ||W---||     
 //    ^^    ^^         ^^    ^^   




// class='head_top'
//  class='head_face'
//   class='left_arm right_arm'
//    class='torso'
//    class='left_leg right_leg'

// prepend




function insert_head(){
	$('.hangman div')[11].innerHTML = "        (ಠ_ಠ)  &nbsp;    || ||".replace(/ /g, '&nbsp;&nbsp;');
}

function insert_body(){
	$('.hangman div')[12].innerHTML = "      &nbsp;   ( )   &nbsp;    || ||".replace(/ /g, '&nbsp;&nbsp;');

}

function insert_left_arm(){
	$('.hangman div')[12].innerHTML = "        <( )   &nbsp;    || ||".replace(/ /g, '&nbsp;&nbsp;');

}

function insert_right_arm(){
	$('.hangman div')[12].innerHTML = "        <( )>      || ||".replace(/ /g, '&nbsp;&nbsp;');

}


function insert_left_leg(){
	$('.hangman div')[13].innerHTML = "     &nbsp;    |    &nbsp;    || ||".replace(/ /g, '&nbsp;&nbsp;');

}

function insert_right_leg(){
	$('.hangman div')[13].innerHTML = "     &nbsp;    ||    &nbsp;   || ||".replace(/ /g, '&nbsp;&nbsp;');

}

function insert_cows(){
  
}


 //          (__)             (__)   
 //          (oo)             (oo)     
 //   /-------\/       /-------\/     
 //  / |     ||       / |     ||      
 // *  ||----||      *  ||W---||     
 //    ^^    ^^         ^^    ^^   


/// add creaking sounds as the gallows gets bent around by the code





 //          (__)             (__)   
 //          (oo)             (oo)     
 //   /-------\/       /-------\/     
 //  / |     ||       / |     ||      
 // *  ||----||      *  ||W---||     
 //    ^^    ^^         ^^    ^^    

// '  |  '
// ' _&perp;_  '
// '(ಠ_ಠ) '
// ' < >  '
// '  |   '
// ' /\\  '
// '     '
// '     '





$(function(){
  createsDisplay();
  createsCowDisplay();
})
