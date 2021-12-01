package ecommerce.api.repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ecommerce.api.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>{
	ArrayList<User> findAll();
}
