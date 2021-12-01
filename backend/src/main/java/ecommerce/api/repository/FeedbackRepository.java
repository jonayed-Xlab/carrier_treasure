package ecommerce.api.repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ecommerce.api.model.FeedBack;

@Repository
public interface FeedbackRepository extends CrudRepository<FeedBack, Integer>{
	ArrayList<FeedBack> findAll();
}
