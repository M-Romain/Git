package ressources;

import javax.ws.rs.core.Response;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Construction_response
{	
	//pour permettre au client d'acceder au serveur
	public static Response Construct(int stat, Object ent) {		
		return Response.status(stat).header("Access-Control-Allow-Methods", "*").header("Access-Control-Allow-Origin", "*").entity(ent).build();
	}
	
}
