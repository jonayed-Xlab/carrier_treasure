package ecommerce.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
@Data
@Entity(name="Product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	String productId;
	String productName;
	String productDescription;
	String expireDate;
	String unitStoks;
	String productPrice;
	String imgURL;
}
