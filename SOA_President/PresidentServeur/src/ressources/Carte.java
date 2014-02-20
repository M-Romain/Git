package ressources;

public class Carte {

	private int idCarte;
	private String couleur;
	private String libelle;
	
	public Carte(){
		this.setIdCarte(0);
		this.setLibelle("");
		this.setCouleur("pique");
	}

	public int getIdCarte() {return idCarte;}
	public String getLibelle() {return libelle;}
	public String getCouleur() {return couleur;}
	
	public void setIdCarte(int idCarte) {this.idCarte = idCarte;}
	public void setLibelle(String libelle) {this.libelle = libelle;}
	public void setCouleur(String couleur) {this.couleur = couleur;}
	

	
}
