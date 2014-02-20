package ressources;

import java.util.ArrayList;

import javax.ws.rs.*;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("Joueur")
public class Population {
	private static ArrayList<Joueur> joueurs;
	//private static int countJoueur = 0;

	public Population(){
/*		countJoueur++;
		if(countJoueur == 1){
			joueurs = new ArrayList<Joueur>();
			joueurs.add(new Joueur("Romain", "Morice", "Romain", "romain@president.com", "test"));
			joueurs.add(new Joueur("Amelie", "Lefevre", "Amelie", "amelie@president.com","test"));
			joueurs.add(new Joueur("Charlotte", "Saintpierre", "Charlotte", "charlotte@president.com","test"));
		}*/
	}

	@GET
	@Path("{uniqueId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getDonnees( @PathParam("uniqueId") int id){
		System.out.println(id);
		System.out.println(joueurs.size());
		if(id>=0 && id<joueurs.size())
			return joueurs.get(id).toJSON();
		else 
			return "{\"nom\" : \"Inconnu\", \"prenom\" : \"Inconnu\", \"login\" : \"Inconnu\", \"mail\" : \"Inconnu\", \"mdp\" : \"Inconnu\", \"score\" : 0}";
	}

	@GET
	@Path("query")
	@Produces(MediaType.APPLICATION_JSON) 
	public String getJoueur(@QueryParam("login") String l, @QueryParam("mdp") String m){
		Joueur joueurCo = null;
		System.out.println(l);
		
		for(Joueur j : joueurs)
			if(j.getLogin().equals(l) && j.getMdp().equals(m)){
				joueurCo = j;
				return joueurCo.toJSON();
			} 
		return "{\"nom\" : \"Inconnu\", \"prenom\" : \"Inconnu\", \"login\" : \"Inconnu\", \"mail\" : \"Inconnu\", \"mdp\" : \"Inconnu\", \"score\" : 0}";
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String getJoueurs(){
		int i = 1;
		String s = "[";
		for(Joueur j : joueurs){
			s += j.toJSON();
			if( i < joueurs.size())
				s+=",\n";
			i++;
		}
		s+="]";
		return s;
	}

	/*@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("ajoutJoueur")
	public void AddJoueur(Joueur j){
		Joueur joueur = new Joueur(j.getNom(), j.getPrenom(), j.getLogin(), j.getMail(), j.getMdp());
		joueurs.add(joueur);
		for (Joueur jo : joueurs){
			System.out.println(jo.getNom());
		}
	}*/

	@DELETE
	@Path("supprimeJoueur/{uniqueId}")
	public void DeleteJoueur( @PathParam("uniqueId") int id ){
		System.out.println(id);
		joueurs.remove(id);
	}
}
