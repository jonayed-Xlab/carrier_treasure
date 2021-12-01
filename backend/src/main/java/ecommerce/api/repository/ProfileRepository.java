package ecommerce.api.repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ecommerce.api.model.Profile;

@Repository
public interface ProfileRepository extends CrudRepository<Profile, Integer> {
ArrayList<Profile> findAll();
}
