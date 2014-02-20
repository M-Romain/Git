/**
 * 
 * Ficher Javascript pour toutes les actions sur les joueurs
 */

//The root URL for the RESTful services
var rootURL = "http://localhost:8080/PresidentServeur/rest";

$('#connection').click(function(){
	Connect();
	return false;
});

$('#creerLogin').click(function(){
	var test = VerificationPassword( $('#password').val(), $('#VerifPassword').val() );
	if( test != null)
		InscrireJoueur();
	return false;
});


function Connect(){	
	$.ajax({
		type: 'GET',
		url : rootURL + '/Player/Connexion',
		dataType : 'json',
		data: {
			"login": $('#login').val(), 
			"mdp": $('#mdp').val() 
		},
		success : function(data){
			CurrentPlayer = data;
			
			login = $('#login').val();
			mdp = $('#mdp').val();
			
			if(CurrentPlayer.login == login && CurrentPlayer.mdp == mdp) {
				setCookie("CookieLogin", CurrentPlayer.login);
				self.location.href = "./SelectionPartie.html";
			}
			else{
				alert("Mauvaise combinaison login/password");
			}
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert("Chemin non accessible :" + errorThrown+" "+jqXHR.status);
		}
	});
}

function coFormToJSON() {	
	//alert("log "+$('#login').val()+" mdp "+$('#mdp').val() );
	return JSON.stringify({
		"login": $('#login').val(), 
		"mdp": $('#mdp').val() 
		});
}

function setCookie(sName, sValue) {
    var today = new Date(), expires = new Date();
    expires.setTime(today.getTime() + (5*60*60*1000));
    document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
}

function getCookie(sNom) {
    var cookContent = document.cookie, cookEnd, i, j;
    var sName = sNom + "=";
    for (i=0, c=cookContent.length; i<c; i++) {
            j = i + sName.length;
            if (cookContent.substring(i, j) == sName) {
                    cookEnd = cookContent.indexOf(";", j);
                    if (cookEnd == -1) {
                            cookEnd = cookContent.length;
                    }
                    return decodeURIComponent(cookContent.substring(j, cookEnd));
            }
    }
    return null;
}

function eraseCookie(name) {
	setCookie(name,"");
}

function VerificationPassword(mdp, verifMdp){
	if(mdp != verifMdp){
		var d = $("#erreurPwd");
		d.append('Mauvais mot de passe');
		return null;
	}
	else {
		return mdp;
	}
}

function InscrireJoueur(){
	console.log('Inscription joueur :');
	$.ajax({
		type: 'PUT',
		contentType : 'application/json',
		url: rootURL + 'ajoutJoueur/',
		dataType: 'json',
		data : joueurFormToJSON(),
		success : function(data, textStatus, jqXHR){
			alert('Joueur inscrit');
		},
		error : function(jqHXR, testStatus, errorThrown){
			alert('Probleme d\'inscription');
		}
	});
}

function joueurFormToJSON(){
	return JSON.stringify({
		"nom": $('#nom').val(),
		"prenom": $('#prenom').val(),
		"login": $('#login').val(),
		"mail": $('#mail').val(),
		"mdp" : $('#password').val(),
	});
}

function findAllJoueurs() {
	console.log('findAll');
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json", 
	});
}