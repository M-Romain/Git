package ressources;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Partie {
	
	private int idPartie;
	private int nb_tour;
	private int score1;
	private int score2;
	private String login1;
	private String login2;

	public Partie(){
		this.idPartie = 0;
		this.nb_tour = 0;
		this.score1 = 0;
		this.score2 = 0;
		this.login1 = null;
		this.login2 = null;
	}

	public Partie(String login1, String login2, int score1, int score2, int nb_tour){
		this.nb_tour = nb_tour;
		this.score1 = score1;
		this.score2 = score2;
		this.login1 = login1;
		this.login2 = login2;
	}

	public int getIdPartie(){return this.idPartie;}
	public int getNbTour(){return this.nb_tour;}
	public int getScore1(){return this.score1;}
	public int getScore2(){return this.score2;}
	public String getlogin1(){return this.login1;}
	public String getlogin2(){return this.login2;}

	/*public String toJSON(){
		return "{ \"idPartie\" : \""+idPartie+"\", \"NbJoueurs\" : \""+NbJoueurs+"\",\"doitJouer\" : \""+doitJouer+"\", \"vainqueur\" : \""+vainqueur+"\", \"dateDebut\" : \""+dateDebut+"\"}";
	}*/
}
