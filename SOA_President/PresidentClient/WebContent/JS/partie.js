/**
 * 
 * Ficher Javascript pour toutes les actions sur les parties
 */

//The root URL for the RESTful services
var rootURL = "http://localhost:8080/PresidentServeur/rest/Partie/";

$('#showPartieEnPause').click(function(){
	var span = document.getElementById('showPartieEnPause');
	var div = document.getElementById('PlayOnPause');
	if( div.style.display == 'none'){
		span.innerHTML = '-';
		div.style.display ='block';
		SearchTypePartie("EnPause", div);
	}
	else{
		div.style.display = 'none';
		span.innerHTML = '+';
		div.innerHTML ="";
	}
	return false;
});

$('#showPartieEnAttente').click(function(){
	var span = document.getElementById('showPartieEnAttente');
	var div = document.getElementById('PlayOnWait');
	if( div.style.display == 'none'){
		span.innerHTML = '-';
		div.style.display ='block';
		SearchTypePartie("EnAttente", div);
	}
	else {
		div.style.display = 'none';
		span.innerHTML = '+';	
		div.innerHTML ="";
	}
	return false;
});

function SearchTypePartie(etat, div){
	console.log("Recherche parties d'etat : " + etat);
	$.ajax({
		type: 'GET',
		url : rootURL + 'query?etat=' + etat,
		dataType : 'json',
		success : function(data){
			console.log(data);
			console.log("parties d'etat " + etat);
			renderList(data, div);
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert("Mauvais etat :" + errorThrown);
		}
	});
}

function renderList(data, div){
	if(data!=null){
		div.innertHTML ='<ul>';
		for(key in data){
			var unePartie = data[key];
			console.log(div);
			div.innerHTML += '<li><a>'+unePartie.idPartie+' - '+ unePartie.NbJoueurs+'</a></li>';
		}
		div.innertHTML +='</ul>';
	}
}

function findAllParties() {
	console.log('findAll');
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json", 
	});
}

function CreerPartie(){
	console.log('Creation partie :');
	$.ajax({
		type: 'PUT',
		contentType : 'application/json',
		url: rootURL + 'creerPartie/',
		dataType: 'json',
		data : PartieformToJSON(),
		success : function(data, textStatus, jqXHR){
			alert('Joueur inscrit');
		},
		error : function(jqHXR, testStatus, errorThrown){
			alert('Probleme d\'inscription');
		}
	});
}

function PartieformToJSON(){
	var date = new Date(year, month, day);
	return JSON.stringify({
		"NbJoueurs": $('#nbJoueur').val(),
		"dateDebut": date
	});
}