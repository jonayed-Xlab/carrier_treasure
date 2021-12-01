package ecommerce.api.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="Feedback")
public class FeedBack {
	@Id
	@GeneratedValue
	private int id;
	
	private String email;
	private String message;
	
	public FeedBack() {
		super();
	}
	
	public FeedBack(int id, String email, String message) {
		super();
		this.id = id;
		this.email = email;
		this.message = message;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
}
