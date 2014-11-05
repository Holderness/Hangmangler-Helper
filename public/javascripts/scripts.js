console.log('ಠ__ಠ')

// getting endagered species from https://www.worldwildlife.org/species/directory?direction=desc&sort=extinction_status
animals = []
$('.keep').each(function(i, e){
	animals.push(e.firstElementChild.text);
});

animals = ["Amur Leopard", "Black Rhino", "Cross River Gorilla", "Hawksbill Turtle", "Javan Rhino", "Leatherback Turtle", "Mountain Gorilla", "Saola", "South China Tiger", "Sumatran Elephant ", "Sumatran Orangutan", "Sumatran Rhino", "Sumatran Tiger", "Vaquita", "Western Lowland Gorilla", "Yangtze Finless Porpoise", "African Wild Dog", "Amur Tiger", "Asian Elephant", "Bengal Tiger", "Black Spider Monkey", "Black-footed Ferret", "Blue Whale", "Bluefin Tuna", "Bonobo", "Bornean Orangutan", "Borneo Pygmy Elephant", "Chimpanzee", "Eastern Lowland Gorilla", "Fin Whale", "Galápagos Penguin", "Ganges River Dolphin", "Giant Panda", "Green Turtle", "Hector's Dolphin", "Humphead Wrasse", "Indian Elephant", "Indochinese Tiger", "Indus River Dolphin", "Loggerhead Turtle", "Malayan Tiger", "North Atlantic Right Whale", "Orangutan", "Sea Lions", "Sei Whale", "Snow Leopard", "Sri Lankan Elephant", "Tiger", "Whale", "African Elephant"]



// creates hangman display

function createsDisplay(){


	$('.hangman').append("<div>                       </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>                       </div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>                     /||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>           _________//||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>          |        // ||</div>".replace(/ /g, '&nbsp;&nbsp;'));
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
  $('.hangman').append("<div>                   || ||</div>".replace(/ /g, '&nbsp;&nbsp;'));                             
	$('.hangman').append("<div>  _________________|| ||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div> /                    ||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>/_____________________||</div>".replace(/ /g, '&nbsp;&nbsp;'));
	$('.hangman').append("<div>|_____________________||</div>".replace(/ /g, '&nbsp;&nbsp;'));

}







$(function(){
  createsDisplay();
})
