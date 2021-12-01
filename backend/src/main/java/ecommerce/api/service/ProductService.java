package ecommerce.api.service;

import java.util.ArrayList;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ecommerce.api.model.Product;
import ecommerce.api.repository.ProductRepository;
@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;

	public Product sumitToDB(Product product) {
	
		
		return productRepository.save(product);
	}
	
	public ArrayList<Product> retriveProductFromDB(){
		ArrayList<Product> productlist = productRepository.findAll();
		Collections.sort(productlist,(a,b)->b.getId()-a.getId());
		return productlist;
		
	}

	public void deleteProductFromDB(int id) {
		
		 productRepository.deleteById(id);
	}

	
	public long totalProduct() {
		return productRepository.count();
	}
	

}
