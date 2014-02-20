package ressources;
import java.sql.*;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class BDD 
{	
	public static Connection conn = null;
	public static Statement stmt = null;
	//public static ResultSet res = null;

	public static String userName = "root";
	public static String password = "root";
	
	public static String driver = "com.mysql.jdbc.Driver";
	public static String dbName = "/soa_president";
	public static String url = "jdbc:mysql://localhost";
	//public static String port = "3306";

	public BDD() throws SQLException, ClassNotFoundException {
		
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(url+dbName,userName,password);
		stmt = conn.createStatement();
	}
	
	public void closeConnection(){
		try {
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public int insertJoueur(String nom, String prenom, String login, String mail, String mdp){
		ResultSet resultats = null;
		int idGenere = -1;
		try {
			stmt.executeUpdate("INSERT INTO Joueur (nom, prenom, login, mail, mdp) values ('"+nom+"', '"+prenom+"','"+login+"','"+mail+"','"+mail+"','"+mdp+"')", Statement.RETURN_GENERATED_KEYS);
			resultats = stmt.getGeneratedKeys();
			if (resultats.next()) {
				idGenere = resultats.getInt(1);
			}
			resultats.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return idGenere;
	}
}
