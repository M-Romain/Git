/**
 * 
 * Fichier javascript contenant toutes les interactions entre les interfaces.
 */
function afficher_deconnexion(){
	var div = document.getElementById('deconnexion');
	var span = document.getElementById('nom');
	var joueur_co = getCookie("CookieLogin");
	
	if(joueur_co){
		if( div.style.display == 'none'){
			span.innerHTML = joueur_co;
			div.style.display ='block';
		}
	}else{
		self.location.href = "./Client.html";
		return false;
	}
}

$('#deco').click(function(){
	eraseCookie("CookieLogin");
	eraseCookie("CookieLogin2");
	self.location.href = "./Client.html";
});

$('#play').click(function(){
	if(!getCookie("CookieLogin")){
		Connexion();
	}
	else{
		self.location.href = "./SelectionPartie.html";
	}
	return false;
});

$('#rules').click(function(){
	Rules();
	return false;
});

$('#homepage').click(function(){
	HomePage();
	return false;
});

$('#inscrire').click(function(){
	Inscription();
	return false;
});

$('#menu').click(function(){
	Menu();
	return false;
});

$('#newPlay').click(function(){
	NewGame();
	return false;
});

$('#PartieLigne').click(function(){
	Menu();
	return false;
});

$('#PartieLocale').click(function(){
	PlayLocal();
	return false;
});

function PlayLocal(){
	self.location.href = "./ConnexionLocale.html";
}

function Rules(){
	self.location.href = "./Regles.html";
}

function HomePage(){
	self.location.href = "./Client.html";
}

function Connexion(){
	self.location.href = "./Connexion.html";
}

function Inscription(){
	self.location.href = "./Inscription.html";
}

function Menu(){
	self.location.href = "./Menu.html";
}

function NewGame(){
	self.location.href = "./CreationPartie.html";
}