package ecommerce.api.repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ecommerce.api.model.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {
	ArrayList<Product> findAll();
	
}
