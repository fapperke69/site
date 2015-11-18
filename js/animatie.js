
var intJuisteDiv = 1;
var intTeller = 1;
//functie die wordt aangeroepen om de divs in te laten sliden

function slider(richting) {





if (richting == 'links') {

	if (intTeller < 5){

		if (intTeller == 1) {
			 $('.slider').animate({
        'marginLeft' : "-=1400px" //doet de hexagon div naar links.
        }, 500);

		}	

		$('.slides').animate({
        'marginLeft' : "-=1400px" //slide de divs naar links.
        }, 500);

intTeller++;
}
	
} else {

	if (intTeller > 1){

	$('.slides').animate({
        'marginLeft' : "+=1400px" //moves right
        }, 500);

	if (intTeller == 2) {
			 $('.slider').animate({
        'marginLeft' : "+=1400px" //doet de hexagon div naar links.
        }, 500);

		}	




	intTeller--;
}

	
}

 



}


/*
** hieronder staat de code om via een klik op een hexagon een specifieke div in te laten scrollen
*/   

function hexagonslide(nummervanhexagon){

if (intTeller == 1){
	if (nummervanhexagon == 1){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=1400px" //moves left
	        }, 500);

	 
	 $('.slider').animate({
        'marginLeft' : "-=1400px" //doet de hexagon div naar links.
        }, 500);
		 intTeller++;
	}
	
	if (nummervanhexagon == 2){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=2800px" //moves left
	        }, 500);

	 
	 $('.slider').animate({
        'marginLeft' : "-=1400px" //doet de hexagon div naar links.
        }, 500);
		 intTeller++;
		 intTeller++;
	}
	if (nummervanhexagon == 3){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=4200px" //moves left
	        }, 500);

	 
	 $('.slider').animate({
        'marginLeft' : "-=1400px" //doet de hexagon div naar links.
        }, 500);
		 intTeller++;
		 intTeller++;
		 intTeller++;
	}
	if (nummervanhexagon == 4){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=5600px" //moves left
	        }, 500);

	 
	 $('.slider').animate({
        'marginLeft' : "-=1400px" //doet de hexagon div naar links.
        }, 500);
		 intTeller++;
		 intTeller++;
		 intTeller++;
		 intTeller++;
	}
}
if (intTeller == 2){
	if (nummervanhexagon == 1){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=0px" //moves left
	        }, 500);

	}
	
	if (nummervanhexagon == 2){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=1400px" //moves left
	        }, 500);

		 intTeller++;
	}
	if (nummervanhexagon == 3){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=2800px" //moves left
	        }, 500);

		 intTeller++;
		 intTeller++;
	}
	if (nummervanhexagon == 4){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=4200px" //moves left
	        }, 500);

		 intTeller++;
		 intTeller++;
		 intTeller++;
	}
}
if (intTeller == 3){
	if (nummervanhexagon == 1){
	

	 	$('.slides').animate({
	        'marginLeft' : "+=1400px" //moves left
	        }, 500);
		intTeller--;
	}
	
	if (nummervanhexagon == 2){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=0px" //moves left
	        }, 500);

	}
	if (nummervanhexagon == 3){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=1400px" //moves left
	        }, 500);

		 intTeller++;
	}
	if (nummervanhexagon == 4){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=2800px" //moves left
	        }, 500);

		 intTeller++;
		 intTeller++;
	}
}
if (intTeller == 4){
	if (nummervanhexagon == 1){
	

	 	$('.slides').animate({
	        'marginLeft' : "+=2800px" //moves left
	        }, 500);
		intTeller--;
		intTeller--;
	}
	
	if (nummervanhexagon == 2){
	

	 	$('.slides').animate({
	        'marginLeft' : "+=1400px" //moves left
	        }, 500);

		 intTeller--;
	}
	if (nummervanhexagon == 3){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=0px" //moves left
	        }, 500);

	}
	if (nummervanhexagon == 4){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=1400px" //moves left
	        }, 500);

		 intTeller++;
	}
}
if (intTeller == 5){
	if (nummervanhexagon == 1){
	

	 	$('.slides').animate({
	        'marginLeft' : "+=4200px" //moves left
	        }, 500);
		intTeller--;
		intTeller--;
		intTeller--;
	}
	
	if (nummervanhexagon == 2){
	

	 	$('.slides').animate({
	        'marginLeft' : "+=2800px" //moves left
	        }, 500);

		 intTeller--;
		 intTeller--;
	}
	if (nummervanhexagon == 3){
	

	 	$('.slides').animate({
	        'marginLeft' : "+=1400px" //moves left
	        }, 500);

		intTeller--;
	}
	if (nummervanhexagon == 4){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=0px" //moves left
	        }, 500);

	}
}
}
