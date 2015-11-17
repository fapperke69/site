
var intJuisteDiv = 1;
var intTeller = 1;
//functie die wordt aangeroepen om de divs in te laten sliden

function slider(richting) {





if (richting == 'links') {

	if (intTeller < 5){

		if (intTeller == 1) {
			 $('.slider').animate({
        'marginLeft' : "-=1406px" //doet de hexagon div naar links.
        }, 500);

		}	

		$('.slides').animate({
        'marginLeft' : "-=1406px" //slide de divs naar links.
        }, 500);

intTeller++;
}
	
} else {

	if (intTeller > 1){

	$('.slides').animate({
        'marginLeft' : "+=1406px" //moves right
        }, 500);

	if (intTeller == 2) {
			 $('.slider').animate({
        'marginLeft' : "+=1406px" //doet de hexagon div naar links.
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

	if (nummervanhexagon == 1){
	

	 	$('.slides').animate({
	        'marginLeft' : "-=1405px" //moves left
	        }, 500);
	} 


}


