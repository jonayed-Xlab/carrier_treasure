package ecommerce.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity(name="User")
public class User {
	@Id
	@GeneratedValue
	private int id;
	
	private String name;
	private String email;
	private String password;
}
