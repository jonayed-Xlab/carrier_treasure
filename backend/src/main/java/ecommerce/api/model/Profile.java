package ecommerce.api.model;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;
@Data
@Entity(name="Profile")
public class Profile {
	@Id
	private int id = 1;
		
	String name;
	String email;
	String password;
	}


