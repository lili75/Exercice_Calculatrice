var mon_calcul = "";
var ancien_calcul = 0;


function getTouch(nb){
	if (mon_calcul == "" && typeof(nb) != "number"){
		mon_calcul += ancien_calcul+nb
	}else{
		mon_calcul += nb
	}
}

function entree(){
	alert(" => " +mon_calcul+ "\n= " +eval(mon_calcul));

	document.getElementById('affichage').innerHTML = mon_calcul+ " = " +eval(mon_calcul);
	mon_calcul = "";


	var bio = document.getElementById("bio");
	bio.textContent = "NOUVELLE BIOGRAPHIE :D";
}

function cleanThat(){
	mon_calcul = "";
}


function getCalcul(){
	return mon_calcul
}

// ---------------------------
// ---------------------------
// ---------------------------

function add(a,b){
	return a + b;
};

function multiply(a,b){
	return a*b;
};

function divide(a,b){
	return a/b;
};

function substract(a,b){
	return a-b;
};


// str.split(/([0-9])/) -> separator
// str.split(/([^0-9])/) -> Les nombres seront entier(si > a 2 chiffres)
